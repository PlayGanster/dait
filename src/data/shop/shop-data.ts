import { ShopListFilterType } from "@/types/types";

export const ShopListCategory: ShopListFilterType[] = [
    {
        id: 1,
        name: "Одежда",
        category_name: "clothes"
    },
    {
        id: 2,
        name: "Тело",
        category_name: "body"
    },
    {
        id: 3,
        name: "Все",
        category_name: "all"
    }
]

export const ShopListFilter: ShopListFilterType[] = [
    {
        id: 1,
        name: "По убыванию цены",
        filter_name: "low_price"
    },
    {
        id: 2,
        name: "По возрастанию цены",
        filter_name: "high_price"
    }
]
