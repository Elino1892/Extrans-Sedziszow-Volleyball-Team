import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const PreviousClubCreate = ({ submitHandler, loadingCreate, errorCreate }) => {

  const [name, setName] = useState('')

  return (
    <>
      <Link className='admin__link-text' to='/admin/poprzednie-kluby'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Dodawanie poprzedniego klubu zawodnika</h1>
      {loadingCreate && <LoadingSpinner />}
      {errorCreate && <p>Błąd: {errorCreate}</p>}
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
          Stwórz
        </Button>
      </Form>

    </>
  )
}

export default PreviousClubCreate;