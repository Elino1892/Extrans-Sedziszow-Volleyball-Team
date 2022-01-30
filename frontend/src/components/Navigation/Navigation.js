import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/userActions';
import { NavLink, Link } from 'react-router-dom'
import Button from '../UI/Button/Button';

import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



const Navigation = () => {

  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [isMobileSubMenuProfile, setIsMobileSubMenuProfile] = useState(false)
  const [isMobileSubMenuAdmin, setIsMobileSubMenuAdmin] = useState(false)

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/');
    changeMenuTimesHandler();
  }

  const changeMenuBarsHandler = () => {
    setIsMobileMenu(true);

  }

  const changeMenuTimesHandler = () => {
    setIsMobileMenu(false);
    setIsMobileSubMenuAdmin(false);
    setIsMobileSubMenuProfile(false);
  }

  const changeMenuSubNavProfileHandler = () => {
    setIsMobileSubMenuProfile((prevState) => !prevState);
  }

  const changeMenuSubNavAdminHandler = () => {
    setIsMobileSubMenuAdmin((prevState) => !prevState);
  }

  return (
    <>
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
          {/* <li className="nav__item">
          <NavLink className={navData => navData.isActive ? "nav__link active" : "nav__link"} to={"/galeria"}>Galeria</NavLink>
        </li> */}
          {userInfo ?
            <li className="nav__item nav__dropdown">
              <p className="nav__link nav__link-dropbtn">{userInfo.name} <span className="fas fa-arrow-down"></span></p>
              <ul className="nav__dropdown-content">
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={"/profil"}>Profil</NavLink>
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
          {(userInfo && userInfo.isAdmin) &&
            <li className="nav__item nav__dropdown">
              <p className="nav__link nav__link-dropbtn">Admin <span className="fas fa-arrow-down"></span></p>
              <ul className="nav__dropdown-content nav__dropdown-content--big">
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/uzytkownicy'}>Użytkownicy</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/aktualnosci'}>Aktualności</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/zawodnicy'}>Zawodnicy</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/grupy'}>Grupy</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/poprzednie-kluby'}>Poprzednie kluby zawodników</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/druzyny'}>Drużyny</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/mecze'}>Mecze</NavLink>
                <NavLink className={navData => navData.isActive ? "nav__link nav__link-dropbtn nav__link-dropbtn--item active active-drop-item" : "nav__link nav__link-dropbtn nav__link-dropbtn--item"} to={'/admin/sponsorzy'}>Sponsorzy</NavLink>
              </ul>
            </li>
          }
        </ul>


        <nav className={isMobileMenu ? "menu-mobile menu-mobile--active" : "menu-mobile"}>
          <ul className="menu-mobile__list">
            <li className="menu-mobile__list-item">
              <NavLink to={"/aktualnosci"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="far fa-newspaper"></i>Aktualności</NavLink>
            </li>
            <li className="menu-mobile__list-item">
              <NavLink to={"/rozgrywki"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-volleyball-ball"></i>Rozgrywki</NavLink>
            </li>
            <li className="menu-mobile__list-item">
              <NavLink to={"/druzyna"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-users"></i>Drużyna</NavLink>
            </li>
            <li className="menu-mobile__list-item">
              <NavLink to={"/klub"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-info"></i>Klub</NavLink>
            </li>
            {userInfo ?
              <li className="menu-mobile__list-item">
                <p className="menu-mobile__item menu-mobile__item-nav"><i className="fas fa-user"></i>{userInfo.name}</p><i className={!isMobileSubMenuProfile ? "fas fa-arrow-down" : "fas fa-arrow-down active"} onClick={changeMenuSubNavProfileHandler}></i>
                <ul className={!isMobileSubMenuProfile ? "menu-mobile__list menu-mobile__list-subnav" : "menu-mobile__list menu-mobile__list-subnav menu-mobile__list-subnav--active"} >
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/profil"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Profil</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item">
                    <Button className="menu-mobile__item menu-mobile__button" onClick={logoutHandler}><i className="fas fa-arrow-right"></i>Wyloguj się</Button>
                  </li>

                </ul>
              </li> :
              <>
                <li className="menu-mobile__list-item">
                  <NavLink to={"/logowanie"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-sign-in-alt"></i>Logowanie</NavLink>
                </li>
                <li className="menu-mobile__list-item">
                  <NavLink to={"/rejestracja"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-user-plus"></i>Rejestracja</NavLink>
                </li>
              </>
            }
            {(userInfo && userInfo.isAdmin) &&
              <li className="menu-mobile__list-item">
                <p className="menu-mobile__item menu-mobile__item-nav"><i className="fas fa-user-lock"></i>Admin</p><i className={!isMobileSubMenuAdmin ? "fas fa-arrow-down" : "fas fa-arrow-down active"} onClick={changeMenuSubNavAdminHandler}></i>
                <ul className={!isMobileSubMenuAdmin ? "menu-mobile__list menu-mobile__list-subnav" : "menu-mobile__list menu-mobile__list-subnav menu-mobile__list-subnav--active"}>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/uzytkownicy"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Użytkownicy</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/aktualnosci"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Aktualności</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/zawodnicy"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Zawodnicy</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/grupy"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Grupy</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/poprzednie-kluby"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Poprzednie kluby zawodników</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/druzyny"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Drużyny</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/mecze"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Mecze</NavLink></li>
                  <li className="menu-mobile__list-item menu-mobile__list-subnav-item"><NavLink to={"/admin/sponsorzy"} className="menu-mobile__item" onClick={changeMenuTimesHandler}><i className="fas fa-arrow-right"></i>Sponsorzy</NavLink></li>

                </ul>
              </li>
            }
          </ul>
        </nav>

        <div className="burger"> <div className={isMobileMenu ? "burger__fas burger__fas-bar" : "burger__fas burger__fas-bar burger__fas-bar--active"} onClick={changeMenuBarsHandler}><i className="fas fa-bars"></i></div>
          <div className={isMobileMenu ? "burger__fas burger__fas-times burger__fas-times--active" : "burger__fas burger__fas-times"} onClick={changeMenuTimesHandler}><i className="fas fa-times"></i></div></div>
      </nav>
    </>
  )
}

export default Navigation;