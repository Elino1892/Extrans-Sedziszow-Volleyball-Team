import { useRef } from 'react';
import { NavLink } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Input from '../../UI/Input/Input';
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

const Login = ({ loading, error, submitHandler }) => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (

    <div className="container">
      <div className="screen">
        <div className="screen__content">
          {loading ? <LoadingSpinner />
            : error ? <p>Błąd: {error}</p>
              :
              <form onSubmit={(e) => submitHandler(e, emailInputRef, passwordInputRef)} className="login">
                <div className="login__field">
                  <span className="login__icon fas fa-user"></span>
                  <Input
                    ref={emailInputRef}
                    className="login__input"
                    input={{
                      type: 'email',
                      placeholder: 'Nazwa użytkownika / Email'
                    }}
                  />
                </div>
                <div className="login__field">
                  <span className="login__icon fas fa-lock"></span>
                  <Input
                    ref={passwordInputRef}
                    className="login__input"
                    input={{
                      type: 'password',
                      placeholder: 'Hasło'
                    }}
                  />
                </div>
                <Button type={'submit'} className="button login__submit">
                  <span className="button__text">Zaloguj się</span>
                  <span className="button__icon fas fa-chevron-right"></span>
                </Button>
              </form>
          }
          <div className="login-info">
            <p className="login-info__title">Nie masz konta ?</p>
            <NavLink className="login-info__link" to={'/rejestracja'}>Zarejestruj się!</NavLink>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background-shape screen__background-shape4"></span>
          <span className="screen__background-shape screen__background-shape3"></span>
          <span className="screen__background-shape screen__background-shape2"></span>
          <span className="screen__background-shape screen__background-shape1"></span>
        </div>
      </div>
    </div>

  )
}

export default Login;