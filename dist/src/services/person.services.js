"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_1 = require("../../errors/error");
var person_repository_1 = __importDefault(require("../../repositories/person.repository"));
function getRandomPerson() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, amountOfPeople, maxId, id, randomPerson;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, person_repository_1.default.getAmountOfPeople()];
                case 1:
                    _a = _b.sent(), amountOfPeople = _a.count, maxId = _a.max;
                    if (!amountOfPeople || amountOfPeople === 0)
                        throw error_1.error.badRequest("Ainda não temos pessoas cadastradas.");
                    id = Math.floor(Math.random() * (maxId - 1 + 1) + 1);
                    return [4 /*yield*/, person_repository_1.default.findPersonById(id, true)];
                case 2:
                    randomPerson = _b.sent();
                    _b.label = 3;
                case 3:
                    if (!(!randomPerson && amountOfPeople > 0)) return [3 /*break*/, 5];
                    id = Math.floor(Math.random() * (maxId - 1 + 1) + 1);
                    return [4 /*yield*/, person_repository_1.default.findPersonById(id, true)];
                case 4:
                    randomPerson = _b.sent();
                    return [3 /*break*/, 3];
                case 5: return [2 /*return*/, randomPerson];
            }
        });
    });
}
function postPerson(person) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, person_repository_1.default.createPerson(person)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getPerson(id) {
    return __awaiter(this, void 0, void 0, function () {
        var person;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, person_repository_1.default.findPersonById(id)];
                case 1:
                    person = _a.sent();
                    if (!person)
                        throw error_1.error.notFound('Não foi possível encontrar uma pessoa com esse id.');
                    return [2 /*return*/, person];
            }
        });
    });
}
function updatePerson(id, phone) {
    return __awaiter(this, void 0, void 0, function () {
        var person;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, person_repository_1.default.updatePerson(id, phone)];
                case 1:
                    person = _a.sent();
                    return [2 /*return*/, person];
            }
        });
    });
}
function deletePerson(id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, person_repository_1.default.deletePerson(id)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var PersonServices = {
    getRandomPerson: getRandomPerson,
    postPerson: postPerson,
    getPerson: getPerson,
    updatePerson: updatePerson,
    deletePerson: deletePerson,
};
exports.default = PersonServices;
