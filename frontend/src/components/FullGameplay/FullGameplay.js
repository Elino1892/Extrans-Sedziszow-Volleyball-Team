import { useState } from "react";
import MatchList from "./Match/MatchList/MatchList";
import LeagueTable from "./LeagueTable/LeagueTable";
import Button from "../UI/Button/Button";

const FullGameplay = ({ matches, leagueTable }) => {

  // POBRAĆ OD RAZU WSZYSTKIE MECZE I CAŁĄ TABELĘ, ŻEBY ŁATWO SIĘ PRZEMIESZCZAĆ

  const [isMatchActive, setIsMatchActive] = useState(true);

  const changeViewScreenHandler = (isMatchButton) => {
    if (isMatchButton) {
      setIsMatchActive(true)
    } else {
      setIsMatchActive(false)
    }
  }

  return (
    <section className="full-gameplay">
      <div className="full-gameplay__bgc"></div>
      <div className="full-gameplay__sub-nav">
        <div className="full-gameplay__sub-nav-content">
          <Button onClick={() => changeViewScreenHandler(true)} className={isMatchActive ? "button full-gameplay__button full-gameplay__button-active" : "button full-gameplay__button"}>Mecze</Button>
          <Button onClick={() => changeViewScreenHandler(false)} className={!isMatchActive ? "button full-gameplay__button full-gameplay__button-active" : "button full-gameplay__button"}>Tabela</Button>
        </div>
      </div>
      {isMatchActive ?
        <MatchList
          matches={matches}
        />
        :
        <LeagueTable
          leagueTable={leagueTable}
        />
      }


    </section>
  )
}

export default FullGameplay;