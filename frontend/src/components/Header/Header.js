import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation';

import logoVolleyballTeam from '../../images/logo_volleyball_team.png'
import logoExtrans from '../../images/logo_company_extrans.png'

const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo-volleyball-team" to={"/"}>
        <img className="header__image-volleyball-team" src={logoVolleyballTeam} alt="logo-drużyna-siatkarska" />
      </Link>
      <div className="header__upper">
        <div className="header__logo-company-extrans">
          <img className="header__image-company-extrans" src={logoExtrans} alt="logo-firma-extrans" />
        </div>
        <div className="header__team-info">
          <div className="header__social">
            <span className="fab fa-facebook"></span>
            <span className="fab fa-youtube"></span>
          </div>
          <div className="header__contact">
            <span className="fas fa-location-arrow"></span>
            <span className="header__contact-info">Hala przy LO w Sędziszowie Małopolskim, ul. Fabyrczna 5</span>
            <span className="fas fa-phone-alt"></span>
            <span className="header__contact-info">504 124 638</span>
            <span className="fas fa-envelope"></span>
            <span className="header__contact-info">singalicja@gmail.com</span>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  )
}

export default Header;