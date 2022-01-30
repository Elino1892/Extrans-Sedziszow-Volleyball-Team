import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getPlayerDetails } from "../../store/actions/playerActions";
import { PLAYER_DETAILS_RESET } from "../../constants/playerConstants";


import PlayerInfo from "../../components/Player/PlayerInfo/PlayerInfo";
import LoadingCover from "../../components/UI/LoadingCover/LoadingCover";



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