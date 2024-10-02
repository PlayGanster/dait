import "@styles/pages/friend/friend-content.scss"
import { FaRegCopy } from "react-icons/fa"

const FrinedContent = () => {
  return (
    <div className="friend-content">
        <p className="content-text--leader">Пригласите друзей!</p>
        <p className="content-text--subleader">Вы и ваш друг получите бонусы</p>
        <div className="content-list">
            <div className="list-item">
                <p className="item__name">Пригласить друга</p>
                <p className="item__get"><span className="get__price">500K</span> для вас и вашего друга</p>
            </div>
            <div className="list-item">
                <p className="item__name">Пригласить друга с Telegram Premium</p>
                <p className="item__get"><span className="get__price">1500K</span> для вас и вашего друга</p>
            </div>
            <div className="list-item --buttons">
                <button className="item__button --send">Пригласить друзей</button>
                <button className="item__button --copy"><FaRegCopy size={24} /></button>
            </div>
        </div>
    </div>
  )
}

export default FrinedContent
