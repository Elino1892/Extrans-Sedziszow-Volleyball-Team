import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import PreviousClubCreate from "../../../components/Admin/PreviousClub/PreviousClubCreate/PreviousClubCreate";
import { PREVIOUS_CLUB_CREATE_RESET } from "../../../constants/previousClubConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createPreviousClub } from '../../../store/actions/previousClubActions';

const PreviousClubCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const previousClubCreate = useSelector(state => state.previousClubCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = previousClubCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie poprzedniego klubu zawodnika";
      window.scrollTo(0, 0)
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: PREVIOUS_CLUB_CREATE_RESET })
      navigate('/admin/poprzednie-kluby');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, name) => {
    e.preventDefault();

    dispatch(createPreviousClub({
      name
    }))
  }

  return (
    <AdminLayout>
      <PreviousClubCreate
        submitHandler={submitHandler}
        loadingCreate={loadingCreate}
        errorCreate={errorCreate}
      />
    </AdminLayout>
  )
}

export default PreviousClubCreatePage;