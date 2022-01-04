import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to={"/aktualnosci"}>Aktualności</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/rozgrywki"}>Rozgrywki</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/druzyna"}>Drużyna</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/klub"}>Klub</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/galeria"}>Galeria</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={"/sponsorzy"}>Sponsorzy</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;