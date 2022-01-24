import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const MatchEdit = ({ match, teams, submitHandler, loadingUpdate, errorUpdate }) => {

  // console.log(match)
  const [homeTeam, setHomeTeam] = useState('')
  const [guestTeam, setGuestTeam] = useState('')
  const [homeTeamScore, setHomeTeamScore] = useState('')
  const [guestTeamScore, setGuestTeamScore] = useState('')
  const [numberOfSets, setNumberOfSets] = useState(0);
  const [setResultsHome, setSetResultsHome] = useState(new Array(5).fill(''))
  const [setResultsGuest, setSetResultsGuest] = useState(new Array(5).fill(''))
  const [round, setRound] = useState('')
  const [date, setDate] = useState('')
  const [hall, setHall] = useState('')
  const [isHome, setIsHome] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [isBelongHomeTeamList, setIsBelongHomeTeamList] = useState([new Array(teams.length).fill(false)])
  const [isBelongGuestTeamList, setIsBelongGuestTeamList] = useState([new Array(teams.length).fill(false)])

  console.log(match.is_finished)

  useEffect(() => {
    setHomeTeam(match.home_team)
    setGuestTeam(match.guest_team)
    setHomeTeamScore(match.home_team_score)
    setGuestTeamScore(match.guest_team_score)
    // setDate(match.date)
    setHall(match.hall)
    setIsHome(match.is_home)
    setIsFinished(match.is_finished)
    setNumberOfSets(match.set.length)
    setRound(match.round)
    const tempArray = [...match.set]
    const setResultHome = tempArray.map(setItem =>
      String(setItem.home_team_score_set)
    );
    const setResultGuest = tempArray.map(setItem =>
      String(setItem.guest_team_score_set)
    );
    setSetResultsHome(setResultHome)
    setSetResultsGuest(setResultGuest)
  }, [match])

  useEffect(() => {
    const tempArray = [...teams];
    const tempArray2 = [...isBelongHomeTeamList]
    const tempArray3 = [...isBelongGuestTeamList]
    tempArray.forEach((team, index) => {
      if (team.id === match.home_team) {
        tempArray2[index] = true;
      } else if (team.id === match.guest_team) {
        tempArray3[index] = true;
      }
    })
    setIsBelongHomeTeamList(tempArray2)
    setIsBelongGuestTeamList(tempArray3)
  }, [])

  const changeInputValueHandler = (e, index, isGuest) => {
    const { value } = e.target;
    let arrayTemp = []
    if (isGuest) {
      arrayTemp = [...isBelongGuestTeamList]
    } else {
      arrayTemp = [...isBelongHomeTeamList]
    }


    for (let i = 0; i < arrayTemp.length; i++) {
      arrayTemp[i] = false
    }

    arrayTemp[index] = true;
    if (isGuest) {
      setIsBelongGuestTeamList(arrayTemp)

      setGuestTeam(value)
    } else {
      setIsBelongHomeTeamList(arrayTemp)

      setHomeTeam(value)
    }

  }

  const changeTeamScoreHandler = (e, isGuest) => {
    let { value } = e.target;

    if ((Number(value) <= 3 && Number(value) >= 0)) {
      if (isGuest) {
        if (Number(homeTeamScore) + Number(value) <= 5) {
          setGuestTeamScore(value);
        }

      } else {
        if (Number(guestTeamScore) + Number(value) <= 5) {
          setHomeTeamScore(value);
        }
      }
    }
  }

  useEffect(() => {
    if (Number(homeTeamScore) + Number(guestTeamScore) <= 5) {
      setNumberOfSets(Number(homeTeamScore) + Number(guestTeamScore));
      // setSetResults(new Array(numberOfSets.length).fill({}))
    }
    // console.log(setResults)

  }, [guestTeamScore, homeTeamScore])

  const setResultsHandler = (value, index, isGuest) => {
    if (isGuest) {
      const setResultsTemp = [...setResultsGuest];
      setResultsTemp[index] = value;
      // console.log(setResultsTemp)
      setSetResultsGuest(setResultsTemp);
    } else {
      const setResultsTemp = [...setResultsHome];
      setResultsTemp[index] = value;
      // console.log(setResultsTemp)
      setSetResultsHome(setResultsTemp)
    }

  }

  return (
    <>
      <Link className='admin__link-text' to='/admin/mecze'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja meczu</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, homeTeam, guestTeam, Number(homeTeamScore), Number(guestTeamScore), setResultsHome, setResultsGuest, round, date, hall, isHome, isFinished)}>

        <Form.Group controlId='home-team' className='admin__form-checkbox-container'>
          <Form.Label className='admin__form-label'>Gospodarz</Form.Label>
          {teams.map((team, index) =>
          (
            <Form.Check
              type='radio'
              key={team.id}
              checked={isBelongHomeTeamList[index]}
              className='admin__search-input admin__search-input--short'
              name='home-team-option'
              id={team.id}
              inline
              onChange={(e) => changeInputValueHandler(e, index, false)}
              value={team.id}
              label={team.name}
            />
          )
          )}
        </Form.Group>

        <Form.Group controlId='guest-team' className='admin__form-checkbox-container'>
          <Form.Label className='admin__form-label'>Gość</Form.Label>
          {teams.map((team, index) => (
            <Form.Check
              type='radio'
              key={team.id + teams.length}
              checked={isBelongGuestTeamList[index]}
              className='admin__search-input admin__search-input--short'
              name='guest-team-option'
              id={team.id + teams.length + 100}
              inline
              onChange={(e) => changeInputValueHandler(e, index, true)}
              value={team.id}
              label={team.name}
            />
          ))}
        </Form.Group>

        <Form.Group controlId='home-team-score'>
          <Form.Label className='admin__form-label'>Wynik gospodarza</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='0'
            value={homeTeamScore}
            onChange={(e) => changeTeamScoreHandler(e, false)}
            disabled={!isFinished}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='guest-team-score'>
          <Form.Label className='admin__form-label'>Wynik gościa</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='0'
            value={guestTeamScore}
            disabled={!isFinished}
            onChange={(e) => changeTeamScoreHandler(e, true)}
          >
          </Form.Control>
        </Form.Group>


        {Array.from({ length: numberOfSets }, (_, i) =>
          <Form.Group controlId='set-results' key={i}>
            <Form.Label className='admin__form-label'>Wynik {i + 1} seta</Form.Label>
            <Form.Group controlId='set-results-details' className='admin__form-result-sets'>
              <Form.Group className='admin__form-result-input-container'>
                <Form.Label className='admin__form-label'>Gospodarz</Form.Label>
                <Form.Control
                  className='admin__search-input admin__search-input--short admin__search-input--set'
                  type='number'
                  placeholder='0'
                  value={setResultsHome[i]}
                  onChange={(e) => setResultsHandler(e.target.value, i, false)}
                  disabled={!isFinished}
                >
                </Form.Control>
              </Form.Group>
              <span style={{ margin: '0 50px 5px' }}>:</span>
              <Form.Group className='admin__form-result-input-container'>
                <Form.Label className='admin__form-label'>Gość</Form.Label>
                <Form.Control
                  className='admin__search-input admin__search-input--short admin__search-input--set'
                  type='number'
                  placeholder='0'
                  value={setResultsGuest[i]}
                  onChange={(e) => setResultsHandler(e.target.value, i, true)}
                >
                </Form.Control>
              </Form.Group>
            </Form.Group>
          </Form.Group>
        )}



        <Form.Group controlId='round'>
          <Form.Label className='admin__form-label'>Kolejka</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            value={round}
            onChange={(e) => setRound(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='date'>
          <Form.Label className='admin__form-label'>Data</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='datetime-local'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          >
          </Form.Control>
        </Form.Group>




        <Form.Group controlId='hall'>
          <Form.Label className='admin__form-label'>Hala</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Hala przy LO w Sędziszowie Młp. ul. Fabryczna 5'
            value={hall}
            onChange={(e) => setHall(e.target.value)}
          >
          </Form.Control>
        </Form.Group>


        <Form.Group controlId='is-home'>
          <Form.Label className='admin__form-label'>Czy to mecz Extransu Sędziszów Małopolskiego ?</Form.Label>
          <Form.Check
            type='checkbox'
            className='admin__search-input admin__search-input--short'
            name='is-home-option'
            onChange={(e) => setIsHome(e.target.checked)}
            checked={isHome}
          />
        </Form.Group>

        <Form.Group controlId='is-finished'>
          <Form.Label className='admin__form-label'>Czy spotkanie zostało już zakończone ?</Form.Label>
          <Form.Check
            type='checkbox'
            className='admin__search-input admin__search-input--short'
            name='is-finished-option'
            onChange={(e) => setIsFinished(e.target.checked)}
            checked={isFinished}
          />
        </Form.Group>

        <Button className='admin__button' type='submit' variant='primary'>
          Zaktualizuj
        </Button>
      </Form>

    </>
  )
}

export default MatchEdit;