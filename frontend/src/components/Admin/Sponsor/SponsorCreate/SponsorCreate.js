import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const SponsorCreate = ({ submitHandler, loadingCreate, errorCreate }) => {

  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [group, setGroup] = useState('')
  const [picture, setPicture] = useState([])

  return (
    <>
      <Link className='admin__link-text' to='/admin/sponsorzy'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Dodawanie sponsora</h1>
      {loadingCreate && <LoadingSpinner />}
      {errorCreate && <p>Błąd: {errorCreate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, name, link, group, picture)}>

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

        <Form.Group controlId='link'>
          <Form.Label className='admin__form-label'>Link</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Link...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='group'>
          <Form.Label className='admin__form-label'>Grupa</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Sponsor strategiczny'
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='image'>
          <Form.Label className='admin__form-label'>Logo</Form.Label>
          <Form.Control
            type="file"
            label='Wybierz plik'
            onChange={(e) => setPicture([e.target.files[0]])}
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

export default SponsorCreate;