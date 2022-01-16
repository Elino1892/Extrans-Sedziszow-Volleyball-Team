import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listPlayers, deletePlayer } from '../../../store/actions/playerActions'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { PLAYER_DETAILS_RESET } from '../../../constants/playerConstants'

import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
import PlayerList from '../../../components/Admin/Player/PlayerList/PlayerList'


const PlayerListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const playerList = useSelector(state => state.playerList)
  const { loading, error, players } = playerList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const playerDelete = useSelector(state => state.playerDelete)
  const { success: successDelete } = playerDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Zawodnicy - Administrator"
      window.scrollTo(0, 0)
      dispatch(listPlayers())
      // dispatch({ type: PLAYER_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć tego zawodnika?')) {
      dispatch(deletePlayer(id))
    }
  }



  return (
    <AdminLayout>
      {players.length === 0 ? <LoadingSpinner /> :
        <PlayerList
          players={players}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </AdminLayout>
  )
}

export default PlayerListPage;