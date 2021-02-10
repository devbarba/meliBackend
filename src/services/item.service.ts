import { Request, Response } from 'express';
import { getItem, getItemDescription } from '../utils/api.util';
import Mapper from '../helpers/mapper.helper';
import { AxiosResponse } from 'axios';

class ItemService {
    private readonly mapper = new Mapper;

    getItemById = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{

            const { id } = request.params;

            if (id) {
                let responseData;

                await getItem(id).then(async (resItem: AxiosResponse) => {
                    await getItemDescription(id).then((resDescription: AxiosResponse) => {
                        responseData = this.mapper.itemMap(resItem.data, resDescription.data);
                    }).catch((err) => {
                        return response.status(err.response.status).json({
                            statusCode: err.response.status,
                            message: 'Meli API error!',
                            error: err.data
                        });
                    });
                }).catch((err) => {
                    return response.status(err.response.status).json({
                        statusCode: err.response.status,
                        message: 'Meli API error!',
                        error: err.response.data
                    });
                });

                return response.status(200).json(responseData);
            }

            return response.status(404).json({
                statusCode: 404,
                message: 'Item not found!'
            });
        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export default ItemService;
