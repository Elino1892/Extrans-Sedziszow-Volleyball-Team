import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { listTeams } from '../../../store/actions/teamActions'
import MatchCreate from "../../../components/Admin/Match/MatchCreate/MatchCreate";
import { MATCH_CREATE_RESET } from "../../../constants/matchConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { createMatch } from '../../../store/actions/matchActions';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';


const MatchCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const teamList = useSelector(state => state.teamList)
  const { loading: loadingTeamList, error: errorTeamList, teams } = teamList

  const matchCreate = useSelector(state => state.matchCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = matchCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Dodawanie meczu";
      window.scrollTo(0, 0)
      dispatch(listTeams())
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: MATCH_CREATE_RESET })
      navigate('/admin/mecze');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, home_team, guest_team, home_team_score, guest_team_score, setResultsHome, setResultsGuest, round, date, hall, is_home, is_finished) => {
    e.preventDefault();

    console.log({
      home_team,
      guest_team,
      home_team_score,
      guest_team_score,
      set_results_home: setResultsHome,
      set_results_guest: setResultsGuest,
      date,
      hall,
      is_home,
      is_finished
    })

    dispatch(createMatch({
      home_team,
      guest_team,
      home_team_score,
      guest_team_score,
      set_results_home: setResultsHome,
      set_results_guest: setResultsGuest,
      round,
      date,
      hall,
      is_home,
      is_finished
    }))
  }

  return (
    <AdminLayout>
      {loadingTeamList ? <LoadingSpinner /> :
        <MatchCreate
          teams={teams}
          submitHandler={submitHandler}
          loadingCreate={loadingCreate}
          errorCreate={errorCreate}
        />
      }
    </AdminLayout>
  )
}

export default MatchCreatePage;