import { Request, Response } from 'express';
import { getItem, getItemDescription } from '../utils/api.util';
import Mapper from '../helpers/mapper.helper';

class ItemService {
    private readonly mapper = new Mapper;

    getItemById = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{

            const { id } = request.params;

            if (!id)
                return response.status(404).json({
                    statusCode: 404,
                    message: 'Item not found!'
                });

            const { data: resItem} = await getItem(id);
            const { data: resDescription } = await getItemDescription(id);
            const responseData = this.mapper.itemMap(resItem, resDescription);

            return response.status(200).json(responseData);
        } catch(err) {
            return response.status(err.response.status).json({
                statusCode: err.response.status,
                message: 'Meli API error!',
                error: err.response.data
            });
        }
    }
}

export default ItemService;
