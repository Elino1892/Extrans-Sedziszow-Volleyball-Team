import Club from "../../components/Club/Club";
import { useSelector, useDispatch } from "react-redux";
import { listSponsors } from "../../store/actions/sponsorActions";
import LoadingCover from '../../components/UI/LoadingCover/LoadingCover'

import { useEffect } from "react";



const ClubPage = () => {

  const dispatch = useDispatch();

  const sponsorList = useSelector(state => state.sponsorList)
  const { sponsors } = sponsorList

  useEffect(() => {
    document.title = 'Klub - Extrans Sędziszów Małopolski'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {!sponsors.length ? <LoadingCover /> :
        <Club
          sponsors={sponsors}
        />
      }
    </>
  )
}

export default ClubPage;