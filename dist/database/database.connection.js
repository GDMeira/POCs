"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var configDataBase = {
    connectionString: process.env.DATABASE_URL
};
if (process.env.NODE_ENV === "production")
    configDataBase.ssl = true;
var db = new pg_1.Pool(configDataBase);
db.connect(function (error, client, done) {
    if (error) {
        console.error('Error connecting to PostgreSQL', error);
    }
    else {
        console.log('--------------- Conected to PostgreSQL');
        done();
    }
});
exports.default = db;
