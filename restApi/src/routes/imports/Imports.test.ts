import {ImportJob, ImportTypes} from '@entities';
import app from '@server';
import {logger} from '@shared';
import {BAD_REQUEST, OK} from 'http-status-codes';

import supertest, {Response, SuperTest, Test} from 'supertest';
import ImportsRouter from './Imports';

describe('Import Routes', () => {

    const ImportsPath = '/api' + ImportsRouter.path;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe('GET "/api/imports"', () => {

        it(`should return a JSON object with a results object and a status code of ${OK} if the
            request was successful`, (done) => {

            agent.get(`${ImportsPath}`)
                .end((err: Error, res: Response) => {
                    if (err) { logger.error(err); }
                    expect(res.status).toBe(OK);
                    // TODO: Check return body JSON to match expected
                    done();
                });
        });

    });

    describe('POST "/api/Imports"', () => {

        const workingJob = new ImportJob('id0001', ImportTypes.pdf, '');
        const failingJob = {
            bookId: 'id0002',
            type: 'txt',
        };

        it(`should return a status code of ${OK}`, (done) => {

            agent.post(`${ImportsPath}`)
                .send(workingJob)
                .end((err: Error, res: Response) => {
                    if (err) { logger.error(err); }
                    expect(res.status).toBe(OK);
                    done();
                });
        });

        it(`should return a status code of ${BAD_REQUEST}`, (done) => {

            agent.post(`${ImportsPath}`)
                .send(failingJob)
                .end((err: Error, res: Response) => {
                    if (err) { logger.error(err); }
                    expect(res.status).toBe(BAD_REQUEST);
                    done();
                });
        });
    });

    // TODO: Test time duration for each job type

});
