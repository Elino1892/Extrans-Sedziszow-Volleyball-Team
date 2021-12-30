import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <header className="header">
      <div className="header__logo-volleyball-team">
        <img className="header__image-volleyball-team" src="../../images/logo_volleyball_team.png" alt="logo-drużyna-siatkarska" />
      </div>
      <div className="header__upper">
        <div className="header__logo-company-extrans">
          <img className="header__image-company-extrans" src="../../images/logo_company_extrans.png" alt="logo-firma-extrans" />
        </div>
        <div className="header__team-info">
          <div className="header__social">
            <span className="fab fa-facebook"></span>
            <span className="fab fa-youtube"></span>
          </div>
          <div className="header__contact">
            <span className="fas fa-location-arrow"></span>
            <span className="fas fa-phone-alt"></span>
            <span className="fas fa-envelope"></span>
          </div>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav__item-list">
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>Aktualności</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>Mecze</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>Drużyna</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>Klub</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>Galeria</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={"/"}>Sponsorzy</Link>
          </li>
        </ul>
      </nav>


    </header>
  )
}

export default Navigation;