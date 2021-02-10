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
    sold_quantity: string;
}

export interface itemResultInterface {
    author: object;
    item: object;
}


export interface descriptionResultInterface {
    text: string;
    plain_text: string;
    last_updated: string;
    date_created: string;
    snapshot: {
        width: number;
        height: number;
        status: string;
    };
}
