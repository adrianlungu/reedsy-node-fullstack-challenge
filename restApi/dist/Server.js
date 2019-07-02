"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const Base_1 = tslib_1.__importDefault(require("./routes/Base"));
const app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(Base_1.default.path, Base_1.default.router);
exports.default = app;