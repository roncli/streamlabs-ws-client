"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMerch = exports.isRaid = exports.isHost = exports.isSubscription = exports.isFollow = exports.isDonation = exports.isBits = exports.StreamlabsClient = void 0;
// Client
var streamlabs_1 = require("./streamlabs");
Object.defineProperty(exports, "StreamlabsClient", { enumerable: true, get: function () { return streamlabs_1.default; } });
// Type guards
var guards_1 = require("./utils/guards");
Object.defineProperty(exports, "isBits", { enumerable: true, get: function () { return guards_1.isBits; } });
Object.defineProperty(exports, "isDonation", { enumerable: true, get: function () { return guards_1.isDonation; } });
Object.defineProperty(exports, "isFollow", { enumerable: true, get: function () { return guards_1.isFollow; } });
Object.defineProperty(exports, "isSubscription", { enumerable: true, get: function () { return guards_1.isSubscription; } });
Object.defineProperty(exports, "isHost", { enumerable: true, get: function () { return guards_1.isHost; } });
Object.defineProperty(exports, "isRaid", { enumerable: true, get: function () { return guards_1.isRaid; } });
Object.defineProperty(exports, "isMerch", { enumerable: true, get: function () { return guards_1.isMerch; } });
//# sourceMappingURL=index.js.map