import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import PlayerPreviousClubCreate from "../../../components/Admin/PlayerPreviousClub/PlayerPreviousClubCreate/PlayerPreviousClubCreate";
import { PLAYER_PREVIOUS_CLUB_CREATE_RESET } from "../../../constants/playerPreviousClubConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createPlayerPreviousClub } from '../../../store/actions/playerPreviousClubActions';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import { listPreviousClubs } from '../../../store/actions/previousClubActions';
import { listPlayers } from '../../../store/actions/playerActions';
import { listGroups } from '../../../store/actions/groupActions';

const PlayerPreviousClubCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const playerList = useSelector(state => state.playerList)
  const { loading: loadingPlayers, error: errorPlayers, players } = playerList

  const playerPreviousClubCreate = useSelector(state => state.playerPreviousClubCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = playerPreviousClubCreate

  const groupList = useSelector(state => state.groupList)
  const { loading: loadingGroupList, error: errorGroupList, groups } = groupList

  const previousClubList = useSelector(state => state.previousClubList)
  const { loading, error, previousClubs } = previousClubList

  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie zawodnika i jego poprzednie kluby";
      window.scrollTo(0, 0)
      dispatch(listPlayers())
      dispatch(listPreviousClubs())
      dispatch(listGroups())
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: PLAYER_PREVIOUS_CLUB_CREATE_RESET })
      navigate('/admin/poprzednie-kluby');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, player, previous_club, season, position) => {
    e.preventDefault();

    dispatch(createPlayerPreviousClub({
      player,
      previous_club,
      season,
      position
    }))
  }

  return (
    <AdminLayout>
      {players.length === 0 ? <LoadingSpinner /> : groups.length === 0 ? <LoadingSpinner /> : previousClubs.length === 0 ? <LoadingSpinner /> :
        <PlayerPreviousClubCreate
          submitHandler={submitHandler}
          loadingCreate={loadingCreate}
          errorCreate={errorCreate}
          clubs={previousClubs}
          players={players}
          groups={groups}
        />
      }
    </AdminLayout>
  )
}

export default PlayerPreviousClubCreatePage;