import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { Container } from 'react-bootstrap'



const NewsList = ({ news, deleteHandler, loading, error }) => {

  const [searchTitle, setSearchTitle] = useState('')

  const searchTitleHandler = (e) => {
    const { value } = e.target;

    setSearchTitle(value)
  }

  const createProductHandler = () => {

  }

  return (
    <>

      {/* <Row className='align-items-center'> */}
      {/* <Col> */}
      <div className="admin__container-action">
        <h1 className='admin__title'>Aktualności</h1>
        {/* </Col> */}

        {/* <Col className='text-right'> */}
        <Link className='button admin__link-text admin__link-text--create' to={"/admin/aktualnosci/tworzenie"}>
          <i className='fas fa-plus'></i> Stwórz artykuł
        </Link>
      </div>
      {/* </Col> */}
      {/* </Row> */}
      <Form.Control
        type='text'
        placeholder='Wyszukaj aktualności po tytule...'
        // value={searchEmail}
        onChange={searchTitleHandler}
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
                    <th>TYTUŁ</th>
                    <th>PODTYTUŁ</th>
                    <th>OPIS</th>
                    <th>DATA STWORZENIA</th>
                    {/* <th>ZDJĘCIE</th> */}
                    <th>AUTOR</th>
                    <th style={{ width: '140px' }}></th>
                  </tr>
                </thead>

                <tbody>
                  {news.filter(val => {
                    if (searchTitle == "") {
                      return val
                    } else if (val.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                      return val
                    }
                  }).map(newsItem => (
                    <tr key={newsItem.id}>
                      <td>{newsItem.id}</td>
                      <td>{newsItem.title}</td>
                      <td>{newsItem.subtitle}</td>
                      <td>{`${newsItem.description.slice(0, 200)}...`}</td>
                      <td>{newsItem.createdAt}</td>
                      <td>{newsItem.user}</td>
                      <td>
                        <LinkContainer className={'admin__link admin__link--margin'} to={`/admin/aktualnosci/${newsItem.id}/edycja`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </LinkContainer>

                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(newsItem.id)}>
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

export default NewsList;