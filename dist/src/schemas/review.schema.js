"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createReviewSchema = joi_1.default.object({
    grade: joi_1.default.number().integer().min(0).max(10).required(),
    comment: joi_1.default.string().max(200),
    personId: joi_1.default.number().integer().min(1).required()
});
