import { moneyFormat } from "../utils/other.util";
import { descriptionResultInterface, itemInterface, itemResultInterface } from "../interfaces/item.interface";
import { searchInterface } from "../interfaces/search.interface";

class Mapper {
    private readonly name: string = 'João Pedro';
    private readonly lastName: string = 'Harbs';

    itemMap = (searchData: itemInterface, descriptionData: descriptionResultInterface): object => {
        let mappedSearch: itemResultInterface = {
            author: {},
            item: {},
        };

        mappedSearch.author = this.authorMap();
        mappedSearch.item = this.mapItem(searchData, descriptionData);

        return mappedSearch;
    }

    searchMap = (searchData: itemInterface[], filters: any): object => {
        let mappedSearch: searchInterface = {
            author: {},
            categories: {},
            items: {},
        };

        mappedSearch.author = this.authorMap();
        mappedSearch.categories = this.categoriesMap(searchData, filters);
        mappedSearch.items = this.itemsMap(searchData);

        return mappedSearch;
    }

    authorMap = (): object => {
       return { name: this.name, lastname: this.lastName }
    }

    categoriesMap = (items: itemInterface[], filters: any): Array<string> => {
        let categories: string[] = [];

        items.forEach(item => {
            const allFilters = filters.filter((f: any) => f.name == 'Categorías');

            if (allFilters) {
                allFilters.forEach((cat: any) => {
                    cat.values.forEach((catVal: any) => {
                        if (!categories.includes(catVal.name)){
                            catVal.path_from_root.forEach((ctg: any) => {
                                categories.push(ctg.name);
                            })
                        }
                    })
                })
            }
        });

        return categories;
    }

    mapItem = (item: itemInterface, descriptionResult: descriptionResultInterface): object => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: moneyFormat(item.price),
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: descriptionResult.plain_text
        };
    }

    itemsMap = (items: itemInterface[]): object => {
        return items.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: moneyFormat(item.price),
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                state: item.seller_address?.state.name
            };
        });
    }

}

export default Mapper;
