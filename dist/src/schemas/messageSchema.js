"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.messageSchema = joi_1.default.object({
    text: joi_1.default.string().required(),
});
