import request from 'supertest';
import app from '../../app';

const basePath = '/api';
const existingCategory = 'MLA30810';
const notExistingCategory = 'MLA308101';

describe('`GET /categories/:id`', () => {
    test('Should return `200` with an existing category.', async () => {
        expect.assertions(5);

        const response = await request(app)
            .get(`${basePath}/categories/${existingCategory}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('nested_categories');
        expect(response.body).toBeDefined();
    });

    test('Should return `404` with an not existing category.', async () => {
        expect.assertions(10);

        const response = await request(app)
            .get(`${basePath}/categories/${notExistingCategory}`);

        expect(response.status).toBe(response.status);
        expect(response.body).toHaveProperty('statusCode', response.status);
        expect(response.body).toHaveProperty('message', 'Meli API error!');
        expect(response.body).toHaveProperty('error');
        expect(response.body).toHaveProperty('error.error');
        expect(response.body).toHaveProperty('error.message');
        expect(response.body).toHaveProperty('error.status');
        expect(response.body).toHaveProperty('error.cause');
        expect(response.body).toMatchObject({
            "statusCode": response.status,
            "message": "Meli API error!",
            "error": {
              "error": "not_found",
              "message": `Category not found: ${notExistingCategory}`
            }
        });
        expect(response.body).toBeDefined();
    });
});
