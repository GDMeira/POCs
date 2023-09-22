"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersonSchema = exports.createPersonSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createPersonSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    phone: joi_1.default.string().min(10).max(11).required()
});
exports.updatePersonSchema = joi_1.default.object({
    phone: joi_1.default.string().min(10).max(11).required()
});
