import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const NewsEdit = ({ news, submitHandler, loadingUpdate, errorUpdate }) => {

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    setTitle(news.title)
    setSubtitle(news.subtitle)
    setDescription(news.description)
    setImage(news.image)
  }, [news])

  return (
    <>
      <Link className='admin__link-text' to='/admin/aktualnosci'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja artykułu</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, title, subtitle, description, picture)}>
        <Form.Group controlId='title'>
          <Form.Label className='admin__form-label'>Tytuł</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Tytuł'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='subtitle'>
          <Form.Label className='admin__form-label'>Podtytuł</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Podtytuł'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label className='admin__form-label'>Opis</Form.Label>
          <Form.Control
            // className='admin__search-input admin__search-input--short'
            as="textarea"
            placeholder='Opis...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default NewsEdit;