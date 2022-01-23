import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { Container } from 'react-bootstrap'



const MatchList = ({ matches, deleteHandler, loading, error }) => {

  const [searchHomeTeamMatch, setSearchHomeTeamMatch] = useState('')
  const [searchGuestTeamMatch, setSearchGuestTeamMatch] = useState('')

  // const searchGroupHandler = (e) => {
  //   const { value } = e.target;

  //   setSearchGroup(value)
  // }


  return (
    <>

      {/* <Row className='align-items-center'> */}
      {/* <Col> */}
      <div className="admin__container-action">
        <h1 className='admin__title'>Mecze</h1>
        {/* </Col> */}

        {/* <Col className='text-right'> */}
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/mecze/tworzenie"}>
          <i className='fas fa-plus'></i> Dodaj mecz
        </Link>
      </div>
      {/* </Col> */}
      {/* </Row> */}
      <Form.Control
        type='text'
        placeholder='Wyszukaj mecz po gospodarzu...'
        // value={searchEmail}
        onChange={(e) => setSearchHomeTeamMatch(e.target.value)}
        style={{ margin: '20px 0' }}
        className='admin__search-input'
      >

      </Form.Control>
      <Form.Control
        type='text'
        placeholder='Wyszukaj mecz po gościu...'
        // value={searchEmail}
        onChange={(e) => setSearchGuestTeamMatch(e.target.value)}
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
                    <th>GOSPODARZ</th>
                    <th>GOŚĆ</th>
                    <th>WYNIK</th>
                    <th>WYNIKI SETÓW</th>
                    <th>KOLEJKA</th>
                    <th>DATA</th>
                    <th>HALA</th>
                    <th>ZAKOŃCZONY</th>
                    <th style={{ width: '140px' }}></th>
                  </tr>
                </thead>

                <tbody>
                  {matches.filter(val => {
                    if (searchHomeTeamMatch == "" && searchGuestTeamMatch == "") {
                      return val
                    } else if (val.home_team.toLowerCase().includes(searchHomeTeamMatch.toLowerCase()) && val.guest_team.toLowerCase().includes(searchGuestTeamMatch.toLowerCase())) {
                      return val
                    }
                  }).map(match => (
                    <tr key={match.id}>
                      <td>{match.id}</td>
                      <td>{match.home_team}</td>
                      <td>{match.guest_team}</td>
                      <td>{match.result ? match.result : '-'}</td>
                      <td>{match.set_results ? match.set_results : '-'}</td>
                      <td>{match.round}</td>
                      <td>{match.date}</td>
                      <td>{match.hall}</td>
                      <td>{match.is_finished ? (
                        <i className='fas fa-check' style={{ color: 'lime' }}></i>
                      ) : (
                        <i className='fas fa-check' style={{ color: 'red' }}></i>
                      )}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/mecze/${match.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(match.id)}>
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

export default MatchList;