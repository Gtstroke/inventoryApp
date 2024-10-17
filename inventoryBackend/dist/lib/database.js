"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = void 0;
const sqlite3_1 = require("sqlite3");
const sqlite_1 = require("sqlite");
const dbPromise = (0, sqlite_1.open)({
    filename: './database.sqlite',
    driver: sqlite3_1.Database
});
const getDb = async () => {
    return dbPromise;
};
exports.getDb = getDb;
