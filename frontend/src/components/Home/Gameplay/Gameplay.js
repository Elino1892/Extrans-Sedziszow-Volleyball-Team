import { useState } from "react"

import Card from "../../UI/Card/Card"
import Match from "./Match/Match"
import ShortLeagueTable from "./ShortLeagueTable/ShortLeagueTable"


const Gameplay = ({ matches, table }) => {

  const [numberItem, setNumberItem] = useState(2);

  const showNextMatchHandler = () => {
    if (numberItem < 4) {
      setNumberItem(() => numberItem + 1)
    }
  }

  const showPrevMatchHandler = () => {
    if (numberItem > 0) {
      setNumberItem(() => numberItem - 1)
    }
  }

  return (
    <section className="gameplay">
      <div className="gameplay__container-main">
        <div className="gameplay__container-top"></div>
        <div className="gameplay__container-position">
          <Card nameClass="card-background-next-match">
            <div className="game-container" style={{ transform: `translate3d(${numberItem * -20}%, 0px, 0px)` }}>
              {matches.map((match, index) =>
                <Match
                  key={match.id}
                  round={match.round}
                  date={match.date.substring(0, match.date.length - 8)}
                  hour={match.date.substring(match.date.length - 6, match.date.length)}
                  teamHome={match.home_team}
                  logoTeamHome={match.home_team_logo}
                  teamAway={match.guest_team}
                  logoTeamAway={match.guest_team_logo}
                  hallInfo={match.hall}
                  showNextMatchHandler={showNextMatchHandler}
                  showPrevMatchHandler={showPrevMatchHandler}
                  index={index}
                  result={match.result}
                  set={match.set_results}
                />
              )}
            </div>
          </Card>
          <Card nameClass='card-background-table-league'>
            <ShortLeagueTable
              table={table}
            />
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Gameplay;