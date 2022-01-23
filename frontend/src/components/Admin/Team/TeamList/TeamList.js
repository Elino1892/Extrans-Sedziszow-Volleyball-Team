import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { Container } from 'react-bootstrap'



const TeamList = ({ teams, deleteHandler, loading, error }) => {

  const [searchTeam, setSearchTeam] = useState('')

  const searchTeamHandler = (e) => {
    const { value } = e.target;

    setSearchTeam(value)
  }


  return (
    <>

      {/* <Row className='align-items-center'> */}
      {/* <Col> */}
      <div className="admin__container-action">
        <h1 className='admin__title'>Drużyny</h1>
        {/* </Col> */}

        {/* <Col className='text-right'> */}
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/druzyny/tworzenie"}>
          <i className='fas fa-plus'></i> Dodaj drużynę
        </Link>
      </div>
      {/* </Col> */}
      {/* </Row> */}
      <Form.Control
        type='text'
        placeholder='Wyszukaj drużynę po nazwie...'
        // value={searchEmail}
        onChange={searchTeamHandler}
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
                    <th>NAZWA</th>
                    <th style={{ width: '140px' }}></th>
                  </tr>
                </thead>

                <tbody>
                  {teams.filter(val => {
                    if (searchTeam == "") {
                      return val
                    } else if (val.name.toLowerCase().includes(searchTeam.toLowerCase())) {
                      return val
                    }
                  }).map(team => (
                    <tr key={team.id}>
                      <td>{team.id}</td>
                      <td>{team.name}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/druzyny/${team.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(team.id)}>
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

export default TeamList;