import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listTeams, deleteTeam } from '../../../store/actions/teamActions'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { TEAM_DETAILS_RESET } from '../../../constants/teamConstants'

import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
import TeamList from '../../../components/Admin/Team/TeamList/TeamList'


const TeamListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const teamList = useSelector(state => state.teamList)
  const { loading, error, teams } = teamList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const teamDelete = useSelector(state => state.teamDelete)
  const { success: successDelete } = teamDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Drużyny - Administrator"
      window.scrollTo(0, 0)
      dispatch(listTeams())
      dispatch({ type: TEAM_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć tę drużynę ?')) {
      dispatch(deleteTeam(id))
    }
  }



  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <TeamList
          teams={teams}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </AdminLayout>
  )
}

export default TeamListPage;