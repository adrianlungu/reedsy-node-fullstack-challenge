"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const Exports_1 = tslib_1.__importDefault(require("./exports/Exports"));
const Imports_1 = tslib_1.__importDefault(require("./imports/Imports"));
const router = express_1.Router();
const path = '/api';
router.use(Exports_1.default.path, Exports_1.default.router);
router.use(Imports_1.default.path, Imports_1.default.router);
router.get('/', (req, res, next) => {
    res.send('');
});
exports.default = { router, path };
