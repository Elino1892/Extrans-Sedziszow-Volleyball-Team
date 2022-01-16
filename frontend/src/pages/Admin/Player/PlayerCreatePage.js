import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import PlayerCreate from "../../../components/Admin/Player/PlayerCreate/PlayerCreate";
import { PLAYER_CREATE_RESET } from "../../../constants/playerConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createPlayer } from '../../../store/actions/playerActions';

const PlayerCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const playerCreate = useSelector(state => state.playerCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = playerCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie zawodnika";
      window.scrollTo(0, 0)
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: PLAYER_CREATE_RESET })
      navigate('/admin/zawodnicy');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, first_name, last_name, height, weight, range_in_attack, range_in_block, date_of_birth, number, year_of_join, description, picture) => {
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
    })).then((data) => {
      uploadFileHandler(picture[0], data.id)
    })

  }


  const uploadFileHandler = async (file, id) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('player_id', id)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      await axios.post('http://127.0.0.1:8000/api/players/upload/', formData, config)

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <AdminLayout>
      <PlayerCreate
        submitHandler={submitHandler}
        loadingCreate={loadingCreate}
        errorCreate={errorCreate}
      />
    </AdminLayout>
  )
}

export default PlayerCreatePage;