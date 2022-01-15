import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
import { getUserDetails, updateUser } from '../../store/actions/userActions'
import { USER_UPDATE_RESET } from '../../constants/userConstants'
import UserEdit from '../../components/Admin/User/UserEdit/UserEdit'
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout'

const UserEditPage = () => {

  const params = useParams();
  const { id: userId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails

  const userUpdate = useSelector(state => state.userUpdate)
  const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja użytkownika - Administrator"
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: USER_UPDATE_RESET })
        navigate('/admin/uzytkownicy')
      }
      else if (!user || user.id !== Number(userId)) {
        dispatch(getUserDetails(userId))
      }
    } else {
      navigate('/logowanie')
    }
  }, [userInfo, userId, dispatch, navigate, successUpdate])

  const submitHandler = (e, name, email, isAdmin) => {
    e.preventDefault()
    dispatch(updateUser({ id: user.id, name, email, isAdmin }))
  }

  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <UserEdit
          loadingUpdate={loadingUpdate}
          errorUpdate={errorUpdate}
          user={user}
          submitHandler={submitHandler}
        />
      }
    </AdminLayout>
  )
}

export default UserEditPage;