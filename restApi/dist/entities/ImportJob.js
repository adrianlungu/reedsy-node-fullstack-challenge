"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = require("./Job");
var ImportTypes;
(function (ImportTypes) {
    ImportTypes["word"] = "word";
    ImportTypes["pdf"] = "pdf";
    ImportTypes["wattpad"] = "wattpad";
    ImportTypes["evernote"] = "evernote";
})(ImportTypes = exports.ImportTypes || (exports.ImportTypes = {}));
class ImportJob extends Job_1.Job {
    constructor(bookId, type, url) {
        super(bookId, type);
        this.url = url;
    }
}
exports.ImportJob = ImportJob;
