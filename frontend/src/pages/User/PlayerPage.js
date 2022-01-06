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
  'date': '01 stycznia 1996',
  'number': '1',
  'position': 'przyjmujący',
  'image': playerImage,
  'bgc': playerBgc,

}

const PlayerPage = () => {

  useEffect(() => {
    document.title = `${dummyPlayer.firstName} ${dummyPlayer.lastName} - Extrans Sędziszów Małopolski`
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
      date={dummyPlayer.date}
      number={dummyPlayer.number}
      position={dummyPlayer.position}
      image={dummyPlayer.image}
      bgc={dummyPlayer.bgc}
    />
  )
}

export default PlayerPage;