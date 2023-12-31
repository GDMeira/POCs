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
var database_connection_1 = __importDefault(require("../../database/database.connection"));
var error_1 = require("../../errors/error");
function getAmountOfPeople() {
    return __awaiter(this, void 0, void 0, function () {
        var result, amountOfPeople;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_connection_1.default.person.aggregate({
                        _max: {
                            id: true
                        },
                        _count: {
                            id: true
                        }
                    })];
                case 1:
                    result = _a.sent();
                    amountOfPeople = { count: result._count.id, max: result._max.id };
                    return [2 /*return*/, amountOfPeople];
            }
        });
    });
}
function createPerson(person) {
    return database_connection_1.default.person.create({
        data: person
    });
}
function findPersonById(id, forRandomPerson) {
    if (forRandomPerson === void 0) { forRandomPerson = false; }
    return __awaiter(this, void 0, void 0, function () {
        var result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, database_connection_1.default.person.update({
                            data: { visits: { increment: 1 } },
                            where: { id: id }
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, database_connection_1.default.person.findUnique({
                            where: { id: id },
                            include: {
                                review: {
                                    where: { personId: id }
                                }
                            }
                        })];
                case 2:
                    result = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    if ((e_1 === null || e_1 === void 0 ? void 0 : e_1.code) === 'P2025' && !forRandomPerson)
                        throw error_1.error.notFound('Não foi possível encontrar uma pessoa com esse id.');
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/, result];
            }
        });
    });
}
function updatePerson(id, phone) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, database_connection_1.default.person.update({
                            data: { phone: phone },
                            where: { id: id }
                        })];
                case 1:
                    result = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    if ((e_2 === null || e_2 === void 0 ? void 0 : e_2.code) === 'P2025')
                        throw error_1.error.notFound('Não foi possível encontrar uma pessoa com esse id.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, result];
            }
        });
    });
}
function deletePerson(id) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, database_connection_1.default.person.delete({
                            where: { id: id }
                        })];
                case 1:
                    result = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    if ((e_3 === null || e_3 === void 0 ? void 0 : e_3.code) === 'P2025')
                        throw error_1.error.notFound('Não foi possível encontrar uma pessoa com esse id.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, result];
            }
        });
    });
}
var PersonRepository = {
    getAmountOfPeople: getAmountOfPeople,
    createPerson: createPerson,
    findPersonById: findPersonById,
    updatePerson: updatePerson,
    deletePerson: deletePerson,
};
exports.default = PersonRepository;
