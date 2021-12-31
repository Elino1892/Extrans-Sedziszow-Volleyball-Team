import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
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
  )
}

export default Navigation;