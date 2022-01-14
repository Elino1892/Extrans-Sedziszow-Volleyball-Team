import { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { Container } from 'react-bootstrap'



const UserList = ({ users, deleteHandler, loading, error }) => {

  const [searchEmail, setSearchEmail] = useState('')

  const searchEmailHandler = (e) => {
    const { value } = e.target;

    setSearchEmail(value)
  }


  return (
    <>
      <h1 className='admin__title'>Użytkownicy</h1>
      <Form.Control
        type='text'
        placeholder='Wyszukaj użytkownika...'
        // value={searchEmail}
        onChange={searchEmailHandler}
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
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {users.filter(val => {
                    if (searchEmail == "") {
                      return val
                    } else if (val.email.toLowerCase().includes(searchEmail.toLowerCase())) {
                      return val
                    }
                  }).map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.isAdmin ? (
                        <i className='fas fa-check' style={{ color: 'greenyellow' }}></i>
                      ) : (
                        <i className='fas fa-check' style={{ color: 'red' }}></i>
                      )}</td>
                      <td>
                        <LinkContainer className={'admin__link'} to={`/admin/uzytkownik/${user.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user.id)}>
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

export default UserList;