import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
import { Container } from 'react-bootstrap'



const PlayerList = ({ players, deleteHandler, loading, error }) => {

  const [searchPlayer, setSearchPlayer] = useState('')

  const searchPlayerHandler = (e) => {
    const { value } = e.target;

    setSearchPlayer(value)
  }


  return (
    <>
      <div className="admin__container-action">
        <h1 className='admin__title'>Zawodnicy</h1>
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/zawodnicy/tworzenie"}>
          <i className='fas fa-plus'></i> Dodaj zawodnika
        </Link>
      </div>
      <Form.Control
        type='text'
        placeholder='Wyszukaj zawodnika po nazwisku...'
        onChange={searchPlayerHandler}
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
                    <th>DATA URODZENIA</th>
                    <th>POZYCJA</th>
                    <th>NUMER</th>
                    <th>WZROST</th>
                    <th>WAGA</th>
                    <th>ZASIĘG W ATAKU</th>
                    <th>ZASIĘG W BLOKU</th>
                    <th>ROK DOŁĄCZENIA DO KLUBU</th>
                    <th>OPIS</th>
                    <th style={{ width: '140px' }}></th>
                  </tr>
                </thead>

                <tbody>
                  {players.filter(val => {
                    if (searchPlayer == "") {
                      return val
                    } else if (val.last_name.toLowerCase().includes(searchPlayer.toLowerCase())) {
                      return val
                    }
                  }).map(player => (
                    <tr key={player.id}>
                      <td>{player.id}</td>
                      <td>{player.first_name}</td>
                      <td>{player.last_name}</td>
                      <td>{player.date_of_birth}</td>
                      <td>{player.group.name}</td>
                      <td>{!player.number ? '-' : player.number}</td>
                      <td>{!player.height ? '-' : `${player.height} cm`}</td>
                      <td>{!player.weight ? '-' : `${player.weight} kg`} </td>
                      <td>{!player.range_in_attack ? '-' : `${player.range_in_attack} cm`} </td>
                      <td>{!player.range_in_block ? '-' : `${player.range_in_block} cm`}</td>
                      <td>{!player.year_of_join ? '-' : player.year_of_join}</td>
                      <td>{`${player.description.slice(0, 100)}...`}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/zawodnicy/${player.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(player.id)}>
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

export default PlayerList;