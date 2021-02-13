import { Request, Response } from 'express';
import CategoryService from '../services/category.service';

class CategoryController {
    private readonly categoryService = new CategoryService();

    getCategoriesById = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        return await this.categoryService.getCategoriesById(request, response);
    }
}

export default CategoryController;
