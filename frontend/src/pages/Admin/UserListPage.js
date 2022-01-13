import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listUsers, deleteUser } from '../../store/actions/userActions'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { USER_DETAILS_RESET } from '../../constants/userConstants'
import UserList from '../../components/Admin/User/UserList/UserList'


const UserListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userList = useSelector(state => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userDelete = useSelector(state => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
      dispatch({ type: USER_DETAILS_RESET })
    } else {
      navigate('/login')
    }

  }, [dispatch, successDelete, userInfo, navigate])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć tego użytkownika?')) {
      dispatch(deleteUser(id))
    }
  }



  return (
    <>
      {loading ? <LoadingSpinner /> :
        <UserList
          users={users}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </>
  )
}

export default UserListPage;