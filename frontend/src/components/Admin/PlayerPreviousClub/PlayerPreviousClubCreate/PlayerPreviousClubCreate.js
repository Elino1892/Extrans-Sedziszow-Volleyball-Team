import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const PlayerPreviousClubCreate = ({ groups, players, clubs, submitHandler, loadingCreate, errorCreate }) => {

  const [player, setPlayer] = useState('')
  const [previousClub, setPreviousClub] = useState('')
  const [season, setSeason] = useState('')
  const [position, setPosition] = useState('')

  return (
    <>
      <Link className='admin__link-text' to='/admin/poprzednie-kluby'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Dodawanie zawodnika z jego poprzednim klubem</h1>
      {loadingCreate && <LoadingSpinner />}
      {errorCreate && <p>Błąd: {errorCreate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, player, previousClub, season, position)}>
        <Form.Group controlId='player' className='admin__form-checkbox-container'>
          <Form.Label className='admin__form-label'>Zawodnicy</Form.Label>
          {players.map(player => (
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
          ))}
        </Form.Group>
        <Form.Group controlId='previousClub' className='admin__form-checkbox-container'>
          <Form.Label className='admin__form-label'>Poprzednie kluby</Form.Label>
          {clubs.map(club => (
            <Form.Check
              type='radio'
              key={club.id}
              className='admin__search-input admin__search-input--short'
              name='club-option'
              id={club.id}
              inline
              onChange={(e) => setPreviousClub(e.target.value)}
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
          <Form.Label className='admin__form-label'>Pozycje</Form.Label>
          {groups.map(group => (
            <Form.Check
              type='radio'
              key={group.id}
              className='admin__search-input admin__search-input--short'
              name='group-option'
              id={group.id}
              inline
              onChange={(e) => setPosition(e.target.value)}
              value={group.id}
              label={group.name}
            />
          ))}
        </Form.Group>

        <Button className='admin__button' type='submit' variant='primary'>
          Dodaj
        </Button>
      </Form>

    </>
  )
}

export default PlayerPreviousClubCreate;