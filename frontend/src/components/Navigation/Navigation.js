import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/userActions';
import { NavLink, Link } from 'react-router-dom'
import Button from '../UI/Button/Button';

import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const Navigation = () => {


  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/');
  }


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
        <li className="nav__item nav__item--margin-right">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/klub"}>Klub</NavLink>
        </li>
        {/* <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/galeria"}>Galeria</NavLink>
        </li> */}
        {userInfo ?
          <li className="nav__item nav__dropdown">
            <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn active" : "nav__link nav__link-dropbtn"} to={"/profile"}>{userInfo.name} <span className="fas fa-arrow-down"></span></NavLink>
            <ul className="nav__dropdown-content">
              <Button className="nav__dropdown-item" onClick={logoutHandler}>Wyloguj się </Button>
            </ul>
          </li>

          :
          <>
            <li className="nav__item">
              <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/logowanie"}>Logowanie</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/rejestracja"}>Rejestracja</NavLink>
            </li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Navigation;