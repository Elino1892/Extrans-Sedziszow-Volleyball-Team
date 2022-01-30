import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import PlayerCreate from "../../../components/Admin/Player/PlayerCreate/PlayerCreate";
import { PLAYER_CREATE_RESET } from "../../../constants/playerConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createPlayer } from '../../../store/actions/playerActions';
import { listGroups } from '../../../store/actions/groupActions';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';

const PlayerCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const playerCreate = useSelector(state => state.playerCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = playerCreate

  const groupList = useSelector(state => state.groupList)
  const { loading, error, groups } = groupList


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie zawodnika";
      window.scrollTo(0, 0)
      dispatch(listGroups())
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: PLAYER_CREATE_RESET })
      navigate('/admin/zawodnicy');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, first_name, last_name, height, weight, range_in_attack, range_in_block, date_of_birth, number, year_of_join, description, group, picture, pictureBackground) => {
    e.preventDefault();


    dispatch(createPlayer({
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
    })).then((data) => {
      uploadFileHandler(picture[0], data.id, false)
      setTimeout(() => { uploadFileHandler(pictureBackground[0], data.id, true) }, 2000)
      // return data;
    })
    //   .then((data) => {

    // })

  }


  const uploadFileHandler = async (file, id, isBgc) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('player_id', id)
    // formData.append('isBgc', isBgc)

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
      {loading ? <LoadingSpinner /> :
        <PlayerCreate
          groups={groups}
          submitHandler={submitHandler}
          loadingCreate={loadingCreate}
          errorCreate={errorCreate}
        />
      }
    </AdminLayout>
  )
}

export default PlayerCreatePage;