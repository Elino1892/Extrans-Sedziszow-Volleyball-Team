import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { TEAM_UPDATE_RESET } from "../../../constants/teamConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getTeamDetails, updateTeam } from '../../../store/actions/teamActions';
import TeamEdit from '../../../components/Admin/Team/TeamEdit/TeamEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'

const TeamEditPage = () => {

  const params = useParams()
  const { id: teamId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const teamDetails = useSelector(state => state.teamDetails)
  const { loading, error, team } = teamDetails

  const teamUpdate = useSelector(state => state.teamUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = teamUpdate


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja drużyny";
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: TEAM_UPDATE_RESET })
        navigate('/admin/druzyny');
      }
      else if (!team.name || team.id !== Number(teamId)) {
        dispatch(getTeamDetails(teamId))
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, team, teamId])


  const submitHandler = (e, name, picture) => {
    e.preventDefault();

    dispatch(updateTeam({
      id: teamId,
      name
    }))

    uploadFileHandler(picture[0])
  }

  const uploadFileHandler = async (file) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('team_id', teamId)

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
      {loading ? <LoadingSpinner /> :
        <TeamEdit
          team={team}
          submitHandler={submitHandler}
          loadingUpdate={loadingUpdate}
          errorUpdate={errorUpdate}
        />
      }
    </AdminLayout>
  )
}

export default TeamEditPage;