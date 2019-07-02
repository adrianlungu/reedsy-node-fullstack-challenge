"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Utils_1 = tslib_1.__importDefault(require("../shared/Utils"));
class Job {
    constructor(bookId, type) {
        this.bookId = bookId;
        this.type = type;
        this.state = 'pending';
        this.created_at = Date.now();
        this.updated_at = 0;
    }
    process() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            switch (this.type) {
                case 'epub':
                    yield Utils_1.default.Stall(10 * 1000);
                    break;
                case 'pdf':
                    yield Utils_1.default.Stall(10 * 1000);
                    break;
                default:
                    yield Utils_1.default.Stall(10 * 1000);
                    break;
            }
            this.finishProcess();
        });
    }
    finishProcess() {
        this.updated_at = Date.now();
        this.state = 'finished';
    }
}
exports.Job = Job;
