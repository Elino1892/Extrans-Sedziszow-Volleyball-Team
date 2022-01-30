import Club from "../../components/Club/Club";
import { useSelector, useDispatch } from "react-redux";
import { listSponsors } from "../../store/actions/sponsorActions";
import LoadingCover from '../../components/UI/LoadingCover/LoadingCover'

import sponsorLogo1 from "../../images/logo_company_extrans.png"
import sponsorLogo2 from "../../images/sponsor-logo/busik.png"
import sponsorLogo3 from "../../images/sponsor-logo/pzl.png"
import sponsorLogo4 from "../../images/sponsor-logo/vertipol.png"
import sponsorLogo5 from "../../images/sponsor-logo/ITE.png"
import { useEffect } from "react";

const dummySponsors = [
  {
    'name': 'Sponsor strategiczny',
    'group': [
      {
        'link': '',
        'logo': sponsorLogo1,
      },
    ]
  },
  {
    'name': 'Sponsor oficjalny',
    'group': [
      {
        'link': 'https://www.facebook.com/busikpiotr/',
        'logo': sponsorLogo2,
      },
      {
        'link': 'https://pzlsedziszow.pl/',
        'logo': sponsorLogo3,
      },
    ]
  },
  {
    'name': 'Sponsor',
    'group': [
      {
        'link': 'http://www.vertipol.pl/',
        'logo': sponsorLogo4,
      },
      {
        'link': 'https://www.industrytrade.pl/',
        'logo': sponsorLogo5,
      },
    ]
  },
]

const ClubPage = () => {

  const dispatch = useDispatch();

  const sponsorList = useSelector(state => state.sponsorList)
  const { sponsors } = sponsorList

  useEffect(() => {
    document.title = 'Klub - Extrans Sędziszów Małopolski'
    window.scrollTo(0, 0)
    // if (!sponsors.length) {
    //   dispatch(listSponsors())
    // }

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