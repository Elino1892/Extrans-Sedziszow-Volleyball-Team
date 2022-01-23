import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const TeamEdit = ({ team, submitHandler, loadingUpdate, errorUpdate }) => {

  const [name, setName] = useState('')
  const [picture, setPicture] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    setName(team.name)
    setImage(team.logo)
  }, [team])

  return (
    <>
      <Link className='admin__link-text' to='/admin/druzyny'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja drużyny</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, name, picture)}>
        <Form.Group controlId='name'>
          <Form.Label className='admin__form-label'>Nazwa</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Nazwa'
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='image'>
          <Form.Label className='admin__form-label'>Zdjęcie</Form.Label>
          <Form.Control

            type='text'
            placeholder='Plik'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            disabled
          >
          </Form.Control>
          <Form.Control
            type="file"
            label='Wybierz plik'
            // value={picture}
            onChange={(e) => setPicture([e.target.files[0]])}
          >

          </Form.Control>

        </Form.Group>

        <Button className='admin__button' type='submit' variant='primary'>
          Zaktualizuj
        </Button>
      </Form>

    </>
  )
}

export default TeamEdit;