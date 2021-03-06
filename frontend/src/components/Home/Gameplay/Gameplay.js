import { useState } from "react"
import useWindowSize from "../../../hooks/useWindowSize"

import Card from "../../UI/Card/Card"
import Match from "./Match/Match"
import ShortLeagueTable from "./ShortLeagueTable/ShortLeagueTable"
import { Swiper, SwiperSlide } from "swiper/react";

import swapIcon from '../../../images/slide-icon-18.png'

import "swiper/css";

const WIDTH_SCREEN_MOBILE_SWAP = 1023;

const Gameplay = ({ matches, table }) => {

  const size = useWindowSize();

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

            {size.width < WIDTH_SCREEN_MOBILE_SWAP ?
              <div className="game-container"
              >
                <Swiper className="mySwiper"
                  initialSlide={2}
                >
                  {matches.map((match, index) =>
                    <SwiperSlide key={match.id}>
                      <div className="next-game__swap-icon">
                        <img src={swapIcon} alt="ikona przewijania" />
                      </div>
                      <Match

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
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
              :
              <div className="game-container"
                style={{ transform: `translate3d(${numberItem * -20}%, 0px, 0px)`, width: '500%' }}
              >
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
            }

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