import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'

const UserEdit = ({ user, submitHandler, loadingUpdate, errorUpdate }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    setName(user.name)
    setEmail(user.email)
    setIsAdmin(user.isAdmin)
  }, [user])

  return (
    <>
      <Link className='admin__link-text' to='/admin/uzytkownicy'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja użytkownika</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, name, email, isAdmin)}>
        <Form.Group controlId='name'>
          <Form.Label className='admin__form-label'>Imię</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='name'
            placeholder='Imię'
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label className='admin__form-label'>Adres email</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='isadmin'>
          <Form.Check
            className='admin__form-label admin__form-group'
            type='checkbox'
            label='Administrator'
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          >
          </Form.Check>
        </Form.Group>
        <Button className='admin__button' type='submit' variant='primary'>
          Zaktualizuj
        </Button>
      </Form>
    </>
  )
}

export default UserEdit;