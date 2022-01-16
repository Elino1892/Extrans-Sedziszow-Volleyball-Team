import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import GroupCreate from "../../../components/Admin/Group/GroupCreate/GroupCreate";
import { GROUP_CREATE_RESET } from "../../../constants/groupConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createGroup } from '../../../store/actions/groupActions';

const GroupCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const groupCreate = useSelector(state => state.groupCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = groupCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Tworzenie grupy";
      window.scrollTo(0, 0)
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: GROUP_CREATE_RESET })
      navigate('/admin/grupy');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, name) => {
    e.preventDefault();

    dispatch(createGroup({
      name
    }))
  }

  return (
    <AdminLayout>
      <GroupCreate
        submitHandler={submitHandler}
        loadingCreate={loadingCreate}
        errorCreate={errorCreate}
      />
    </AdminLayout>
  )
}

export default GroupCreatePage;