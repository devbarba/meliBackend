import request from 'supertest';
import app from '../../app';

const basePath = '/api';

describe('Meli Challenge App', () => {
    test('This should load with no errors.', async () => {
        expect.assertions(2);
        const response = await request(app).get(basePath);
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            message: 'Welcome to Meli Challenge',
        });
    });

    test('This should allow cors.', async () => {
        expect.assertions(1);
        const response = await request(app).options(basePath);
        expect(response.header['access-control-allow-origin']).toBe('*');
    });
});
