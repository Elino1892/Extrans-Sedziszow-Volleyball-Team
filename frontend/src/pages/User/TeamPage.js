import { useEffect } from 'react';
import PlayerList from '../../components/Player/PlayerList/PlayerList';
import playerImage from '../../images/players/Piotr_Świeczka.png'
import { useDispatch, useSelector } from 'react-redux'
import { listPlayers } from '../../store/actions/playerActions';
import { listGroups } from '../../store/actions/groupActions';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import { PLAYER_DETAILS_RESET } from '../../constants/playerConstants';

const TeamPage = () => {

  const dispatch = useDispatch();

  const playerList = useSelector(state => state.playerList)
  const { loading: loadingPlayerList, error: errorPlayerList, players } = playerList

  const groupList = useSelector(state => state.groupList)
  const { loading, error, groups } = groupList

  useEffect(() => {
    document.title = "Drużyna - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)
    dispatch(listPlayers())
    dispatch(listGroups())
    dispatch({ type: PLAYER_DETAILS_RESET })
  }, [dispatch])

  return (
    <>
      {loadingPlayerList ? <LoadingSpinner /> :
        loading ? <LoadingSpinner /> :
          <PlayerList
            team={players}
            groups={groups}
          />
      }
    </>
  )
}

export default TeamPage;