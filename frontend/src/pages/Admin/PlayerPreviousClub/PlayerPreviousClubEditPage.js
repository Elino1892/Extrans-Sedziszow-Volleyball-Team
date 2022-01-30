import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { PLAYER_PREVIOUS_CLUB_UPDATE_RESET } from "../../../constants/playerPreviousClubConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getPlayerPreviousClubDetails, updatePlayerPreviousClub } from '../../../store/actions/playerPreviousClubActions';
import PlayerPreviousClubEdit from '../../../components/Admin/PlayerPreviousClub/PlayerPreviousClubEdit/PlayerPreviousClubEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
import { listPlayers } from '../../../store/actions/playerActions';
import { listGroups } from '../../../store/actions/groupActions';
import { listPreviousClubs } from '../../../store/actions/previousClubActions';

const PlayerPreviousClubEditPage = () => {

  const params = useParams()
  const { id: previousClubPlayerId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin



  const playerPreviousClubUpdate = useSelector(state => state.playerPreviousClubUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = playerPreviousClubUpdate

  const previousClubList = useSelector(state => state.previousClubList)
  const { loading: loadingPreviousClubsList, error: errorPreviousClubsList, previousClubs } = previousClubList

  const groupList = useSelector(state => state.groupList)
  const { loading: loadingGroupList, error: errorGroupList, groups } = groupList

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja zawodnika";
      window.scrollTo(0, 0)
      dispatch(listPreviousClubs())
      dispatch(listGroups())
      if (successUpdate) {
        dispatch({ type: PLAYER_PREVIOUS_CLUB_UPDATE_RESET })
        navigate('/admin/poprzednie-kluby');
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, previousClubPlayerId])


  const submitHandler = (e, player, position, previous_club, season) => {
    e.preventDefault();

    dispatch(updatePlayerPreviousClub({
      id: previousClubPlayerId,
      player,
      position,
      previous_club,
      season
    }))
  }

  return (
    <AdminLayout>
      {
        groups.length === 0 ? <LoadingSpinner /> :
          previousClubs.length === 0
            ? <LoadingSpinner /> :
            <PlayerPreviousClubEdit
              submitHandler={submitHandler}
              loadingUpdate={loadingUpdate}
              errorUpdate={errorUpdate}
              clubs={previousClubs}
              groups={groups}
            />
      }
    </AdminLayout>
  )
}

export default PlayerPreviousClubEditPage;