const MatchItem = ({ homeTeam, logoHomeTeam, awayTeam, logoAwayTeam, isHome, homeTeamScore, awayTeamScore, smallPoints, date, isFinished }) => {
  return (
    <>
      <div className={isHome ? "match match-bgc" : "match"}>
        <div className="match__date">
          <p className="match__date-day">{date}</p>
        </div>
        <div className="match__result">
          <div className="match__team">
            <span className="match__team-name">{homeTeam}</span>
            <div className="match__team-logo">
              <img src={logoHomeTeam} alt={`logo zespołu ${homeTeam}`} className="match__team-logo-image" />
            </div>
          </div>
          {isFinished ?
            <p className="match__result-container">
              <span className="match__result-set">{homeTeamScore}</span>
              <span className="match__result-set">:</span>
              <span className="match__result-set">{awayTeamScore}</span>
            </p>
            :
            <p className="match__result-container match__result-container--VS">VS</p>
          }

          <div className="match__team match__team--left">
            <span className="match__team-name">{awayTeam}</span>
            <div className="match__team-logo">
              <img src={logoAwayTeam} alt={`logo zespołu ${awayTeam}`} className="match__team-logo-image" />
            </div>

          </div>
        </div>
        {isFinished &&
          <div className="match__small-points">
            {smallPoints.map((points, index) => <span key={index} className="match__small-points-set">{points}</span>)}
          </div>
        }

      </div>
      <div className="seperator"></div>
    </>
  )
}

export default MatchItem;