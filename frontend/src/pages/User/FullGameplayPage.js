import FullGameplay from "../../components/FullGameplay/FullGameplay";
import { useEffect } from "react";
import { listMatchesWithRound } from '../../store/actions/matchActions'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCover from '../../components/UI/LoadingCover/LoadingCover'
import { getTableDetails } from '../../store/actions/tableActions'


const GameplayPage = () => {

  const dispatch = useDispatch();

  const matchRoundList = useSelector(state => state.matchRoundList)
  const { loading, error, matches } = matchRoundList

  const tableDetails = useSelector(state => state.tableDetails)
  const { loading: loadingTableDetails, error: errorTableDetails, table } = tableDetails

  useEffect(() => {
    document.title = 'Rozgrywki - Extrans Sędziszów Małopolski'
    window.scrollTo(0, 0)
    dispatch(listMatchesWithRound())
    dispatch(getTableDetails())
  }, [])

  return (
    <>
      {
        !matches.length || !Object.keys(table).length ? <LoadingCover /> :
          <FullGameplay
            matches={matches}
            leagueTable={table}
          />
      }
    </>
  )
}

export default GameplayPage;