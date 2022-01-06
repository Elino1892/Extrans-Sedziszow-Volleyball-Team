import { Link } from "react-router-dom"

import Card from "../../UI/Card/Card";

const PlayerItem = ({ firstName, lastName, number, smallImage, id }) => {
  return (
    <Link className="player-item-link" to={`/druzyna/${id}`}>
      <Card nameClass="player-item player-item--team">
        <div className="player-item__info player-item__info--team">
          {number && <p className="player-item__number player-item__number--team">{number}</p>}
          <div className="player-item__name-wrapper">
            <p className="player-item__first-name player-item__first-name--team">{firstName}</p>
            <p className="player-item__last-name player-item__last-name--team">{lastName}</p>
          </div>
        </div>
        <div className="player-item__image-container player-item__image-container--team">
          <img className="player-item__image player-item__image--team" src={smallImage} alt={`${firstName}${lastName}`} />
        </div>
      </Card >
    </Link>
  )
}

export default PlayerItem;