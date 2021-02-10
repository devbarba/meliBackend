import request from 'supertest';
import app from '../../app';

const basePath = '/api';
const existingItem = 'MLA620399412';
const notExistingItemResource = 'MLA62039941MLA96203994432';
const notExistingItem = 'MLA6203994199999999999';

describe('`GET /items/:id`', () => {
    test('Should return `200` with an existing item.', async () => {
        expect.assertions(16);

        const response = await request(app)
            .get(`${basePath}/items/${existingItem}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('author');
        expect(response.body).toHaveProperty('author.name');
        expect(response.body).toHaveProperty('author.lastname');
        expect(response.body).toHaveProperty('item');
        expect(response.body).toHaveProperty('item.id');
        expect(response.body).toHaveProperty('item.title');
        expect(response.body).toHaveProperty('item.price');
        expect(response.body).toHaveProperty('item.price.currency');
        expect(response.body).toHaveProperty('item.price.amount');
        expect(response.body).toHaveProperty('item.picture');
        expect(response.body).toHaveProperty('item.condition');
        expect(response.body).toHaveProperty('item.free_shipping');
        expect(response.body).toHaveProperty('item.sold_quantity');
        expect(response.body).toHaveProperty('item.description');
        expect(response.body).toBeDefined();
    });

    test('Should return `404` with an not existing resource.', async () => {
        expect.assertions(22);

        const response = await request(app)
            .get(`${basePath}/items/${notExistingItemResource}`);

        expect(response.status).toBe(response.status);
        expect(response.body).not.toHaveProperty('author');
        expect(response.body).not.toHaveProperty('author.name');
        expect(response.body).not.toHaveProperty('author.lastname');
        expect(response.body).not.toHaveProperty('item');
        expect(response.body).not.toHaveProperty('item.id');
        expect(response.body).not.toHaveProperty('item.title');
        expect(response.body).not.toHaveProperty('item.price');
        expect(response.body).not.toHaveProperty('item.price.currency');
        expect(response.body).not.toHaveProperty('item.price.amount');
        expect(response.body).not.toHaveProperty('item.picture');
        expect(response.body).not.toHaveProperty('item.condition');
        expect(response.body).not.toHaveProperty('item.free_shipping');
        expect(response.body).not.toHaveProperty('item.sold_quantity');
        expect(response.body).not.toHaveProperty('item.description');
        expect(response.body).toHaveProperty('statusCode', response.status);
        expect(response.body).toHaveProperty('message', 'Meli API error!');
        expect(response.body).toHaveProperty('error');
        expect(response.body).toHaveProperty('error.error');
        expect(response.body).toHaveProperty('error.message');
        expect(response.body).toMatchObject({
            "statusCode": response.status,
            "message": "Meli API error!",
            "error": {
              "error": "resource not found",
              "message": "Si quieres conocer los recursos de la API que se encuentran disponibles visita el Sitio de Desarrolladores de MercadoLibre (http://developers.mercadolibre.com)"
            }
        });
        expect(response.body).toBeDefined();
    });

    test('Should return `404` with an not existing item.', async () => {
        expect.assertions(21);

        const response = await request(app)
            .get(`${basePath}/items/${notExistingItem}`);

        expect(response.status).toBe(404);
        expect(response.body).not.toHaveProperty('author');
        expect(response.body).not.toHaveProperty('author.name');
        expect(response.body).not.toHaveProperty('author.lastname');
        expect(response.body).not.toHaveProperty('item');
        expect(response.body).not.toHaveProperty('item.id');
        expect(response.body).not.toHaveProperty('item.title');
        expect(response.body).not.toHaveProperty('item.price');
        expect(response.body).not.toHaveProperty('item.price.currency');
        expect(response.body).not.toHaveProperty('item.price.amount');
        expect(response.body).not.toHaveProperty('item.picture');
        expect(response.body).not.toHaveProperty('item.condition');
        expect(response.body).not.toHaveProperty('item.free_shipping');
        expect(response.body).not.toHaveProperty('item.sold_quantity');
        expect(response.body).not.toHaveProperty('item.description');
        expect(response.body.error).toHaveProperty('status', 404);
        expect(response.body.error).toHaveProperty('message', `Item with id ${notExistingItem} not found`);
        expect(response.body.error).toHaveProperty('error', 'not_found');
        expect(response.body.error).toHaveProperty('cause', []);
        expect(response.body.error).toMatchObject({
            "message": `Item with id ${notExistingItem} not found`,
            "error": "not_found",
            "status": 404,
            "cause": []
          });
        expect(response.body).toBeDefined();
    });
});
