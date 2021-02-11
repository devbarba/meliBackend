import { Request, Response } from 'express';
import { searchItem } from '../utils/api.util';
import Mapper from '../helpers/mapper.helper';

class SearchService {
    private readonly mapper = new Mapper;

    getItemByName = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{

            const { q, limit } = request.query;

            if (!q)
                return response.status(404).json({
                    statusCode: 404,
                    message: 'Items not found!'
                });

            const {data: resItem } = await searchItem(q, limit);
            const responseData = this.mapper.searchMap(resItem.results);

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

export default SearchService;
