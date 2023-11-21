"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageNotFound = exports.notFound = void 0;
var http_status_1 = __importDefault(require("http-status"));
function notFound() {
    return {
        name: 'NOT_FOUND',
        code: http_status_1.default.NOT_FOUND,
    };
}
exports.notFound = notFound;
function messageNotFound() {
    return {
        name: 'MESSAGE_NOT_FOUND',
        code: http_status_1.default.NOT_FOUND,
    };
}
exports.messageNotFound = messageNotFound;
