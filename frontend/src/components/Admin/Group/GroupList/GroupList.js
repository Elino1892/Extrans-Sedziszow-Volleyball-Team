import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { Container } from 'react-bootstrap'



const GroupList = ({ groups, deleteHandler, loading, error }) => {

  const [searchGroup, setSearchGroup] = useState('')

  const searchGroupHandler = (e) => {
    const { value } = e.target;

    setSearchGroup(value)
  }


  return (
    <>

      {/* <Row className='align-items-center'> */}
      {/* <Col> */}
      <div className="admin__container-action">
        <h1 className='admin__title'>Grupy</h1>
        {/* </Col> */}

        {/* <Col className='text-right'> */}
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/grupy/tworzenie"}>
          <i className='fas fa-plus'></i> Stwórz grupę
        </Link>
      </div>
      {/* </Col> */}
      {/* </Row> */}
      <Form.Control
        type='text'
        placeholder='Wyszukaj grupę po nazwie...'
        // value={searchEmail}
        onChange={searchGroupHandler}
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
                  {groups.filter(val => {
                    if (searchGroup == "") {
                      return val
                    } else if (val.name.toLowerCase().includes(searchGroup.toLowerCase())) {
                      return val
                    }
                  }).map(group => (
                    <tr key={group.id}>
                      <td>{group.id}</td>
                      <td>{group.name}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/grupy/${group.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(group.id)}>
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

export default GroupList;