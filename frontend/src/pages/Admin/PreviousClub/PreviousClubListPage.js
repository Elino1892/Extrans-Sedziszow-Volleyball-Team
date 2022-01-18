import { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listPreviousClubs, deletePreviousClub } from '../../../store/actions/previousClubActions'
import { listPlayerPreviousClubs, deletePlayerPreviousClub } from '../../../store/actions/playerPreviousClubActions'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { PREVIOUS_CLUB_DETAILS_RESET } from '../../../constants/previousClubConstants'
import { PLAYER_PREVIOUS_CLUB_DETAILS_RESET } from '../../../constants/playerPreviousClubConstants'

import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
import PreviousClubList from '../../../components/Admin/PreviousClub/PreviousClubList/PreviousClubList'
import PlayerPreviousClubList from '../../../components/Admin/PlayerPreviousClub/PlayerPreviousClubList/PlayerPreviousClubList'


const PreviousClubListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isClubActive, setIsClubActive] = useState(false);


  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin



  const previousClubList = useSelector(state => state.previousClubList)
  const { loading, error, previousClubs } = previousClubList


  const previousClubDelete = useSelector(state => state.previousClubDelete)
  const { success: successDelete } = previousClubDelete



  const playerPreviousClubList = useSelector(state => state.playerPreviousClubList)
  const { loading: loadingPlayer, error: errorPlayer, playerPreviousClubs } = playerPreviousClubList

  const playerPreviousClubDelete = useSelector(state => state.playerPreviousClubDelete)
  const { success: successDeletePlayer } = playerPreviousClubDelete

  const changeViewScreenHandler = (isClubButton) => {
    if (isClubButton) {
      setIsClubActive(true)
    } else {
      setIsClubActive(false)
    }
  }

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Poprzednie kluby zawodników - Administrator"
      window.scrollTo(0, 0)
      dispatch(listPreviousClubs())
      dispatch(listPlayerPreviousClubs())
      dispatch({ type: PREVIOUS_CLUB_DETAILS_RESET })
      dispatch({ type: PLAYER_PREVIOUS_CLUB_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete, successDeletePlayer])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć ten klub?')) {
      dispatch(deletePreviousClub(id))
    }
  }

  const deletePlayerHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć tego zawodnika?')) {
      dispatch(deletePlayerPreviousClub(id))
    }
  }



  return (
    <>
      <div className="full-gameplay__sub-nav">
        <div className="full-gameplay__sub-nav-content">
          <Button onClick={() => changeViewScreenHandler(true)} className={isClubActive ? "button full-gameplay__button full-gameplay__button-active" : "button full-gameplay__button"}>Kluby</Button>
          <Button onClick={() => changeViewScreenHandler(false)} className={!isClubActive ? "button full-gameplay__button full-gameplay__button-active" : "button full-gameplay__button"}>Zawodnicy</Button>
        </div>
      </div>
      <AdminLayout>
        {isClubActive ?
          <>
            {loading ? <LoadingSpinner /> :
              <PreviousClubList
                previousClubs={previousClubs}
                deleteHandler={deleteHandler}
                loading={loading}
                error={error}
              />
            }
          </>
          :
          <>
            {loadingPlayer ? <LoadingSpinner /> :
              <PlayerPreviousClubList
                playerPreviousClubs={playerPreviousClubs}
                deletePlayerHandler={deletePlayerHandler}
                loading={loadingPlayer}
                error={errorPlayer}
              />
            }
          </>
        }

      </AdminLayout>
    </>
  )
}

export default PreviousClubListPage;