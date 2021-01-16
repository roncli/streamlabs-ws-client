"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNonNumeric = exports.removeCommas = exports.isArray = void 0;
/**
 * Assert given input is of type array
 *
 * @param {any} input
 * @returns {input is any[]}
 */
const isArray = (input) => Array.isArray(input);
exports.isArray = isArray;
/**
 * Remove commas from an input string
 *
 * @param {*} input
 */
const removeCommas = (input) => String(input).replace(/,/g, "");
exports.removeCommas = removeCommas;
/**
 * Remove non-numeric characters from an input string
 *
 * @param {*} input
 */
const removeNonNumeric = (input) => String(input).replace(/[^0-9.]/g, "");
exports.removeNonNumeric = removeNonNumeric;
//# sourceMappingURL=helpers.js.map