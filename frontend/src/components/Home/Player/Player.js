import { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize'

import PlayerDetails from './PlayerDetails/PlayerDetails';
import PlayerItem from './PlayerItem/PlayerItem';
import Button from '../../UI/Button/Button';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const WINDOW_SIZE_SMALL = 639;
const WINDOW_SIZE_MEDIUM = 859;
const WINDOW_SIZE_LARGE = 1024;
const WINDOW_SIZE_XXLARGE = 1440;

const Player = ({ players }) => {

  const [numberItem, setNumberItem] = useState(0);

  const size = useWindowSize()

  const showNextPlayerHandler = () => {
    if (numberItem < players.length - 1) {
      setNumberItem(() => numberItem + 1)
    }
  }

  const showPrevPlayerHandler = () => {
    if (numberItem > 0) {
      setNumberItem(() => numberItem - 1)
    }
  }

  const showClickPlayerHandler = (value) => {
    setNumberItem(value)
  }

  return (
    <section className="player">
      {size.width <= WINDOW_SIZE_SMALL
        ?
        <div className="player__details-container"
        >
          <Swiper className="mySwiper" style={{ width: '100%' }}>
            {players.map((player, index) =>
              <SwiperSlide key={player.id}>
                <div className="next-game__swap-icon">
                  <img src="../../../../images/slide-icon-18.png" alt="" />
                </div>
                <PlayerDetails

                  id={player.id}
                  firstName={player.first_name}
                  lastName={player.last_name}
                  position={player.group.name}
                  dateOfBirth={player.date_of_birth}
                  yearOfJoin={player.year_of_join}
                  number={player.number}
                  largeImage={player.background}
                  showNextPlayerHandler={showNextPlayerHandler}
                  showPrevPlayerHandler={showPrevPlayerHandler}
                  index={index}
                  theLastPlayer={players.length - 1}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        :
        <div className="player__details-container" style={{ transform: `translate3d(${numberItem * -(100 / players.length)}%, 0px, 0px)`, width: `${players.length * 100}%` }}>
          {players.map((player, index) =>
            <PlayerDetails
              key={player.id}
              id={player.id}
              firstName={player.first_name}
              lastName={player.last_name}
              position={player.group.name}
              dateOfBirth={player.date_of_birth}
              yearOfJoin={player.year_of_join}
              number={player.number}
              largeImage={player.background}
              showNextPlayerHandler={showNextPlayerHandler}
              showPrevPlayerHandler={showPrevPlayerHandler}
              index={index}
              theLastPlayer={players.length - 1}
            />
          )}
        </div>
      }
      {
        size.width > WINDOW_SIZE_SMALL &&
        <div className="player__list-player-visible">
          <Button className="button-player prev-player" onClick={showPrevPlayerHandler}><span className="fas fa-arrow-left"></span></Button>
          <Button className="button-player next-player" onClick={showNextPlayerHandler}><span className="fas fa-arrow-right"></span></Button>
          <div className="player__list-player-ovh">
            <div
              className="player__list-player-container"
              style={
                size.width < WINDOW_SIZE_XXLARGE &&
                  size.width >= WINDOW_SIZE_LARGE ?
                  { transform: `translate3d(${numberItem * -(100 / players.length) + 1}%, 0px, 0px)`, width: `${players.length * (100 / 2)}%` }
                  :
                  (
                    size.width < WINDOW_SIZE_LARGE &&
                      size.width > WINDOW_SIZE_SMALL ?
                      {
                        transform: `translate3d(${numberItem * -(100 / players.length)}%, 0px, 0px)`, width: `${players.length * (100)}%`
                      }
                      :
                      {
                        transform: `translate3d(${numberItem * -(100 / players.length) + 1}%, 0px, 0px)`, width: `${players.length * (100 / 3)}%`
                      }
                  )
              }>
              {players.map((player, index) =>
                <PlayerItem
                  key={player.id}
                  firstName={player.first_name}
                  lastName={player.last_name}
                  position={player.group.name}
                  number={player.number}
                  smallImage={player.image}
                  index={index}
                  theLastPlayer={players.length - 1}
                  numberItem={numberItem}
                  showClickPlayerHandler={showClickPlayerHandler}
                />
              )}
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default Player;