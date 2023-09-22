"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaValidation(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body);
        if (validation.error)
            return res.status(422).send(validation.error.details[0].message);
        next();
    };
}
exports.default = schemaValidation;
