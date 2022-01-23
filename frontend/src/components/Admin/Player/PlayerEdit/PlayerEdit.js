import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import LoadingSpinner from '../../../UI/LoadingSpinner/LoadingSpinner'


const PlayerEdit = ({ player, groups, submitHandler, loadingUpdate, errorUpdate }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [rangeInAttack, setRangeInAttack] = useState('')
  const [rangeInBlock, setRangeInBlock] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [number, setNumber] = useState('')
  const [yearOfJoin, setYearOfJoin] = useState('')
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState([])
  const [pictureBackground, setPictureBackground] = useState([])
  const [image, setImage] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')
  const [isChangeGroup, setIsChangeGroup] = useState(false)
  const [groupItem, setGroup] = useState(0)
  const [isBelongGroupList, setisBelongGroupList] = useState([new Array(groups.length).fill(false)])


  useEffect(() => {
    setFirstName(player.first_name)
    setLastName(player.last_name)
    setHeight(player.height)
    setWeight(player.weight)
    setRangeInAttack(player.range_in_attack)
    setRangeInBlock(player.range_in_block)
    setDateOfBirth(player.date_of_birth)
    setNumber(player.number)
    setYearOfJoin(player.year_of_join)
    setDescription(player.description)
    setImage(player.image)
    setBackgroundImage(player.background)
    setGroup(player.group.id)
  }, [player])

  useEffect(() => {
    const tempArray = [...groups];
    const tempArray2 = [...isBelongGroupList]
    tempArray.forEach((group, index) => {
      if (group.id === player.group.id) {
        tempArray2[index] = true;
      }
    })
    setisBelongGroupList(tempArray2)
  }, [])

  const changeInputValueHandler = (e, index) => {
    const { value } = e.target;
    const arrayTemp = [...isBelongGroupList]
    for (let i = 0; i < arrayTemp.length; i++) {
      arrayTemp[i] = false
    }

    arrayTemp[index] = true;
    setisBelongGroupList(arrayTemp)

    setGroup(value)
  }

  return (
    <>
      <Link className='admin__link-text' to='/admin/zawodnicy'>
        Powrót
      </Link>
      <h1 className='admin__title admin__title--edit-user'>Edycja zawodnika</h1>
      {loadingUpdate && <LoadingSpinner />}
      {errorUpdate && <p>Błąd: {errorUpdate}</p>}
      <Form className='admin__form' onSubmit={(e) => submitHandler(e, firstName, lastName, Number(height), Number(weight), Number(rangeInAttack), Number(rangeInBlock), dateOfBirth, Number(number), Number(yearOfJoin), description, groupItem, picture, pictureBackground)}>
        <Form.Group controlId='name'>
          <Form.Label className='admin__form-label'>Imię</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Imię'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='last-name'>
          <Form.Label className='admin__form-label'>Nazwisko</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='text'
            placeholder='Nazwisko'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='height'>
          <Form.Label className='admin__form-label'>Wzrost</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='Wzrost'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='weight'>
          <Form.Label className='admin__form-label'>Waga</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='Waga'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='rangeInAttack'>
          <Form.Label className='admin__form-label'>Zasięg w ataku</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='Zasięg w ataku'
            value={rangeInAttack}
            onChange={(e) => setRangeInAttack(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='rangeInBlock'>
          <Form.Label className='admin__form-label'>Zasięg w bloku</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='Zasięg w bloku'
            value={rangeInBlock}
            onChange={(e) => setRangeInBlock(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='dateOfBirth'>
          <Form.Label className='admin__form-label'>Data urodzenia</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='date'
            placeholder='Data urodzenia'
            max={new Date().toISOString().split("T")[0]}
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='number'>
          <Form.Label className='admin__form-label'>Numer</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='Numer'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='yearOfJoin'>
          <Form.Label className='admin__form-label'>Rok dołączenia do klubu</Form.Label>
          <Form.Control
            className='admin__search-input admin__search-input--short'
            type='number'
            placeholder='Rok dołączenia do klubu'
            value={yearOfJoin}
            onChange={(e) => setYearOfJoin(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='groups' className='admin__form-checkbox-container'>
          <Form.Label className='admin__form-label'>Pozycja</Form.Label>
          {groups.map((group, index) => (
            <Form.Check
              type='radio'
              checked={isBelongGroupList[index]}

              key={group.id}
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


        <Form.Group controlId='description'>
          <Form.Label className='admin__form-label'>Opis</Form.Label>
          <Form.Control
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

        <Form.Group controlId='bgc'>
          <Form.Label className='admin__form-label'>Tło</Form.Label>
          <Form.Control

            type='text'
            placeholder='Plik'
            value={backgroundImage}
            onChange={(e) => setBackgroundImage(e.target.value)}
            disabled
          >
          </Form.Control>
          <Form.Control
            type="file"
            label='Wybierz plik'
            // value={picture}
            onChange={(e) => setPictureBackground([e.target.files[0]])}
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

export default PlayerEdit;