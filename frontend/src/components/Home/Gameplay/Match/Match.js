import Button from "../../../UI/Button/Button";

const Match = ({ round, date, hour, teamHome, logoTeamHome, teamAway, logoTeamAway, result, set, hallInfo, showNextMatchHandler, showPrevMatchHandler, index }) => {

  console.log(set)

  return (
    <div className="next-game">

      <Button className="button-match prev-match" disabled={index === 0} onClick={showPrevMatchHandler}><span className="fas fa-arrow-left"></span></Button>
      <Button className="button-match next-match" disabled={index === 4} onClick={showNextMatchHandler}><span className="fas fa-arrow-right"></span></Button>
      <h2 className="next-game__title">{index === 0 || index === 1 ? 'Poprzedni mecz' : 'Następny mecz'}</h2>
      <div className="next-game__info">
        <p className="next-game__round">{round} Kolejka</p>
        <p className="next-game__date">{date}</p>
        <p className="next-game__hour">{hour}</p>
      </div>
      <div className="next-game__match">
        <div className="next-game__team">
          <img src={logoTeamHome} alt="" className="next-game__team-logo" />
          <p className="next-game__team-name">{teamHome}</p>
        </div>
        {result ?
          <span className="next-game__result">{result}</span> :
          <span className="VS">VS</span>
        }
        <div className="next-game__team">
          <img src={logoTeamAway} alt="" className="next-game__team-logo" />
          <p className="next-game__team-name">{teamAway}</p>
        </div>
      </div>
      {set ? <p className="next-game__set-info">
        {set}
      </p>
        :

        <div className="next-game__hall-info">
          <p className="next-game__hall-name">{hallInfo}</p>
        </div>

      }

    </div>
  )
}

export default Match;