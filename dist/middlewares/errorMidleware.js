"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorMidleware(error, req, res, next) {
    console.error(error);
    var statusCode = error.statusCode, message = error.message, type = error.type;
    if (error.hasOwnProperty("statusCode"))
        return res.status(statusCode).send("".concat(type, "\n").concat(message));
    res.sendStatus(http_status_1.default.INTERNAL_SERVER_ERROR);
}
exports.default = errorMidleware;
