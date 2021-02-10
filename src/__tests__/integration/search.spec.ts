import request from 'supertest';
import app from '../../app';

const basePath = '/api';

describe('`GET /items`', () => {
    test('Should return `200` with limited number of products (4).', async () => {
        expect.assertions(9);

        const response = await request(app)
            .get(`${basePath}/items`)
            .query({ q: 'Macbook M1 2021' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('author');
        expect(response.body).toHaveProperty('author.name');
        expect(response.body).toHaveProperty('author.lastname');
        expect(response.body).toHaveProperty('categories');
        expect(response.body).toHaveProperty('items');
        expect(response.body.items).toHaveLength(4);
        expect(response.body.items.length >= 1).toBeTruthy();
        expect(response.body).toBeDefined();
    });

    test('Should return `200` with limited number of products (4) and not match search.', async () => {
        expect.assertions(9);

        const response = await request(app)
            .get(`${basePath}/items`)
            .query({ q: 'TestabdoXLSXLSLS' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('author');
        expect(response.body).toHaveProperty('author.name');
        expect(response.body).toHaveProperty('author.lastname');
        expect(response.body).toHaveProperty('categories');
        expect(response.body.categories.length == 0).toBeTruthy();
        expect(response.body).toHaveProperty('items');
        expect(response.body.items).toHaveLength(0);
        expect(response.body).toBeDefined();
    });

    test('Should return `200` with limited number of products (20).', async () => {
        expect.assertions(9);

        const response = await request(app)
            .get(`${basePath}/items`)
            .query({ q: 'Macbook M1 2021', limit: 20 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('author');
        expect(response.body).toHaveProperty('author.name');
        expect(response.body).toHaveProperty('author.lastname');
        expect(response.body).toHaveProperty('categories');
        expect(response.body).toHaveProperty('items');
        expect(response.body.items).toHaveLength(20);
        expect(response.body.items.length >= 1).toBeTruthy();
        expect(response.body).toBeDefined();
    });

    test('Should return `422` without `q` queryParam.', async () => {
        expect.assertions(5);

        const response = await request(app)
            .get(`${basePath}/items`);

        expect(response.status).toBe(422);
        expect(response.body).toHaveProperty('errors');
        expect(response.body).toMatchObject({
            "errors": [
              {
                "msg": "Invalid value",
                "param": "q",
                "location": "query"
              }
            ]
          });
        expect(response.body.errors).toHaveLength(1);
        expect(response.body).toBeDefined();
    });
});
