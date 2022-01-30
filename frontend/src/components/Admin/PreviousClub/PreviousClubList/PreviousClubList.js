import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
import { Container } from 'react-bootstrap'



const PreviousClubList = ({ previousClubs, deleteHandler, loading, error }) => {

  const [searchPreviousClub, setSearchPreviousClub] = useState('')

  const searchPreviousClubHandler = (e) => {
    const { value } = e.target;

    setSearchPreviousClub(value)
  }


  return (
    <>
      <div className="admin__container-action">
        <h1 className='admin__title'>Poprzednie kluby zawodników</h1>
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/poprzednie-kluby/tworzenie"}>
          <i className='fas fa-plus'></i> Dodaj klub
        </Link>
      </div>
      <Form.Control
        type='text'
        placeholder='Wyszukaj klub po nazwie...'
        onChange={searchPreviousClubHandler}
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
                  {previousClubs.filter(val => {
                    if (searchPreviousClub == "") {
                      return val
                    } else if (val.name.toLowerCase().includes(searchPreviousClub.toLowerCase())) {
                      return val
                    }
                  }).map(previousClub => (
                    <tr key={previousClub.id}>
                      <td>{previousClub.id}</td>
                      <td>{previousClub.name}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/poprzednie-kluby/${previousClub.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(previousClub.id)}>
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

export default PreviousClubList;