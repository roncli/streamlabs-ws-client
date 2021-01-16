import { IStreamlabsDonation } from "../interfaces/events/streamlabs/IStreamlabsDonation";
import { IStreamlabsWSEvent, StreamlabsWSEventMessage } from "../interfaces/events/IStreamlabsWSEvent";
import { ITwitchBits } from "../interfaces/events/twitch/ITwitchBits";
import { ITwitchFollow } from "../interfaces/events/twitch/ITwitchFollow";
import { ITwitchHost } from "../interfaces/events/twitch/ITwitchHost";
import { ITwitchMerch } from "../interfaces/events/twitch/ITwitchMerch";
import { ITwitchRaid } from "../interfaces/events/twitch/ITwitchRaid";
import { ITwitchSub } from "../interfaces/events/twitch/ITwitchSub";
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchFollow>}
 */
export declare const isFollow: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<ITwitchFollow>;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchSub>}
 */
export declare const isSubscription: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<ITwitchSub>;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchBits>}
 */
export declare const isBits: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<ITwitchBits>;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchHost>}
 */
export declare const isHost: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<ITwitchHost>;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchRaid>}
 */
export declare const isRaid: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<ITwitchRaid>;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<ITwitchMerch>}
 */
export declare const isMerch: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<ITwitchMerch>;
/**
 * User-defined type guard for asserting a concrete event type
 *
 * @param {IStreamlabsWSEvent<StreamlabsWSEventMessage>} event
 * @returns {event is IStreamlabsWSEvent<IStreamlabsDonation>}
 */
export declare const isDonation: (event: IStreamlabsWSEvent<StreamlabsWSEventMessage>) => event is IStreamlabsWSEvent<IStreamlabsDonation>;
