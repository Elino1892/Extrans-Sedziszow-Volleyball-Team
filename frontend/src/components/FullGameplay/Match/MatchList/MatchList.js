import MatchItem from "../MatchItem/MatchItem"

const MatchList = ({ matches }) => {
  return (
    <main className="matches">
      {matches.map(matchRound =>
        <div key={matchRound.round} className="matches__round">
          <div className="matches__round-info">
            <div className="matches__skewed-box"></div>
            <h2 className="matches__round-title">Kolejka {matchRound.round}</h2>
          </div>
          <div className="matches__results">
            {matchRound.matches.map(match =>
              <MatchItem
                key={match.id}
                homeTeam={match.home_team}
                awayTeam={match.guest_team}
                isFinished={match.is_finished}
                logoHomeTeam={match.home_team_logo}
                logoAwayTeam={match.guest_team_logo}
                isHome={match.is_home}
                homeTeamScore={match.home_team_score}
                awayTeamScore={match.guest_team_score}
                smallPoints={match.set_results}
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