import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/aktualnosci"}>Aktualności</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/rozgrywki"}>Rozgrywki</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/druzyna"}>Drużyna</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/klub"}>Klub</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/galeria"}>Galeria</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/sponsorzy"}>Sponsorzy</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;