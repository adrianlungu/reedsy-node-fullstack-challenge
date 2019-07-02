"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _entities_1 = require("@entities");
const _shared_1 = require("@shared");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = express_1.Router();
const path = '/imports';
const jobs = [];
router.get('/', (req, res) => {
    try {
        return res.status(http_status_codes_1.OK).json({
            pending: jobs.filter((j) => j.state === 'pending'),
            finished: jobs.filter((j) => j.state === 'finished'),
        });
    }
    catch (err) {
        _shared_1.logger.error('', err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
});
router.post('/', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    try {
        const { bookId, type, url } = req.body;
        if (!bookId || bookId.length <= 3) {
            throw Error('Book id is not specified or too short: ' + bookId);
        }
        if (!Object.values(_entities_1.ImportTypes).includes(type)) {
            throw Error('Book type is not supported: ' + type);
        }
        const job = new _entities_1.ImportJob(bookId, type, url);
        jobs.push(job);
        job.process();
        return res.status(http_status_codes_1.OK).send();
    }
    catch (err) {
        _shared_1.logger.error('', err);
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: err.message,
        });
    }
}));
exports.default = { router, path };
