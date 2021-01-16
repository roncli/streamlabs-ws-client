"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = require("eventemitter3");
const IO = require("socket.io-client");
const helpers_1 = require("./utils/helpers");
const guards_1 = require("./utils/guards");
/**
 * Streamlabs Socket Client
 *
 * @class StreamlabsClient
 * @extends {EventEmitter}
 */
class StreamlabsClient extends EventEmitter {
    /**
     * Creates an instance of StreamlabsClient.
     *
     * @param {IStreamlabsWSOptions} options
     */
    constructor(options) {
        super();
        this.BASE_URL = "https://sockets.streamlabs.com/?token=";
        this.idTable = new Set();
        const { token, emitTests, rawEvents } = options;
        if (!token || typeof token !== "string") {
            throw new Error("[STREAMLABS-WS-CLIENT]: constructor expected `token` of type string");
        }
        this.token = token;
        this.emitTests = emitTests;
        this.rawEvents = rawEvents;
    }
    /**
     * Create an instance of a socket.io-client ready to connect
     *
     * @private
     * @returns
     */
    createClient() {
        if (this.client) {
            return;
        }
        const socketUrl = `${this.BASE_URL}${this.token}`;
        const socketIOClientOptions = {
            autoConnect: false,
            forceJSONP: false
        };
        this.client = IO(socketUrl, socketIOClientOptions);
        this.hookEventListeners();
        this.hookRawEventListeners();
    }
    /**
     * Connect client to streamlabs websocket service
     */
    connect() {
        this.createClient();
        this.client.connect();
    }
    /**
     * Disconnect client from streamlabs websocket service
     */
    disconnect() {
        if (this.client) {
            this.client.disconnect();
        }
    }
    /**
     * Hook streamlabs events and handle each message individually
     *
     * @private
     */
    hookEventListeners() {
        this.client.on("event", (event) => {
            try {
                // Assert event.message is array
                if (!helpers_1.isArray(event.message)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event.message must be an array");
                }
                for (const message of event.message) {
                    const currentEventMessage = event;
                    currentEventMessage.message = message;
                    this.handleEvent(currentEventMessage);
                }
            }
            catch (error) {
                this.emit("error", error);
            }
        });
    }
    /**
     * Hook raw socket io client events
     *
     * @private
     * @returns
     */
    hookRawEventListeners() {
        // Return early if no events specified
        if (!this.rawEvents) {
            return;
        }
        for (const eventName of this.rawEvents) {
            this.client.on(eventName, (...data) => {
                this.emit(eventName, ...data);
            });
        }
    }
    /**
     * Core event handling logic
     *
     * @private
     * @param {*} event
     * @returns
     */
    handleEvent(event) {
        // Now assert event.message is not an array
        if (helpers_1.isArray(event.message)) {
            throw new Error("[STREAMLABS-WS-CLIENT]: event.message is expected to be a single object");
        }
        // Check for repeat message
        if (this.idTable.has(event.message._id)) {
            return;
        }
        // Otherwise add to id table 
        this.idTable.add(event.message._id);
        // Return early if configured not to emit tests 
        if (!this.emitTests && event.message && event.message.isTest) {
            return;
        }
        const isTest = !!event.message.isTest;
        switch (event.type) {
            case "follow": {
                // Assert follow event
                if (!guards_1.isFollow(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `follow`");
                }
                this.emit("follow", Object.assign(Object.assign({}, event.message), { platform: "twitch", isTest }));
                break;
            }
            case "subscription": {
                // Assert subscription event
                if (!guards_1.isSubscription(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `subscription`");
                }
                // Assert single message object
                if (helpers_1.isArray(event.message)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event.message is expected to be a single object");
                }
                // Ensure months is of type number
                const months = Number(helpers_1.removeCommas(event.message.months));
                const isReSub = event.message.sub_type && event.message.sub_type === "resub";
                if (isReSub) {
                    this.emit("resubscription", Object.assign(Object.assign({}, event.message), { platform: "twitch", months,
                        isTest }));
                }
                else {
                    this.emit("subscription", Object.assign(Object.assign({}, event.message), { platform: "twitch", months,
                        isTest }));
                }
                break;
            }
            case "donation": {
                // Assert donation event
                if (!guards_1.isDonation(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `donation`");
                }
                // Assert single message object
                if (helpers_1.isArray(event.message)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event.message is expected to be a single object");
                }
                // Ensure amount is of type number
                const amount = Number(helpers_1.removeNonNumeric(event.message.amount));
                this.emit("donation", Object.assign(Object.assign({}, event.message), { platform: "streamlabs", amount,
                    isTest }));
                break;
            }
            case "host": {
                // Assert host event
                if (!guards_1.isHost(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `host`");
                }
                // Assert single message object
                if (helpers_1.isArray(event.message)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event.message is expected to be a single object");
                }
                // Ensure viewers is of type number
                const viewers = Number(helpers_1.removeNonNumeric(event.message.viewers));
                this.emit("host", Object.assign(Object.assign({}, event.message), { platform: "twitch", viewers,
                    isTest }));
                break;
            }
            case "bits": {
                // Assert bits event
                if (!guards_1.isBits(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `bits`");
                }
                // Assert single message object
                if (helpers_1.isArray(event.message)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event.message is expected to be a single object");
                }
                // Ensure viewers is of type number
                const amount = Number(helpers_1.removeNonNumeric(event.message.amount));
                this.emit("bits", Object.assign(Object.assign({}, event.message), { platform: "twitch", amount,
                    isTest }));
                break;
            }
            case "raid": {
                // Assert bits event
                if (!guards_1.isRaid(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `raid`");
                }
                // Assert single message object
                if (helpers_1.isArray(event.message)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event.message is expected to be a single object");
                }
                // Ensure viewers is of type number
                const raiders = Number(helpers_1.removeNonNumeric(event.message.raiders));
                this.emit("raid", Object.assign(Object.assign({}, event.message), { platform: "twitch", raiders,
                    isTest }));
                break;
            }
            case "merch": {
                // Assert bits event
                if (!guards_1.isMerch(event)) {
                    throw new Error("[STREAMLABS-WS-CLIENT]: event expected to be of type `merch`");
                }
                this.emit("merch", Object.assign(Object.assign({}, event.message), { platform: "twitch", isTest }));
                break;
            }
            default: {
                // Unknown event type
                this.emit(event.type, Object.assign(Object.assign({}, event.message), { isTest }));
                break;
            }
        }
    }
}
exports.default = StreamlabsClient;
//# sourceMappingURL=streamlabs.js.map