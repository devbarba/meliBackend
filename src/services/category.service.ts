import { Request, Response } from 'express';
import { getCategoriesById } from '../utils/api.util';
import Mapper from '../helpers/mapper.helper';

class CategoryService {
    private readonly mapper = new Mapper;

    getCategoriesById = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{

            const { id } = request.params;

            if (!id)
                return response.status(404).json({
                    statusCode: 404,
                    message: 'Category not found!'
                });

            const { data: resDescription } = await getCategoriesById(id);
            const responseData = this.mapper.categoryMap(resDescription);

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

export default CategoryService;
