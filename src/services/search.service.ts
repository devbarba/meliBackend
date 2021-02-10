import { Request, Response } from 'express';
import { searchItem } from '../utils/api.util';
import Mapper from '../helpers/mapper.helper';
import { AxiosResponse } from 'axios';

class SearchService {
    private readonly mapper = new Mapper;

    getItemByName = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{

            const { q, limit } = request.query;

            if (q) {
                let responseData;

                await searchItem(q, limit).then((res: AxiosResponse) => {
                    responseData = this.mapper.searchMap(res.data.results);
                }).catch((err) => {
                    return response.status(500).json({
                        statusCode: 500,
                        message: 'Meli API error!',
                        error: err
                    });
                });

                return response.status(200).json(responseData);
            }

            return response.status(404).json({
                statusCode: 404,
                message: 'Items not found!'
            });
        } catch(err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export default SearchService;
