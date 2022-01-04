import Card from "../../../UI/Card/Card";
import Gradient from "../../../UI/Gradient/Gradient"

const PlayerDetails = ({ firstName, lastName, position, number, largeImage, dateOfBirth, yearOfJoin, showNextPlayerHandler, showPrevPlayerHandler, index, theLastPlayer }) => {
  return (
    <div className="player-details" style={{ backgroundImage: `url(${largeImage})` }}>
      <Gradient type="top-gradient" />
      <Gradient type="bottom-gradient">
      </Gradient>
      <Card nameClass="player-details__info">
        <div className="player-details__background"></div>
        <div className="player-details__number-name">
          <p className="player-details__number">
            {number}
          </p>
          <div className="player-details__name">
            <span className="player-details__first-name">{firstName} </span>
            <span className="player-details__last-name">{lastName}</span>
            <p className="player-details__position">{position}</p>
          </div>

        </div>

        <div className="player-details__date">
          <div className="player-details__date-details">
            <span className="fas fa-birthday-cake"></span>
            <span className="player-details__date-details-title">Data urodzenia</span>
            <p className="player-details__date-details-number">{dateOfBirth}</p>
          </div>

          <div className="player-details__date-details">
            <span className="fas fa-tshirt"></span>
            <span className="player-details__date-details-title">Dołączył do klubu</span>
            <p className="player-details__date-details-number">{yearOfJoin}</p>
          </div>
        </div>
        <button className="button player-details__button">Zobacz zawodnika</button>
      </Card>

    </div>
  )
}

export default PlayerDetails;