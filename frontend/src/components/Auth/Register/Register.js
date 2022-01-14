import { useRef } from 'react';
import { NavLink } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Input from '../../UI/Input/Input';
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";

const Register = ({ loading, error, submitHandler }) => {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          {loading ? <LoadingSpinner />
            : error ? <p>Błąd: {error}</p>
              :
              <form onSubmit={(e) => submitHandler(e, nameInputRef, emailInputRef, passwordInputRef, confirmPasswordInputRef)} className="login login-register">
                <div className="login__field">
                  <span className="login__icon fas fa-user"></span>
                  <Input
                    ref={nameInputRef}
                    className="login__input"
                    input={{
                      type: 'text',
                      placeholder: 'Imię'
                    }}
                  />
                </div>
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
                <div className="login__field">
                  <span className="login__icon fas fa-lock"></span>
                  <Input
                    ref={confirmPasswordInputRef}
                    className="login__input"
                    input={{
                      type: 'password',
                      placeholder: 'Powtórzone hasło'
                    }}
                  />
                </div>
                <Button type={'submit'} className="button login__submit">
                  <span className="button__text">Zarejestruj się</span>
                  <span className="button__icon fas fa-chevron-right"></span>
                </Button>
              </form>
          }
          <div className="login-info">
            <p className="login-info__title">Masz już konto ?</p>
            <NavLink className="login-info__link" to={'/logowanie'}>Zaloguj się!</NavLink>
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

export default Register;