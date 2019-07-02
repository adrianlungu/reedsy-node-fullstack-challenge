import {ExportJob, ExportTypes} from '@entities';
import {logger} from '@shared';
import {Request, Response, Router} from 'express';
import {BAD_REQUEST, OK} from 'http-status-codes';

// Init router and path
const router = Router();
const path = '/exports';

const jobs: ExportJob[] = [];

/******************************************************************************
 *                                     Get Exports
 ******************************************************************************/

/**
 * Return Export requests grouped by their current state
 * Full Path: "GET /api/exports"
 */
router.get('/', (req: Request, res: Response) => {
    try {
        return res.status(OK).json({
            pending: jobs.filter((j) => j.state === 'pending'),
            finished: jobs.filter((j) => j.state === 'finished'),
        });
    } catch (err) {
        logger.error('', err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                                     Post Exports
 ******************************************************************************/

/**
 * If valid, add a new request job in memory
 * If not, return error
 * Full Path: "POST /api/exports"
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const {bookId, type} = req.body;

        // Maybe some ISBN validation would be ideal here ?
        // Need more info regarding what kind of Book IDs could be sent in this field
        if (!bookId || bookId.length <= 3) {
            throw Error('Book id is not specified or too short: ' + bookId);
        }

        if (!Object.values(ExportTypes).includes(type)) {
            throw Error('Book type is not supported: ' + type);
        }

        const job = new ExportJob(bookId, type);

        jobs.push(job);
        job.process();

        return res.status(OK).send();

    } catch (err) {
        logger.error('Error in export post request', err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                                     Exports
 ******************************************************************************/

export default {router, path};
