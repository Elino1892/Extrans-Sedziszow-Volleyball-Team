import Card from "../../../UI/Card/Card";

const PlayerItem = ({ firstName, lastName, position, number, smallImage, showNextPlayerHandler, showPrevPlayerHandler, index, theLastPlayer }) => {
  return (
    <Card nameClass="player-item">
      <div className="player-item__info">
        <p className="player-item__number">{number}</p>
        <p className="player-item__first-name">{firstName}</p>
        <p className="player-item__last-name">{lastName}</p>
        <p className="player-item__position">{position}</p>
      </div>
      <div className="player-item__image-container">
        <img className="player-item__image" src={smallImage} alt={`${firstName}${lastName}`} />
      </div>
    </Card >
  )
}

export default PlayerItem;