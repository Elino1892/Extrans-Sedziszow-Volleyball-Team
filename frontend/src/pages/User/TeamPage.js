import { useEffect } from 'react';
import PlayerList from '../../components/Player/PlayerList/PlayerList';
import playerImage from '../../images/players/Piotr_Świeczka.png'

const dummyTeam = [
  {
    'id': 1,
    'group': 'przyjmujący',
    'players': [
      {
        'id': 1,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 2,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 3,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 4,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 5,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
    ]
  },
  {
    'id': 2,
    'group': 'środkowi',
    'players': [
      {
        'id': 6,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 7,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 8,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
    ]
  },
  {
    'id': 3,
    'group': 'atakujący',
    'players': [
      {
        'id': 9,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 10,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
    ]
  },
  {
    'id': 4,
    'group': 'rozgrywający',
    'players': [
      {
        'id': 11,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 12,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
    ]
  },
  {
    'id': 5,
    'group': 'libero',
    'players': [
      {
        'id': 13,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
      {
        'id': 14,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'height': '195',
        'weight': '95',
        'rangeInAttack': '342',
        'rangeInBlock': '335',
        'date': '01 stycznia 1996',
        'number': '1',
        'image': playerImage
      },
    ]
  },
  {
    'id': 6,
    'group': 'trenerzy',
    'players': [
      {
        'id': 15,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'date': '01 stycznia 1996',
        'image': playerImage
      },
      {
        'id': 16,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'date': '01 stycznia 1996',
        'image': playerImage
      },
    ]
  },
  {
    'id': 7,
    'group': 'statystycy',
    'players': [
      {
        'id': 17,
        'firstName': 'Piotr',
        'lastName': 'Świeczka',
        'date': '01 stycznia 1996',
        'image': playerImage
      },
    ]
  },

]

const TeamPage = () => {

  useEffect(() => {
    document.title = "Drużyna - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)
  }, [])

  return (
    <PlayerList
      team={dummyTeam}
    />
  )
}

export default TeamPage;