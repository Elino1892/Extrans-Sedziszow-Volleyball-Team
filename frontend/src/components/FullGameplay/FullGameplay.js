import { useState } from "react";
import MatchList from "./Match/MatchList/MatchList";
import TableLeague from "./TableLeague/TableLeague";

const FullGameplay = ({ matches, tableLeague }) => {

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
          <button onClick={() => changeViewScreenHandler(true)} className={isMatchActive ? "button full-gameplay__button full-gameplay__button-active" : "button full-gameplay__button"}>Mecze</button>
          <button onClick={() => changeViewScreenHandler(false)} className={!isMatchActive ? "button full-gameplay__button full-gameplay__button-active" : "button full-gameplay__button"}>Tabela</button>
        </div>
      </div>
      {isMatchActive ?
        <MatchList
          matches={matches}
        />
        :
        <TableLeague
          tableLeague={tableLeague}
        />
      }


    </section>
  )
}

export default FullGameplay;