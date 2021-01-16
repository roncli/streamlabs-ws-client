import * as EventEmitter from "eventemitter3";
import { IStreamlabsWSOptions } from "./interfaces/IStreamlabsWSOptions";
/**
 * Streamlabs Socket Client
 *
 * @class StreamlabsClient
 * @extends {EventEmitter}
 */
declare class StreamlabsClient extends EventEmitter {
    private readonly BASE_URL;
    private token;
    private emitTests?;
    private rawEvents?;
    private idTable;
    private client;
    /**
     * Creates an instance of StreamlabsClient.
     *
     * @param {IStreamlabsWSOptions} options
     */
    constructor(options: IStreamlabsWSOptions);
    /**
     * Create an instance of a socket.io-client ready to connect
     *
     * @private
     * @returns
     */
    private createClient;
    /**
     * Connect client to streamlabs websocket service
     */
    connect(): void;
    /**
     * Disconnect client from streamlabs websocket service
     */
    disconnect(): void;
    /**
     * Hook streamlabs events and handle each message individually
     *
     * @private
     */
    private hookEventListeners;
    /**
     * Hook raw socket io client events
     *
     * @private
     * @returns
     */
    private hookRawEventListeners;
    /**
     * Core event handling logic
     *
     * @private
     * @param {*} event
     * @returns
     */
    private handleEvent;
}
export default StreamlabsClient;
