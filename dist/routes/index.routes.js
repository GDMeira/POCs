"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_schema_1 = require("../schemas/person.schema");
var express_1 = require("express");
var person_controller_1 = __importDefault(require("../controllers/person.controller"));
var schemaValidation_1 = __importDefault(require("../middlewares/schemaValidation"));
var godPowersValidation_1 = __importDefault(require("../middlewares/godPowersValidation"));
var router = (0, express_1.Router)();
router.get('/person', person_controller_1.default.getPerson);
router.post('/person', (0, schemaValidation_1.default)(person_schema_1.createPersonSchema), person_controller_1.default.postPerson);
router.patch('/person/:id', godPowersValidation_1.default, (0, schemaValidation_1.default)(person_schema_1.updatePersonSchema), person_controller_1.default.updatePerson);
router.delete('/person/:id', godPowersValidation_1.default, person_controller_1.default.deletePerson);
exports.default = router;
