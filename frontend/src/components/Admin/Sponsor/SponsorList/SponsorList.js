import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { Container } from 'react-bootstrap'



const SponsorList = ({ sponsors, deleteHandler, loading, error }) => {

  const [searchSponsor, setSearchSponsor] = useState('')

  const searchSponsorHandler = (e) => {
    const { value } = e.target;

    setSearchSponsor(value)
  }


  return (
    <>
      <div className="admin__container-action">
        <h1 className='admin__title'>Sponsorzy</h1>
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/sponsorzy/tworzenie"}>
          <i className='fas fa-plus'></i> Dodaj sponsora
        </Link>
      </div>
      <Form.Control
        type='text'
        placeholder='Wyszukaj sponsora po nazwie...'
        onChange={searchSponsorHandler}
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
                    <th>LINK DO STRONY</th>
                    <th>GRUPA</th>
                    <th style={{ width: '140px' }}></th>
                  </tr>
                </thead>

                <tbody>
                  {sponsors.filter(val => {
                    if (searchSponsor == "") {
                      return val
                    } else if (val.name.toLowerCase().includes(searchSponsor.toLowerCase())) {
                      return val
                    }
                  }).map(sponsor => (
                    <tr key={sponsor.id}>
                      <td>{sponsor.id}</td>
                      <td>{sponsor.name}</td>
                      <td>{sponsor.link}</td>
                      <td>{sponsor.group}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/sponsorzy/${sponsor.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(sponsor.id)}>
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

export default SponsorList;