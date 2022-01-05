import MatchItem from "../MatchItem/MatchItem"

const MatchList = ({ matches }) => {
  return (
    <main className="matches">
      {matches.map(matchRound =>
        <div key={matchRound.id} className="matches__round">
          <div className="matches__round-info">
            <div className="matches__skewed-box"></div>
            <h2 className="matches__round-title">Kolejka {matchRound.round}</h2>
          </div>
          <div className="matches__results">
            {matchRound.matches.map(match =>
              <MatchItem
                key={match.id}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                isFinished={match.isFinished}
                logoHomeTeam={match.logoHomeTeam}
                logoAwayTeam={match.logoAwayTeam}
                isHome={match.isHome}
                homeTeamScore={match.homeTeamScore}
                awayTeamScore={match.awayTeamScore}
                smallPoints={match.smallPoints}
                // homeTeamScoreSet={match.homeTeamScoreSet}
                // awayTeamScoreSet={match.awayTeamScoreSet}
                date={match.date}
              />
            )}
          </div>
        </div>
      )}

    </main>
  )
}

export default MatchList;