"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var http_status_1 = __importDefault(require("http-status"));
var notFound = function (msg) {
    if (msg === void 0) { msg = "Não foi possível encontrar o parâmetro requisitado."; }
    return {
        type: 'notFound',
        message: msg,
        statusCode: http_status_1.default.NOT_FOUND
    };
};
var conflict = function (msg) {
    if (msg === void 0) { msg = "Ocorreu um conflito, essa entrada já existe."; }
    return {
        type: 'conflict',
        message: msg,
        statusCode: http_status_1.default.CONFLICT
    };
};
var unprocessableEntity = function (msg) {
    if (msg === void 0) { msg = "Dados de entrada não estão no formato esperado."; }
    return {
        type: 'unprocessableEntity',
        message: msg,
        statusCode: http_status_1.default.UNPROCESSABLE_ENTITY
    };
};
var badRequest = function (msg) {
    if (msg === void 0) { msg = "Requisição inválida."; }
    return {
        type: 'badRequest',
        message: msg,
        statusCode: http_status_1.default.BAD_REQUEST
    };
};
var acessDenied = function (msg) {
    if (msg === void 0) { msg = "Acesso negado!."; }
    return {
        type: 'acessDenied',
        message: msg,
        statusCode: http_status_1.default.UNAUTHORIZED
    };
};
var internalError = function (msg) {
    if (msg === void 0) { msg = "Erro interno do servidor."; }
    return {
        type: 'internalError',
        message: msg,
        statusCode: http_status_1.default.INTERNAL_SERVER_ERROR
    };
};
exports.error = {
    conflict: conflict,
    notFound: notFound,
    unprocessableEntity: unprocessableEntity,
    badRequest: badRequest,
    acessDenied: acessDenied,
    internalError: internalError,
};
