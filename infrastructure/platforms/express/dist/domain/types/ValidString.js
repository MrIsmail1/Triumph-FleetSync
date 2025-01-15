"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidString = void 0;
const StringTooLongError_1 = require("../errors/StringTooLongError");
const StringTooShortError_1 = require("../errors/StringTooShortError");
class ValidString {
    constructor(value) {
        this.value = value;
    }
    static from(value) {
        const trimmedValue = value.trim();
        if (trimmedValue.length < 3) {
            return new StringTooShortError_1.StringTooShortError();
        }
        if (trimmedValue.length > 254) {
            return new StringTooLongError_1.StringTooLongError();
        }
        return new ValidString(trimmedValue);
    }
    static reconstitute(value) {
        return new ValidString(value);
    }
}
exports.ValidString = ValidString;
