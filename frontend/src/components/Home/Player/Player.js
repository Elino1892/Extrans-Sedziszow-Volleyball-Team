import { useState } from 'react';

import smallImagePiotrŚwieczka from '../../../images/players/Piotr_Świeczka.png';
import smallImageTomaszKotyla from '../../../images/players/Tomasz_Kotyla.png';
import smallImageRafałSzczęch from '../../../images/players/Rafał_Szczęch.png';
import smallImageJanPyrsak from '../../../images/players/Jan_Pyrsak.png';
import largeImagePiotrŚwieczka from '../../../images/players/Piotr_Świeczka_background.jpg';
import largeImageTomaszKotyla from '../../../images/players/Tomasz_Kotyla_background.jpg';
import largeImageRafałSzczęch from '../../../images/players/Rafał_Szczęch_background.jpg';
import largeImageJanPyrsak from '../../../images/players/Jan_Pyrsak_background.jpg';
import PlayerDetails from './PlayerDetails/PlayerDetails';
import PlayerItem from './PlayerItem/PlayerItem';
import Button from '../../UI/Button/Button';


// const dummyPlayers = [{
//   'id': 1,
//   'firstName': 'Piotr',
//   'lastName': 'Świeczka',
//   'position': 'przyjmujący',
//   'dateOfBirth': '01 stycznia 1996',
//   'yearOfJoin': '2021',
//   'number': '1',
//   'smallImage': smallImagePiotrŚwieczka,
//   'largeImage': largeImagePiotrŚwieczka,
// },
// {
//   'id': 2,
//   'firstName': 'Jan',
//   'lastName': 'Pyrsak',
//   'position': 'przyjmujący',
//   'dateOfBirth': '01 stycznia 1998',
//   'yearOfJoin': '2018',
//   'number': '12',
//   'smallImage': smallImageJanPyrsak,
//   'largeImage': largeImageJanPyrsak,
// },
// {
//   'id': 3,
//   'firstName': 'Tomasz',
//   'lastName': 'Kotyla',
//   'position': 'przyjmujący',
//   'dateOfBirth': '01 stycznia 1993',
//   'yearOfJoin': '2017',
//   'number': '15',
//   'smallImage': smallImageTomaszKotyla,
//   'largeImage': largeImageTomaszKotyla,
// },
// {
//   'id': 4,
//   'firstName': 'Rafał',
//   'lastName': 'Szczęch',
//   'position': 'Libero',
//   'dateOfBirth': '01 stycznia 1997',
//   'yearOfJoin': '2017',
//   'number': '16',
//   'smallImage': smallImageRafałSzczęch,
//   'largeImage': largeImageRafałSzczęch,
// },
// ]

const Player = ({ players }) => {

  const [numberItem, setNumberItem] = useState(0);

  const showNextPlayerHandler = () => {
    if (numberItem < players.length - 1) {
      // setIsTheLastMatch(false)
      setNumberItem(() => numberItem + 1)
    }
    // else if (numberItem === 3) {
    //   setIsTheLastMatch(true)
    // }
  }

  const showPrevPlayerHandler = () => {

    if (numberItem > 0) {
      // setIsTheFirstMatch(false)
      setNumberItem(() => numberItem - 1)
    }
    // else {
    //   setIsTheFirstMatch(true)
    // }
  }

  const showClickPlayerHandler = (value) => {
    setNumberItem(value)
  }

  return (
    <section className="player">
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
      <div className="player__list-player-visible">
        <Button className="button-player prev-player" onClick={showPrevPlayerHandler}><span className="fas fa-arrow-left"></span></Button>
        <Button className="button-player next-player" onClick={showNextPlayerHandler}><span className="fas fa-arrow-right"></span></Button>
        {/* <div className="player__list-player-bgc"> */}
        <div className="player__list-player-ovh">
          <div
            className="player__list-player-container"
            style={{
              transform: `translate3d(${numberItem * -(100 / players.length)}%, 0px, 0px)`,
              width: `${players.length * (100 / 3)}%`

            }}>
            {players.map((player, index) =>
              <PlayerItem
                key={player.id}
                firstName={player.first_name}
                lastName={player.last_name}
                position={player.group.name}
                number={player.number}
                smallImage={player.image}
                // showNextPlayerHandler={showNextPlayerHandler}
                // showPrevPlayerHandler={showPrevPlayerHandler}
                index={index}
                theLastPlayer={players.length - 1}
                numberItem={numberItem}
                showClickPlayerHandler={showClickPlayerHandler}
              />
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Player;