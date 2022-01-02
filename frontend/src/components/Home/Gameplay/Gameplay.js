import { useState } from "react"

import Card from "../../UI/Card/Card"
import firstTeamLogo from "../../../images/team-logo/sedziszow-mlp-logo-192x192.png"
import secondTeamLogo from "../../../images/team-logo/Debica-logo-192x192.jpg"
import thirdTeamLogo from "../../../images/team-logo/hutnik-krakow-logo-192x192.jpg"
import fourthTeamLogo from "../../../images/team-logo/rybik-logo-192x192.jpg"
import fifthTeamLogo from "../../../images/team-logo/JSW-logo-192x192.jpg"
import sixthTeamLogo from "../../../images/team-logo/Jaslo-logo-192x192.jpg"
import Match from "./Match/Match"
import TableLeague from "./TableLeague/TableLeague"

const dummyMatches = [{
  'round': '14',
  'date': 'sobota, 11 grudnia 2021',
  'hour': '17 : 00',
  'teamHome': 'Extrans Sędziszów Małopolski',
  'logoTeamHome': firstTeamLogo,
  'teamAway': 'Jasło',
  'logoTeamAway': sixthTeamLogo,
  'result': '1 : 3',
  'set': '19:25 | 25:21 | 19:25 | 23:25',
  'hallInfo': {
    'name': 'Hala przy LO w Sędziszowie Młp.',
    'street': 'ul. Fabryczna 5',
  }
},
{
  'round': '15',
  'date': 'sobota, 18 grudnia 2021',
  'hour': '18 : 00',
  'teamHome': 'Extrans Sędziszów Małopolski',
  'logoTeamHome': firstTeamLogo,
  'teamAway': 'Dębica',
  'logoTeamAway': secondTeamLogo,
  'result': '1 : 3',
  'set': '23:25 | 25:19 | 23:25 | 21:25',
  'hallInfo': {
    'name': 'Hala przy LO w Sędziszowie Młp.',
    'street': 'ul. Fabryczna 5',
  }
},
{
  'round': '16',
  'date': 'sobota, 08 stycznia 2021',
  'hour': '17 : 00',
  'teamHome': 'Extrans Sędziszów Małopolski',
  'logoTeamHome': firstTeamLogo,
  'teamAway': 'UKS Hutnik Wanda Kraków',
  'logoTeamAway': thirdTeamLogo,
  'hallInfo': {
    'name': 'Hala Wandy Kraków',
    'street': 'ul. Odmogile 1b',
  }
},
{
  'round': '17',
  'date': 'sobota, 15 stycznia 2021',
  'hour': '17 : 00',
  'teamHome': 'Rybnik',
  'logoTeamHome': fourthTeamLogo,
  'teamAway': 'Extrans Sędziszów Małopolski',
  'logoTeamAway': firstTeamLogo,
  'hallInfo': {
    'name': 'Hala Zespołu Szkół Sportowych w Rybniku',
    'street': 'ul. Grunwaldzka 18',
  }
},
{
  'round': '18',
  'date': 'sobota, 22 stycznia 2021',
  'hour': '17 : 00',
  'teamHome': 'AT Jastrzębskiego Węgla',
  'logoTeamHome': fifthTeamLogo,
  'teamAway': 'Extrans Sędziszów Małopolski',
  'logoTeamAway': firstTeamLogo,
  'hallInfo': {
    'name': 'Klub Sportowy Jastrzębski Węgiel',
    'street': 'ul. Reja 10',
  }
},
]



const Gameplay = () => {

  // const [matches, setMatches] = useState([])

  const [numberItem, setNumberItem] = useState(2);
  // const [isTheLastMatch, setIsTheLastMatch] = useState(false)
  // const [isTheFirstMatch, setIsTheFirstMatch] = useState(false)

  const showNextMatchHandler = () => {
    if (numberItem < 4) {
      // setIsTheLastMatch(false)
      setNumberItem(() => numberItem + 1)
    }
    // else if (numberItem === 3) {
    //   setIsTheLastMatch(true)
    // }
  }

  const showPrevMatchHandler = () => {
    if (numberItem > 0) {
      // setIsTheFirstMatch(false)
      setNumberItem(() => numberItem - 1)
    }
    // else {
    //   setIsTheFirstMatch(true)
    // }
  }

  // const style = `style: transform: translate3d(${numberItem * 20}%, 0px, 0px);`

  return (
    <section className="gameplay">

      <div className="gameplay__container-main">
        <div className="gameplay__container-top"></div>
        <div className="gameplay__container-position">
          <Card nameClass="card-background-next-match">
            <div className="game-container" style={{ transform: `translate3d(${numberItem * -20}%, 0px, 0px)` }}>
              {dummyMatches.map((match, index) =>
                <Match
                  round={match.round}
                  date={match.date}
                  hour={match.hour}
                  teamHome={match.teamHome}
                  logoTeamHome={match.logoTeamHome}
                  teamAway={match.teamAway}
                  logoTeamAway={match.logoTeamAway}
                  hallInfo={match.hallInfo}
                  showNextMatchHandler={showNextMatchHandler}
                  showPrevMatchHandler={showPrevMatchHandler}
                  index={index}
                  result={match.result}
                  set={match.set}
                />
              )}
            </div>
            {/* <div className="gameplay__table"></div> */}
          </Card>

          <Card nameClass='card-background-table-league'>
            <TableLeague />
          </Card>
        </div>

      </div>
      {/* <div className="gameplay__container-bottom"></div> */}
    </section>
  )
}

export default Gameplay;