export interface itemInterface {
    id: string;
    title: string;
    currency_id: string;
    category_id: string;
    price: string;
    thumbnail: string;
    condition: string;
    shipping: {
        free_shipping: string;
    };
}
