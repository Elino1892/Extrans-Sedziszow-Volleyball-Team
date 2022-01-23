import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import TeamCreate from "../../../components/Admin/Team/TeamCreate/TeamCreate";
import { TEAM_CREATE_RESET } from "../../../constants/teamConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createTeam } from '../../../store/actions/teamActions';

const TeamCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const teamCreate = useSelector(state => state.teamCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = teamCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie drużyny";
      window.scrollTo(0, 0)
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: TEAM_CREATE_RESET })
      navigate('/admin/druzyny');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, name, picture) => {
    e.preventDefault();

    dispatch(createTeam({
      name
    })).then((data) => {
      uploadFileHandler(picture[0], data.id)
    })
  }

  const uploadFileHandler = async (file, id) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('team_id', id)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      await axios.post('http://127.0.0.1:8000/api/teams/upload/', formData, config)

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <AdminLayout>
      <TeamCreate
        submitHandler={submitHandler}
        loadingCreate={loadingCreate}
        errorCreate={errorCreate}
      />
    </AdminLayout>
  )
}

export default TeamCreatePage;