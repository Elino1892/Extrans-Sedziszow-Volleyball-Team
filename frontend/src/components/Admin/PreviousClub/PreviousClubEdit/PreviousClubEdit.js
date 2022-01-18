import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const PreviousClubEdit = ({ previousClub, submitHandler, loadingUpdate, errorUpdate }) => {

  const [name, setName] = useState('')

  useEffect(() => {
    setName(previousClub.name)
  }, [previousClub])

  return (
    <>
      <Link className='admin__link-text' to='/admin/poprzednie-kluby'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja poprzedniej drużyny zawodnika</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, name)}>
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
        <Button className='admin__button' type='submit' variant='primary'>
          Zaktualizuj
        </Button>
      </Form>

    </>
  )
}

export default PreviousClubEdit;