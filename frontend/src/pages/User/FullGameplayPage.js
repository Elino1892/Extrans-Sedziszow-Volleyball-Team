import FullGameplay from "../../components/FullGameplay/FullGameplay";

import teamLogo2 from "../../images/team-logo/Jaworzno-logo-192x192.jpg"
import teamLogo1 from "../../images/team-logo/Debica-logo-192x192.jpg"
import { useEffect } from "react";
import { listMatchesWithRound } from '../../store/actions/matchActions'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import { getTableDetails } from '../../store/actions/tableActions'

const dummyLeagueTable = [
  {
    'id': 1,
    'place': 1,
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 2,
    'place': '2',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 3,
    'place': '3',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 4,
    'place': '4',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 5,
    'place': '5',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 6,
    'place': '6',
    'name': 'MCKiS Jaworzno',
    'isHome': true,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 7,
    'place': '7',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 8,
    'place': '8',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 9,
    'place': '9',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 10,
    'place': '10',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 11,
    'place': '11',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 12,
    'place': '12',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 13,
    'place': '13',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
  {
    'id': 14,
    'place': '14',
    'name': 'MCKiS Jaworzno',
    'isHome': false,
    'numberOfMatches': '15',
    'numberOfWonMatches': '15',
    'numberOfLostMatches': '0',
    'points': '44',
    'wonSets': '45',
    'lostSets': '3',
    'wonSmallPoints': '1191',
    'lostSmallPoints': '924',
    'ratioSets': '15.00',   // OBLICZYĆ
    'ratioSmallPoints': '1.289',   // OBLICZYĆ
    'image': teamLogo2,
  },
]

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
      {loading ? <LoadingSpinner /> :
        loadingTableDetails ? <LoadingSpinner /> :
          <FullGameplay
            matches={matches}
            leagueTable={table}
          />
      }
    </>
  )
}

export default GameplayPage;