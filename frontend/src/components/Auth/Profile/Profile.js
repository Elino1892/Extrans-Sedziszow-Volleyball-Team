import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../../store/actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../../../constants/userConstants';

import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const Profile = ({ user, loading, error, success, submitHandler, message }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || !user.name || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      dispatch(getUserDetails('profile'))
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }, [dispatch, user, success])

  return (
    <div className="container">
      {loading ? <LoadingSpinner />
        : error ? <p>Błąd: {error}</p>
          :
          <div className="screen">
            <div className="screen__content">

              <form onSubmit={(e) => submitHandler(e, name, email, password, confirmPassword)} className="login login-register">
                <div className="login__field">
                  <span className="login__icon fas fa-user"></span>
                  <Input
                    className="login__input"
                    input={{
                      type: 'text',
                      placeholder: 'Imię',
                      value: name,
                      onChange: (e) => setName(e.target.value)
                    }}
                  />
                </div>
                <div className="login__field">
                  <span className="login__icon fas fa-user"></span>
                  <Input

                    className="login__input"
                    input={{
                      type: 'email',
                      placeholder: 'Nazwa użytkownika / Email',
                      value: email,
                      onChange: (e) => setEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="login__field">
                  <span className="login__icon fas fa-lock"></span>
                  <Input
                    className="login__input"
                    input={{
                      type: 'password',
                      placeholder: 'Hasło',
                      value: password,
                      onChange: (e) => setPassword(e.target.value)
                    }}
                  />
                </div>
                <div className="login__field">
                  <span className="login__icon fas fa-lock"></span>
                  <Input
                    className="login__input"
                    input={{
                      type: 'password',
                      placeholder: 'Powtórzone hasło',
                      value: confirmPassword,
                      onChange: (e) => setConfirmPassword(e.target.value)
                    }}
                  />
                </div>
                <Button type={'submit'} className="button login__submit">
                  <span className="button__text">Zaktualizuj</span>
                  <span className="button__icon fas fa-chevron-right"></span>
                </Button>
              </form>

              {message.text &&
                (message.isUpdate
                  ?
                  <p className='update-message update-message--success'>{message.text}</p>
                  :
                  <p className='update-message update-message--danger'>{message.text}</p>
                )
              }
            </div>

            <div className="screen__background">
              <span className="screen__background-shape screen__background-shape4"></span>
              <span className="screen__background-shape screen__background-shape3"></span>
              <span className="screen__background-shape screen__background-shape2"></span>
              <span className="screen__background-shape screen__background-shape1"></span>
            </div>
          </div>
      }
    </div>
  )
}


export default Profile;