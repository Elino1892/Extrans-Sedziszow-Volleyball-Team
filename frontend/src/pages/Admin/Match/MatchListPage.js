import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
import { listMatches, deleteMatch } from '../../../store/actions/matchActions'

import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { MATCH_DETAILS_RESET } from '../../../constants/matchConstants'

import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
import MatchList from '../../../components/Admin/Match/MatchList/MatchList'


const MatchListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const matchList = useSelector(state => state.matchList)
  const { loading, error, matches } = matchList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const matchDelete = useSelector(state => state.matchDelete)
  const { success: successDelete } = matchDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Mecze - Administrator"
      window.scrollTo(0, 0)
      dispatch(listMatches())
      dispatch({ type: MATCH_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć ten mecz ?')) {
      dispatch(deleteMatch(id))
    }
  }



  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <MatchList
          matches={matches}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </AdminLayout>
  )
}

export default MatchListPage;