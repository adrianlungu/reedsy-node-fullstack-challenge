"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = require("./Job");
var ExportTypes;
(function (ExportTypes) {
    ExportTypes["epub"] = "epub";
    ExportTypes["pdf"] = "pdf";
})(ExportTypes = exports.ExportTypes || (exports.ExportTypes = {}));
class ExportJob extends Job_1.Job {
    constructor(bookId, type) {
        super(bookId, type);
    }
}
exports.ExportJob = ExportJob;
