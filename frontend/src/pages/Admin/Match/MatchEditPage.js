import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { MATCH_UPDATE_RESET } from "../../../constants/matchConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getMatchDetails, updateMatch } from '../../../store/actions/matchActions';
import MatchEdit from '../../../components/Admin/Match/MatchEdit/MatchEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
import { listTeams } from '../../../store/actions/teamActions';

const MatchEditPage = () => {

  const params = useParams()
  const { id: matchId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const matchDetails = useSelector(state => state.matchDetails)
  const { loading, error, match } = matchDetails

  const matchUpdate = useSelector(state => state.matchUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = matchUpdate

  const teamList = useSelector(state => state.teamList)
  const { loading: loadingTeamList, error: errorTeamList, teams } = teamList

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja meczu";
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: MATCH_UPDATE_RESET })
        navigate('/admin/mecze');
      }
      else if (!match.home_team || match.id !== Number(matchId)) {
        dispatch(getMatchDetails(matchId))
        dispatch(listTeams())
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, match, matchId])


  const submitHandler = (e, home_team, guest_team, home_team_score, guest_team_score, setResultsHome, setResultsGuest, round, date, hall, is_home, is_finished) => {
    e.preventDefault();

    // console.log({
    //   home_team,
    //   guest_team,
    //   home_team_score,
    //   guest_team_score,
    //   set_results_home: setResultsHome,
    //   set_results_guest: setResultsGuest,
    //   date,
    //   hall,
    //   is_home,
    //   is_finished
    // })

    dispatch(updateMatch({
      id: matchId,
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
      {Object.keys(match).length === 0 ? <LoadingSpinner /> :
        loadingTeamList ? <LoadingSpinner /> :
          <MatchEdit
            match={match}
            teams={teams}
            submitHandler={submitHandler}
            loadingUpdate={loadingUpdate}
            errorUpdate={errorUpdate}
          />
      }
    </AdminLayout>
  )
}

export default MatchEditPage;