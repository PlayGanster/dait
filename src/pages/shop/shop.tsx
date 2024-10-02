import ShopContent from "@/components/pages/shop/shop-content"
import HeaderPage from "@/components/shared/header-page"

const Shop = () => {
  return (
    <div className="shop-page">
        <HeaderPage name="Магазин" />
        <ShopContent />
    </div>
  )
}

export default Shop
