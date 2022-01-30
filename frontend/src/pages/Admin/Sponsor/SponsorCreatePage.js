import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

import SponsorCreate from "../../../components/Admin/Sponsor/SponsorCreate/SponsorCreate";
import { SPONSOR_CREATE_RESET } from "../../../constants/sponsorConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createSponsor } from '../../../store/actions/sponsorActions';

const SponsorCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const sponsorCreate = useSelector(state => state.sponsorCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = sponsorCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie sponsora";
      window.scrollTo(0, 0)
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: SPONSOR_CREATE_RESET })
      navigate('/admin/sponsorzy');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, name, link, group, picture) => {
    e.preventDefault();

    dispatch(createSponsor({
      name,
      link,
      group
    })).then((data) => {
      uploadFileHandler(picture[0], data.id)
    })
  }

  const uploadFileHandler = async (file, id) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('sponsor_id', id)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      await axios.post('https://extrans-sedziszow-volleyball.herokuapp.com/api/sponsors/upload/', formData, config)

    } catch (error) {
      throw new Error(error)
    }
  }


  return (
    <AdminLayout>
      <SponsorCreate
        submitHandler={submitHandler}
        loadingCreate={loadingCreate}
        errorCreate={errorCreate}
      />
    </AdminLayout>
  )
}

export default SponsorCreatePage;