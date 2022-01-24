import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const SponsorEdit = ({ sponsor, submitHandler, loadingUpdate, errorUpdate }) => {

  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [group, setGroup] = useState('')
  const [picture, setPicture] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    setName(sponsor.name)
    setLink(sponsor.link)
    setGroup(sponsor.group)
    setImage(sponsor.image)
  }, [sponsor])

  return (
    <>
      <Link className='admin__link-text' to='/admin/sponsorzy'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja sponsora</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, name, link, group.charAt, picture)}>

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

export default SponsorEdit;