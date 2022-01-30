import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getPlayerDetails } from "../../store/actions/playerActions";
import { PLAYER_DETAILS_RESET } from "../../constants/playerConstants";

import playerImage from '../../images/players/Piotr_Świeczka.png'
import playerBgc from '../../images/players/Piotr_Świeczka_background.jpg'
import PlayerInfo from "../../components/Player/PlayerInfo/PlayerInfo";
import LoadingCover from "../../components/UI/LoadingCover/LoadingCover";

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

  const params = useParams()
  const { id: playerId } = params;

  const dispatch = useDispatch();

  const playerDetails = useSelector(state => state.playerDetails)
  const { loading, error, player } = playerDetails

  useEffect(() => {
    window.scrollTo(0, 0)

    if (!player.last_name || player.id !== Number(playerId)) {
      dispatch(getPlayerDetails(playerId))
    }

    // return () => {
    //   dispatch({ type: PLAYER_DETAILS_RESET })
    // }
  }, [dispatch, player, playerId])


  return (
    <>
      {!Object.keys(player).length ? <LoadingCover /> :
        <PlayerInfo
          id={player.id}
          firstName={player.first_name}
          lastName={player.last_name}
          height={player.height}
          weight={player.weight}
          rangeInAttack={player.range_in_attack}
          rangeInBlock={player.range_in_block}
          dateOfBirth={player.date_of_birth}
          yearOfJoin={player.year_of_join}
          number={player.number}
          position={player.group.name}
          image={player.image}
          bgc={player.background}
          description={player.description}
          previousClubs={player.playerPreviousClubs}
        />
      }
    </>
  )
}

export default PlayerPage;