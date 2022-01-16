import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { GROUP_UPDATE_RESET } from "../../../constants/groupConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getGroupDetails, updateGroup } from '../../../store/actions/groupActions';
import GroupEdit from '../../../components/Admin/Group/GroupEdit/GroupEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'

const GroupEditPage = () => {

  const params = useParams()
  const { id: groupId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const groupDetails = useSelector(state => state.groupDetails)
  const { loading, error, group } = groupDetails

  const groupUpdate = useSelector(state => state.groupUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = groupUpdate


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja grupy";
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: GROUP_UPDATE_RESET })
        navigate('/admin/grupy');
      }
      else if (!group.name || group.id !== Number(groupId)) {
        dispatch(getGroupDetails(groupId))
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, group, groupId])


  const submitHandler = (e, name) => {
    e.preventDefault();

    dispatch(updateGroup({
      id: groupId,
      name
    }))
  }

  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <GroupEdit
          group={group}
          submitHandler={submitHandler}
          loadingUpdate={loadingUpdate}
          errorUpdate={errorUpdate}
        />
      }
    </AdminLayout>
  )
}

export default GroupEditPage;