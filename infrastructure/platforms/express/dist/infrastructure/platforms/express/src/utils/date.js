"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_DAY_MS = exports.oneHourFromNow = exports.fiveMinutesAgo = exports.fifteenMinutesFromNow = exports.thirtyDaysFromNow = exports.oneYearFromNow = void 0;
const oneYearFromNow = () => {
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
};
exports.oneYearFromNow = oneYearFromNow;
const thirtyDaysFromNow = () => {
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
};
exports.thirtyDaysFromNow = thirtyDaysFromNow;
const fifteenMinutesFromNow = () => {
    return new Date(Date.now() + 1000 * 60 * 15);
};
exports.fifteenMinutesFromNow = fifteenMinutesFromNow;
const fiveMinutesAgo = () => {
    return new Date(Date.now() - 1000 * 60 * 5);
};
exports.fiveMinutesAgo = fiveMinutesAgo;
const oneHourFromNow = () => {
    return new Date(Date.now() + 1000 * 60 * 60);
};
exports.oneHourFromNow = oneHourFromNow;
exports.ONE_DAY_MS = 1000 * 60 * 60 * 24;
