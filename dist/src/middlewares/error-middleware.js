"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandlerMiddleware(error, req, res, next) {
    console.log(error);
    if (error.name === 'Conflict') {
        return res.status(http_status_1.default.CONFLICT).send(error.message);
    }
    return res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send('Internal Server Error');
}
exports.default = errorHandlerMiddleware;
