import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listSponsors, deleteSponsor } from '../../../store/actions/sponsorActions'
import { useNavigate } from 'react-router'
import { SPONSOR_DETAILS_RESET } from '../../../constants/sponsorConstants'

import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
import SponsorList from '../../../components/Admin/Sponsor/SponsorList/SponsorList'


const SponsorListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sponsorList = useSelector(state => state.sponsorList)
  const { loading, error, sponsors } = sponsorList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const sponsorDelete = useSelector(state => state.sponsorDelete)
  const { success: successDelete } = sponsorDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Sponsorzy - Administrator"
      window.scrollTo(0, 0)
      dispatch(listSponsors())
      dispatch({ type: SPONSOR_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć tego sponsora ?')) {
      dispatch(deleteSponsor(id))
    }
  }



  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <SponsorList
          sponsors={sponsors}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </AdminLayout>
  )
}

export default SponsorListPage;