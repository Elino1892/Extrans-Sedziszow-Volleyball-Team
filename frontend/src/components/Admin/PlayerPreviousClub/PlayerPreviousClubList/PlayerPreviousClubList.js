import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'

const PlayerPreviousClubList = ({ playerPreviousClubs, deletePlayerHandler, loading, error }) => {

  const [searchPlayerPreviousClub, setSearchPlayerPreviousClub] = useState('')

  const searchPlayerPreviousClubHandler = (e) => {
    const { value } = e.target;

    setSearchPlayerPreviousClub(value)
  }


  return (
    <>
      <div className="admin__container-action">
        <h1 className='admin__title'>Zawodnicy</h1>
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/poprzednie-kluby/zawodnicy/tworzenie"}>
          <i className='fas fa-plus'></i> Dodaj zawodnika
        </Link>
      </div>
      <Form.Control
        type='text'
        placeholder='Wyszukaj zawodnika po nazwisku...'
        onChange={searchPlayerPreviousClubHandler}
        style={{ margin: '20px 0' }}
        className='admin__search-input'
      >

      </Form.Control>
      {
        loading
          ? (<LoadingSpinner />)
          : error
            ? (<p>Błąd: {error}</p>)
            : (
              <Table striped bordered hover responsive className='table-sm admin__table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>IMIĘ</th>
                    <th>NAZWISKO</th>
                    <th>POPRZEDNI KLUB</th>
                    <th>SEZON</th>
                    <th>POZYCJA</th>
                    <th style={{ width: '140px' }}></th>
                  </tr>
                </thead>

                <tbody>
                  {playerPreviousClubs.filter(val => {
                    if (searchPlayerPreviousClub == "") {
                      return val
                    } else if (val.player.toLowerCase().includes(searchPlayerPreviousClub.toLowerCase())) {
                      return val
                    }
                  }).map(playerPreviousClub => (
                    <tr key={playerPreviousClub.id}>
                      <td>{playerPreviousClub.id}</td>
                      <td>{playerPreviousClub.player.first_name}</td>
                      <td>{playerPreviousClub.player.last_name}</td>
                      <td>{playerPreviousClub.previous_club}</td>
                      <td>{playerPreviousClub.season}</td>
                      <td>{playerPreviousClub.position}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/poprzednie-kluby/zawodnicy/${playerPreviousClub.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deletePlayerHandler(playerPreviousClub.id)}>
                          <i className='fas fa-trash'></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )
      }
    </>
  )
}

export default PlayerPreviousClubList;