import {ExportJob, ExportTypes} from '@entities';
import app from '@server';
import {logger} from '@shared';
import {BAD_REQUEST, OK} from 'http-status-codes';

import supertest, {Response, SuperTest, Test} from 'supertest';
import ExportsRouter from './Exports';

describe('Expert Routes', () => {

    const exportsPath = '/api' + ExportsRouter.path;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe('GET "/api/exports"', () => {

        it(`should return a JSON object with a results object and a status code of ${OK} if the
            request was successful`, (done) => {

            agent.get(`${exportsPath}`)
                .end((err: Error, res: Response) => {
                    if (err) {
                        logger.error(err);
                    }
                    expect(res.status).toBe(OK);
                    // TODO: Check return body JSON to match expected
                    done();
                });
        });

    });

    describe('POST "/api/exports"', () => {

        const workingJob = new ExportJob('id0001', ExportTypes.epub);
        const failingJob = {
            bookId: 'id0002',
            type: 'txt',
        };

        it(`should return a status code of ${OK}`, (done) => {

            agent.post(`${exportsPath}`)
                .send(workingJob)
                .set('Accept', 'application/json')
                .end((err: Error, res: Response) => {
                    if (err) {
                        logger.error(err);
                    }
                    expect(res.status).toBe(OK);
                    done();
                });
        });

        it(`should return a status code of ${BAD_REQUEST}`, (done) => {

            agent.post(`${exportsPath}`)
                .send(failingJob)
                .set('Accept', 'application/json')
                .end((err: Error, res: Response) => {
                    if (err) {
                        logger.error(err);
                    }
                    expect(res.status)
                        .toBe(BAD_REQUEST);
                    done();
                });
        });
    });

    // TODO: Test time duration for each job type

});
