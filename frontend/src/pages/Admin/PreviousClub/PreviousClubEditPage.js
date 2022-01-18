import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { PREVIOUS_CLUB_UPDATE_RESET } from "../../../constants/previousClubConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getPreviousClubDetails, updatePreviousClub } from '../../../store/actions/previousClubActions';
import PreviousClubEdit from '../../../components/Admin/PreviousClub/PreviousClubEdit/PreviousClubEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'

const PreviousClubEditPage = () => {

  const params = useParams()
  const { id: previousClubId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const previousClubDetails = useSelector(state => state.previousClubDetails)
  const { loading, error, previousClub } = previousClubDetails

  const previousClubUpdate = useSelector(state => state.previousClubUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = previousClubUpdate


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja poprzedniej drużyny zawodnika";
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: PREVIOUS_CLUB_UPDATE_RESET })
        navigate('/admin/poprzednie-kluby');
      }
      else if (!previousClub.name || previousClub.id !== Number(previousClubId)) {
        dispatch(getPreviousClubDetails(previousClubId))
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, previousClub, previousClubId])


  const submitHandler = (e, name) => {
    e.preventDefault();

    dispatch(updatePreviousClub({
      id: previousClubId,
      name
    }))
  }

  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <PreviousClubEdit
          previousClub={previousClub}
          submitHandler={submitHandler}
          loadingUpdate={loadingUpdate}
          errorUpdate={errorUpdate}
        />
      }
    </AdminLayout>
  )
}

export default PreviousClubEditPage;