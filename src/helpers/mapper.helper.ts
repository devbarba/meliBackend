import { moneyFormat } from "../utils/other.util";
import { itemInterface } from "../interfaces/item.interface";
import { searchInterface } from "../interfaces/search.interface";

class Mapper {
    private readonly name: string = 'João Pedro';
    private readonly lastName: string = 'Harbs';

    searchMap = (searchData: itemInterface[]): object => {
        let mappedSearch: searchInterface = {
            author: {},
            categories: {},
            items: {},
        };

        mappedSearch.author = this.authorMap();
        mappedSearch.categories = this.categoriesMap(searchData);
        mappedSearch.items = this.itemsMap(searchData);

        return mappedSearch;
    }

    authorMap = (): object => {
       return { name: this.name, lastname: this.lastName }
    }

    categoriesMap = (items: itemInterface[]): Array<string> => {
        let categories: string[] = [];

        items.forEach(item => {
            categories.push(item.category_id)
        });

        return categories;
    }

    itemsMap = (items: itemInterface[]): object => {
        return items.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: moneyFormat(Number(item.price)),
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
          };
        });
      }

}

export default Mapper;
