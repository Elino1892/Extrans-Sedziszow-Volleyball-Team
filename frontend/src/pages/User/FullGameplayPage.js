import FullGameplay from "../../components/FullGameplay/FullGameplay";

import teamLogo2 from "../../images/team-logo/Jaworzno-logo-192x192.jpg"
import teamLogo1 from "../../images/team-logo/Debica-logo-192x192.jpg"
import { useEffect } from "react";

const dummyMatches = [
  {
    'id': 1,
    'round': '1',
    'matches': [
      {
        'id': 1,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': false,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'isFinished': true,
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },
      {
        'id': 2,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'homeTeamScore': '0',
        'isHome': true,
        'awayTeamScore': '3',
        'isFinished': true,
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },
      {
        'id': 3,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': false,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'isFinished': true,
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },

    ],
  },


  {
    'id': 2,
    'round': '2',
    'matches': [
      {
        'id': 4,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': true,
        'isFinished': true,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },
      {
        'id': 5,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': false,
        'isFinished': true,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },
      {
        'id': 6,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': false,
        'isFinished': true,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },

    ],
  },
  {
    'id': 3,
    'round': '3',
    'matches': [
      {
        'id': 7,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': false,
        'isFinished': false,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },
      {
        'id': 8,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': false,
        'isFinished': false,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },
      {
        'id': 9,
        'homeTeam': 'Kępa MOSiR Dębica',
        'logoHomeTeam': teamLogo1,
        'awayTeam': 'MCKiS Jaworzno',
        'logoAwayTeam': teamLogo2,
        'isHome': true,
        'isFinished': false,
        'homeTeamScore': '0',
        'awayTeamScore': '3',
        'smallPoints': ['20:25', '12:25', '20:25'],
        // 'homeTeamScoreSet': [{
        //   '1': '20',
        //   '2': '12',
        //   '3': '20'
        // }],
        // 'awayTeamScoreSet': [{
        //   '1': '25',
        //   '2': '25',
        //   '3': '25'
        // }],
        'date': 'sobota, 25 września 2021'
      },

    ],
  },
]

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

  useEffect(() => {
    document.title = 'Rozgrywki - Extrans Sędziszów Małopolski'
  }, [])

  return (
    <FullGameplay
      matches={dummyMatches}
      leagueTable={dummyLeagueTable}
    />
  )
}

export default GameplayPage;