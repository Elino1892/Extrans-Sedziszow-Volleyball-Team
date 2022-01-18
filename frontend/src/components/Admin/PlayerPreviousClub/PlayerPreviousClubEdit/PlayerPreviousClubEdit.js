import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayerPreviousClubDetails } from '../../../../store/actions/playerPreviousClubActions'

const PlayerPreviousClubEdit = ({ players, groups, clubs, submitHandler, loadingUpdate, errorUpdate }) => {

  // console.log(groups)

  const params = useParams()
  const { id: previousClubPlayerId } = params;

  const dispatch = useDispatch();
  const playerPreviousClubDetails = useSelector(state => state.playerPreviousClubDetails)
  const { loading, error, playerPreviousClub } = playerPreviousClubDetails

  // const [player, setPlayer] = useState('')
  const [previousClub, setPreviousClub] = useState('')
  const [season, setSeason] = useState('')
  const [position, setPosition] = useState('')
  const [isBelongGroupList, setIsBelongGroupList] = useState([new Array(groups.length).fill(false)])
  // const [isBelongPlayersList, setIsBelongPlayersList] = useState([new Array(players.length).fill(false)])
  const [isBelongClubsList, setIsBelongClubsList] = useState([new Array(clubs.length).fill(false)])

  useEffect(() => {
    dispatch(getPlayerPreviousClubDetails(previousClubPlayerId))
  }, [previousClubPlayerId])

  useEffect(() => {
    if (Object.keys(playerPreviousClub).length > 0) {
      if (!playerPreviousClub.player || playerPreviousClub.id !== Number(playerPreviousClub)) {
        setSeason(playerPreviousClub.season)
      }
    }

  }, [playerPreviousClub])

  useEffect(() => {
    if (Object.keys(playerPreviousClub).length > 0) {
      const tempArray = [...groups];
      const tempArray2 = [...isBelongGroupList]
      const tempArray3 = [...clubs];
      const tempArray4 = [...isBelongClubsList]
      tempArray.forEach((group, index) => {
        if (group.id === playerPreviousClub.position.id) {
          tempArray2[index] = true;
        }
      })
      tempArray3.forEach((club, index) => {
        if (club.id === playerPreviousClub.previous_club.id) {
          tempArray4[index] = true;
        }
      })

      setIsBelongGroupList(tempArray2)
      setIsBelongClubsList(tempArray4)
    }
  }, [playerPreviousClub])
  // console.log(players)
  // console.log(groups)
  // console.log(clubs)
  // console.log(playerPreviousClub)

  const changeInputValueHandler = (e, index) => {
    const { value } = e.target;
    const arrayTemp = [...isBelongGroupList]
    for (let i = 0; i < arrayTemp.length; i++) {
      arrayTemp[i] = false
    }

    arrayTemp[index] = true;
    setIsBelongGroupList(arrayTemp)

    setPosition(value)
  }

  const changeInputValueClubHandler = (e, index) => {
    const { value } = e.target;
    const arrayTemp = [...isBelongClubsList]
    for (let i = 0; i < arrayTemp.length; i++) {
      arrayTemp[i] = false
    }

    arrayTemp[index] = true;
    setIsBelongClubsList(arrayTemp)

    setPreviousClub(value)
  }

  return (
    <>
      {Object.keys(playerPreviousClub).length === 0 ? <LoadingSpinner /> :
        <>
          <Link className='admin__link-text' to='/admin/poprzednie-kluby'>
            Powrót
          </Link>
          <h1 className='admin__title admin__title--edit-user'>Edycja zawodnika - {playerPreviousClub.player.name}</h1>
          {loadingUpdate && <LoadingSpinner />}
          {errorUpdate && <p>Błąd: {errorUpdate}</p>}
          <Form className='admin__form' onSubmit={(e) => submitHandler(e, playerPreviousClub.player.id, position, previousClub, season)}>

            {/* <Form.Group controlId='player' className='admin__form-checkbox-container'>
              <Form.Label className='admin__form-label'>Zawodnik </Form.Label>
              <Form.Control
                className='admin__search-input admin__search-input--short'
                type='text'
                placeholder='Zawodnik'
                value={playerPreviousClub.player.name}
                disabled */}
            {/* // onChange={(e) => setSeason(e.target.value)} */}
            {/* > */}
            {/* </Form.Control> */}
            {/* {players.map(player => (
            <Form.Check
              type='radio'
              key={player.id}
              className='admin__search-input admin__search-input--short'
              name='player-option'
              id={player.id}
              inline
              onChange={(e) => setPlayer(e.target.value)}
              value={player.id}
              label={`${player.first_name} ${player.last_name}`}
            />
          ))} */}
            {/* </Form.Group> */}

            <Form.Group controlId='previousClub' className='admin__form-checkbox-container'>
              <Form.Label className='admin__form-label'>Poprzedni klub</Form.Label>
              {clubs.map((club, index) => (
                <Form.Check
                  type='radio'
                  key={club.id}
                  checked={isBelongClubsList[index]}
                  className='admin__search-input admin__search-input--short'
                  name='club-option'
                  id={club.id}
                  inline
                  onChange={(e) => changeInputValueClubHandler(e, index)}
                  value={club.id}
                  label={club.name}
                />
              ))}

            </Form.Group>

            <Form.Group controlId='season'>
              <Form.Label className='admin__form-label'>Sezon</Form.Label>
              <Form.Control
                className='admin__search-input admin__search-input--short'
                type='text'
                placeholder={`${new Date().getFullYear() - 1} / ${new Date().getFullYear()}`}
                value={season}
                onChange={(e) => setSeason(e.target.value)}
              >
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='position' className='admin__form-checkbox-container'>
              <Form.Label className='admin__form-label'>Pozycja</Form.Label>
              {groups.map((group, index) => (
                <Form.Check
                  type='radio'
                  key={group.id}
                  checked={isBelongGroupList[index]}
                  className='admin__search-input admin__search-input--short'
                  name='group-option'
                  id={group.id}
                  inline
                  onChange={(e) => changeInputValueHandler(e, index)}
                  value={group.id}
                  label={group.name}
                />
              ))}
            </Form.Group>

            <Button className='admin__button' type='submit' variant='primary'>
              Zaktualizuj
            </Button>
          </Form>
        </>
      }
    </>

  )
}

export default PlayerPreviousClubEdit;