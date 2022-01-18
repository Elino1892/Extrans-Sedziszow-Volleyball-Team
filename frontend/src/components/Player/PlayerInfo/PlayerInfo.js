import { useEffect } from "react";
import { Link } from "react-router-dom"

const PlayerInfo = ({ id, firstName, lastName, height, weight, rangeInAttack, rangeInBlock, dateOfBirth, yearOfJoin, number, position, image, bgc, description, previousClubs }) => {

  useEffect(() => {
    document.title = `${firstName} ${lastName} - Extrans Sędziszów Małopolski`
  }, [])

  return (
    <main className="player-info">
      <div className="player-info__navigation">
        <Link className="player-info__link" to={"/druzyna"}><span className="fas fa-arrow-left"></span> <span className="player-info__link-text">Powrót</span></Link>
      </div>
      <div className="player-info__profile">
        <div className="player-info__container" style={{ backgroundImage: `linear-gradient(to right bottom, transparent, rgba(0, 0, 0, 1)), url(${bgc})` }}>
        </div>
        <div className="player-info__profile-container">
          <div className="player-info__content">
            <p className="player-info__number">{number}</p>
            <div className="player-info__photo">
              <img src={image} alt={`${firstName} ${lastName}`} className="player-info__photo-image" />
            </div>
            <div className="player-info__details">
              <div className="player-info__name-container">
                <span className="player-info__name">{firstName}</span>
                <span className="player-info__name">{lastName}</span>
              </div>
              <p className="player-info__position">{position}</p>
              <div className="player-info__date">
                <div className="player-info__date-container">
                  <p className="player-info__date-text-container">
                    <span className="fas fa-birthday-cake"></span>
                    <span className="player-info__date-text">Data urodzenia</span>
                  </p>
                  <p className="player-info__date-number">
                    {dateOfBirth}
                  </p>
                </div>
                <div className="player-info__date-container">
                  <p className="player-info__date-text-container">
                    <span className="fas fa-tshirt"></span>
                    <span className="player-info__date-text">Data dołączenia do klubu</span>
                  </p>
                  <p className="player-info__date-number">
                    {yearOfJoin}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="article-item__text-container article-item__text-container--player-info">
        <div className="article-item__text">
          <div className="article-item__text-skew-container">
            <div className="article-item__text-content article-item__text-content--player-info">
              <div className="player-info__additional-details">
                <div className="player-info__detail">
                  <p className="player-info__detail-text">Wzrost</p>
                  <p className="player-info__detail-value">{height} cm</p>
                </div>
                <div className="player-info__detail">
                  <p className="player-info__detail-text">Waga</p>
                  <p className="player-info__detail-value">{weight} kg</p>
                </div>
                <div className="player-info__detail">
                  <p className="player-info__detail-text">Zasięg w ataku</p>
                  <p className="player-info__detail-value">{rangeInAttack} cm</p>
                </div>
                <div className="player-info__detail">
                  <p className="player-info__detail-text">Zasięg w bloku</p>
                  <p className="player-info__detail-value">{rangeInBlock} cm</p>
                </div>
              </div>
              <div className="player-info__description">
                <p className="player-info__description-text">{description}</p>
              </div>
              <div className="player-info__previous-clubs">
                <p className="player-info__previous-clubs-title">Poprzednie kluby</p>
                <div className="player-info__previous-clubs-container">
                  <div className="player-info__previous-clubs-header-table">
                    <p>Klub</p>
                    <p>Sezon</p>
                    <p>Pozycja</p>
                  </div>
                  <div className="player-info__previous-clubs-body-table">
                    {previousClubs.map(club =>
                      <p key={club.id} className="player-info__previous-clubs-body-line">
                        <span>{club.previous_club}</span>
                        <span>{club.season}</span>
                        <span>{club.position}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PlayerInfo;