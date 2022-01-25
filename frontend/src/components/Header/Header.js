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
        <p className="header__official-site-text">
          Oficjalna strona
          <br />
          Extrans Sędziszów Małopolski
        </p>
        <div className="header__logo-company-extrans">
          <img className="header__image-company-extrans" src={logoExtrans} alt="logo-firma-extrans" />
        </div>
        <div className="header__team-info">
          <div className="header__social">
            <a className="header__social-item header__social-item--facebook" href="/">
              <span className="fab fa-facebook"></span>
            </a>
            <a className="header__social-item header__social-item--youtube" href="/">
              <span className="fab fa-youtube"></span>
            </a>
            <a className="header__social-item header__social-item--instagram" href="/">
              <span className="fab fa-instagram"></span>
            </a>
            <a className="header__social-item header__social-item--twitter" href="/">
              <span className="fab fa-twitter"></span>
            </a>
          </div>
          <div className="header__contact">
            <div className="header__contact-item">
              <span className="fas fa-location-arrow"></span>
              <span className="header__contact-info">Hala przy LO w Sędziszowie Małopolskim, ul. Fabryczna 5</span>
            </div>
            <div className="header__contact-item">
              <span className="fas fa-phone-alt"></span>
              <span className="header__contact-info">504 124 638</span>
            </div>
            <div className="header__contact-item">
              <span className="fas fa-envelope"></span>
              <span className="header__contact-info">singalicja@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  )
}

export default Header;