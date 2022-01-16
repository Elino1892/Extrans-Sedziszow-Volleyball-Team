import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listGroups, deleteGroup } from '../../../store/actions/groupActions'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { GROUP_DETAILS_RESET } from '../../../constants/groupConstants'

import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
import GroupList from '../../../components/Admin/Group/GroupList/GroupList'


const GroupListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const groupList = useSelector(state => state.groupList)
  const { loading, error, groups } = groupList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const groupDelete = useSelector(state => state.groupDelete)
  const { success: successDelete } = groupDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Grupy - Administrator"
      window.scrollTo(0, 0)
      dispatch(listGroups())
      dispatch({ type: GROUP_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć tę grupę ?')) {
      dispatch(deleteGroup(id))
    }
  }



  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <GroupList
          groups={groups}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </AdminLayout>
  )
}

export default GroupListPage;