import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { SPONSOR_UPDATE_RESET } from "../../../constants/sponsorConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getSponsorDetails, updateSponsor } from '../../../store/actions/sponsorActions';
import SponsorEdit from '../../../components/Admin/Sponsor/SponsorEdit/SponsorEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'

const SponsorEditPage = () => {

  const params = useParams()
  const { id: sponsorId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const sponsorDetails = useSelector(state => state.sponsorDetails)
  const { loading, error, sponsor } = sponsorDetails

  const sponsorUpdate = useSelector(state => state.sponsorUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = sponsorUpdate


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja sponsora";
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: SPONSOR_UPDATE_RESET })
        navigate('/admin/sponsorzy');
      }
      else if (!sponsor.name || sponsor.id !== Number(sponsorId)) {
        dispatch(getSponsorDetails(sponsorId))
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, sponsor, sponsorId])


  const submitHandler = (e, name, link, group, picture) => {
    e.preventDefault();

    dispatch(updateSponsor({
      id: sponsorId,
      name,
      link,
      group,
    }))

    uploadFileHandler(picture[0])
  }

  const uploadFileHandler = async (file) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('sponsor_id', sponsorId)

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
      {loading ? <LoadingSpinner /> :
        <SponsorEdit
          sponsor={sponsor}
          submitHandler={submitHandler}
          loadingUpdate={loadingUpdate}
          errorUpdate={errorUpdate}
        />
      }
    </AdminLayout>
  )
}

export default SponsorEditPage;