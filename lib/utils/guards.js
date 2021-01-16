"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDonation = exports.isMerch = exports.isRaid = exports.isHost = exports.isBits = exports.isSubscription = exports.isFollow = void 0;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchFollow>}
 */
const isFollow = (event) => {
    return event.type === "follow";
};
exports.isFollow = isFollow;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchSub>}
 */
const isSubscription = (event) => {
    return event.type === "subscription";
};
exports.isSubscription = isSubscription;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchBits>}
 */
const isBits = (event) => {
    return event.type === "bits";
};
exports.isBits = isBits;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchHost>}
 */
const isHost = (event) => {
    return event.type === "host";
};
exports.isHost = isHost;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchRaid>}
 */
const isRaid = (event) => {
    return event.type === "raid";
};
exports.isRaid = isRaid;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchMerch>}
 */
const isMerch = (event) => {
    return event.type === "merch";
};
exports.isMerch = isMerch;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<IStreamlabsDonation>}
 */
const isDonation = (event) => {
    const coercedEvent = event;
    return coercedEvent.type === "donation" || (coercedEvent.type === undefined && coercedEvent.for === "streamlabs");
};
exports.isDonation = isDonation;
//# sourceMappingURL=guards.js.map