import Gameplay from "../../components/Home/Gameplay/Gameplay";
import Player from "../../components/Home/Player/Player";
import NewsListBanner from "../../components/Home/NewsListBanner/NewsListBanner";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { listLastNews } from '../../store/actions/newsActions'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
import { listPlayers } from '../../store/actions/playerActions'
import { PLAYER_DETAILS_RESET } from "../../constants/playerConstants";
import { listLastMatches } from '../../store/actions/matchActions'
import { getShortTableDetails } from '../../store/actions/tableActions'
import LoadingCover from "../../components/UI/LoadingCover/LoadingCover";

const HomePage = () => {

  const dispatch = useDispatch();

  const newsLast = useSelector(state => state.newsLast);
  const { loading, error, news } = newsLast;

  const playerList = useSelector(state => state.playerList)
  const { loading: loadingPlayerList, error: errorPlayerList, players } = playerList

  const matchLastList = useSelector(state => state.matchLastList);
  const { loading: loadingMatchLastList, error: errorMatchLastList, matches } = matchLastList;

  const shortTableDetails = useSelector(state => state.shortTableDetails)
  const { loading: loadingShortTableDetails, error: errorShortTableDetails, shortTable } = shortTableDetails


  useEffect(() => {
    document.title = "Strona główna - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)

    dispatch(listLastNews())
    dispatch(listPlayers())
    dispatch(listLastMatches())
    dispatch(getShortTableDetails())
    dispatch({ type: PLAYER_DETAILS_RESET })
  }, [dispatch])

  return (
    <>
      {!news.length || !players.length || !matches.length || !Object.keys(shortTable).length ? <LoadingCover /> :
        <>
          <NewsListBanner
            news={news}
          />

          <Gameplay
            matches={matches}
            table={shortTable}
          />


          <Player
            players={players}
          />
        </>
      }
    </>

  )
}

export default HomePage;