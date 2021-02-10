import { Request, Response } from 'express';
import SearchService from "../services/search.service";

class SearchController {
    private readonly searchService = new SearchService();

    getItemByName = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        return await this.searchService.getItemByName(request, response);
    }
}

export default SearchController;
