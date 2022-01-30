import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { PLAYER_UPDATE_RESET } from "../../../constants/playerConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getPlayerDetails, updatePlayer } from '../../../store/actions/playerActions';
import PlayerEdit from '../../../components/Admin/Player/PlayerEdit/PlayerEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
import { listGroups } from '../../../store/actions/groupActions';

const PlayerEditPage = () => {

  const params = useParams()
  const { id: playerId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const playerDetails = useSelector(state => state.playerDetails)
  const { loading, error, player } = playerDetails

  const playerUpdate = useSelector(state => state.playerUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = playerUpdate

  const groupList = useSelector(state => state.groupList)
  const { loading: loadingGroupList, error: errorGroupList, groups } = groupList

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja zawodnika";
      window.scrollTo(0, 0)
      dispatch(listGroups())
      if (successUpdate) {
        dispatch({ type: PLAYER_UPDATE_RESET })
        navigate('/admin/zawodnicy');
      }
      else if (!player.last_name || player.id !== Number(playerId)) {
        dispatch(getPlayerDetails(playerId))
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, player, playerId])


  const submitHandler = (e, first_name, last_name, height, weight, range_in_attack, range_in_block, date_of_birth, number, year_of_join, description, group, picture, pictureBackground) => {
    e.preventDefault();

    dispatch(updatePlayer({
      id: playerId,
      first_name,
      last_name,
      height,
      weight,
      range_in_attack,
      range_in_block,
      date_of_birth,
      number,
      year_of_join,
      description,
      group,
    })).then(() => {
      uploadFileHandler(picture[0], false)
      setTimeout(() => { uploadFileHandler(pictureBackground[0], true) }, 3000)
    })
  }


  const uploadFileHandler = async (file, isBgc) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('player_id', playerId)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      if (isBgc) {
        await axios.post('https://extrans-sedziszow-volleyball.herokuapp.com/api/players/upload-bgc/', formData, config)
      } else {
        await axios.post('https://extrans-sedziszow-volleyball.herokuapp.com/api/players/upload/', formData, config)
      }

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <AdminLayout>
      {Object.keys(player).length === 0 ? <LoadingSpinner /> :
        groups.length === 0 ? <LoadingSpinner /> :
          <PlayerEdit
            player={player}
            groups={groups}
            submitHandler={submitHandler}
            loadingUpdate={loadingUpdate}
            errorUpdate={errorUpdate}
          />
      }
    </AdminLayout>
  )
}

export default PlayerEditPage;