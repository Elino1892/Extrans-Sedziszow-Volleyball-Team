import { useEffect } from "react";

import playerImage from '../../images/players/Piotr_Świeczka.png'
import playerBgc from '../../images/players/Piotr_Świeczka_background.jpg'
import PlayerInfo from "../../components/Player/PlayerInfo/PlayerInfo";

const dummyPlayer = {

  'id': 1,
  'firstName': 'Piotr',
  'lastName': 'Świeczka',
  'height': '195',
  'weight': '95',
  'rangeInAttack': '342',
  'rangeInBlock': '335',
  'dateOfBirth': '01 stycznia 1996',
  'yearOfJoin': '2021',
  'number': '1',
  'position': 'przyjmujący',
  'image': playerImage,
  'bgc': playerBgc,
  'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit laudantium nemo facilis iste itaque excepturi autem quos nulla eius, unde debitis quaerat voluptatum nihil harum deserunt consectetur. Consectetur, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit laudantium nemo facilis iste itaque excepturi autem quos nulla eius, unde debitis quaerat voluptatum nihil harum deserunt consectetur. Consectetur, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit laudantium nemo facilis iste itaque excepturi autem quos nulla eius, unde debitis quaerat voluptatum nihil harum deserunt consectetur. Consectetur, adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit laudantium nemo facilis iste itaque excepturi autem quos nulla eius, unde debitis quaerat voluptatum nihil harum deserunt consectetur. Consectetur, adipisci?',
  'previousClubs': [
    {
      'id': 1,
      'name': 'Ropczyce',
      'season': '2020/2021',
      'position': 'przyjmujący',
    },
    {
      'id': 2,
      'name': 'Neobus Niebylec',
      'season': '2019/2020',
      'position': 'libero',
    },
    {
      'id': 3,
      'name': 'Neobus Niebylec',
      'season': '2018/2019',
      'position': 'przyjmujący',
    },
  ]
}

const PlayerPage = () => {

  useEffect(() => {
    document.title = `${dummyPlayer.firstName} ${dummyPlayer.lastName} - Extrans Sędziszów Małopolski`
    window.scrollTo(0, 0)
  }, [])

  return (
    <PlayerInfo
      id={dummyPlayer.id}
      firstName={dummyPlayer.firstName}
      lastName={dummyPlayer.lastName}
      height={dummyPlayer.height}
      weight={dummyPlayer.weight}
      rangeInAttack={dummyPlayer.rangeInAttack}
      rangeInBlock={dummyPlayer.rangeInBlock}
      dateOfBirth={dummyPlayer.dateOfBirth}
      yearOfJoin={dummyPlayer.yearOfJoin}
      number={dummyPlayer.number}
      position={dummyPlayer.position}
      image={dummyPlayer.image}
      bgc={dummyPlayer.bgc}
      description={dummyPlayer.description}
      previousClubs={dummyPlayer.previousClubs}
    />
  )
}

export default PlayerPage;