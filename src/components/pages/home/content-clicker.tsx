import "@styles/pages/home/content-clicker.scss"
import { BsPersonVcard } from "react-icons/bs"
import { GiClothes } from "react-icons/gi"
import { PiSneakerFill } from "react-icons/pi"
import { TbFaceId } from "react-icons/tb"
import AVATAR_IMG from "@assets/img/home/person-test.webp"

const ContentClicker = () => {
  return (
    <div className="content-clicker">
        <div className="clicker__content">
            <ul className="content__navigation">
                <li className="navigation-item">
                    <BsPersonVcard className="item__icon" fill="#9198A1" />
                </li>
                <li className="navigation-item">
                    <TbFaceId className="item__icon" fill="#9198A1" />
                </li>
                <li className="navigation-item">
                    <GiClothes className="item__icon" fill="#9198A1" />
                </li>
                <li className="navigation-item">
                    <PiSneakerFill className="item__icon" fill="#9198A1" />
                </li>
            </ul>
            <div className="content__person">
                <img className="person__img" src={AVATAR_IMG} />
            </div>
        </div>
    </div>
  )
}

export default ContentClicker
