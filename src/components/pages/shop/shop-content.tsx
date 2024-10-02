import { ShopListCategory, ShopListFilter } from "@/data/shop/shop-data";
import { ShopListFilterType } from "@/types/types";
import "@styles/pages/shop/shop-content.scss"
import { useState } from "react"
import GIFT_IMG from "@assets/img/shop/gift.png"

const ShopContent = () => {

    const [categorySelect, setCategorySelect] = useState<number | null>(3);
    const [categoryActive, setCategoryActive] = useState<boolean>(false)
    const [filterSelect, setFilterSelect] = useState<number | null>(1);
    const [filterActive, setFilterActive] = useState<boolean>(false)

    function renderValueFilter() {
        const selectedFilter = ShopListFilter.find((el_list: ShopListFilterType) => el_list.id === filterSelect);
        return selectedFilter?.name
    }

    function renderValueCategory() {
        const selectedCategory = ShopListCategory.find((el_list: ShopListFilterType) => el_list.id === categorySelect);
        return selectedCategory?.name
    }

    function truncateString(str: string | undefined) {
        if(str === undefined) return str;
        if(str.length < 10) return str;
        return str.slice(0, 10) + (str.length > length ? '...' : '');
    }

  return (
    <div className="shop-content">
        <div className="content__filter--item">
            <p className="filter__name">Фильтр</p>
            <div className="filter__dropdown" onClick={() => {setFilterActive(!filterActive); setCategoryActive(false)}}>
                <p className="dropdown__value">{truncateString(renderValueFilter())}</p>
                {
                    filterActive ? (
                        <div className="dropdown__drop" onClick={(e) => {e.stopPropagation()}}>
                            {
                                ShopListFilter && ShopListFilter.map((el: ShopListFilterType, index: number) => (
                                    <p className="drop-item" key={index} onClick={() => setFilterSelect(el.id)}>{el.name}</p>
                                ))
                            }
                        </div>
                    ) : ""
                }
            </div>
        </div>
        <div className="content__filter--item">
            <p className="filter__name">Категория</p>
            <div className="filter__dropdown" onClick={() => {setFilterActive(false); setCategoryActive(!categoryActive)}}>
                <p className="dropdown__value">{truncateString(renderValueCategory())}</p>
                {
                    categoryActive ? (
                        <div className="dropdown__drop" onClick={(e) => {e.stopPropagation()}}>
                            {
                                ShopListCategory && ShopListCategory.map((el: ShopListFilterType, index: number) => (
                                    <p className="drop-item" key={index} onClick={() => setCategorySelect(el.id)}>{el.name}</p>
                                ))
                            }
                        </div>
                    ) : ""
                }
            </div>
        </div>
        <div className="content__list--product">
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
            <div className="list-item">
                <img className="item__img" src={GIFT_IMG}/>
                <p className="item__name">Default</p>
                <p className="item__price">3 mln</p>
            </div>
        </div>
    </div>
  )
}

export default ShopContent
