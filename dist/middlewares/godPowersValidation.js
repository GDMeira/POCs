"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = require("../errors/error");
function godPowersValidation(req, res, next) {
    var password = req.headers.authorization;
    if (password !== process.env.PASSWORD)
        throw error_1.error.acessDenied();
    next();
}
exports.default = godPowersValidation;
