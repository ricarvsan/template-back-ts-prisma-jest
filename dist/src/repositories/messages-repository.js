"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessagesFromDatabase = void 0;
var database_1 = __importDefault(require("../database"));
function getMessagesFromDatabase() {
    return database_1.default.message.findMany();
}
exports.getMessagesFromDatabase = getMessagesFromDatabase;
