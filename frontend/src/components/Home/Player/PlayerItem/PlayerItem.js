import Card from "../../../UI/Card/Card";

const PlayerItem = ({ firstName, lastName, position, number, smallImage, index, theLastPlayer, numberItem, showClickPlayerHandler }) => {
  return (
    <Card onClick={() => showClickPlayerHandler(index)} nameClass={numberItem === index ? "player-item player-item--active" : "player-item"}>
      <div className="player-item__info">
        <p className="player-item__number">{number}</p>
        <div className="player-item__name-wrapper">
          <p className="player-item__first-name">{firstName}</p>
          <p className="player-item__last-name">{lastName}</p>
        </div>
        <p className="player-item__position">{position}</p>
      </div>
      <div className="player-item__image-container">
        <img className="player-item__image" src={smallImage} alt={`${firstName}${lastName}`} />
      </div>
    </Card >
  )
}

export default PlayerItem;