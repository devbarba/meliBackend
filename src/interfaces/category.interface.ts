export interface categoryInterface {
    id: string;
    name: string;
    picture?: string | null;
    type?: string | null;
    permalink?: string | null;
    total_items_in_this_category?: number | string;
    path_from_root: {
        id: string;
        name: string;
    }[]
}
