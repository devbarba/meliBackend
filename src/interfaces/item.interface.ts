export interface itemInterface {
    id: string;
    title: string;
    seller?: object;
    price: number;
    prices?: object;
    sale_price?: string | null;
    currency_id: string;
    available_quantity?: number,
    sold_quantity: number,
    buying_mode?: string,
    listing_type_id?: string,
    stop_time?: string,
    condition: string,
    permalink?: string,
    thumbnail: string,
    thumbnail_id?: string,
    accepts_mercadopago?: string | boolean,
    installments?: object;
    address?: object;
    shipping: {
        free_shipping: string | boolean;
    };
    seller_address?: {
        state: {
            name: string;
        };
    };
    attributes?: object;
    original_price?: number;
    category_id: string;
    official_store_id?: string | null;
    domain_id?: string;
    catalog_product_id?: string | null;
    tags?: Array<string>;
    order_backend?: number;
    filters?: [
        {
            id: string;
            name: string;
            type: string;
            values: {
                id?: string;
                name?: string;
                path_from_root?: {
                    id?: string;
                    name: string;
                }[]
            }[]
        }[]
    ]
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
