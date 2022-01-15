import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/actions/userActions';

import Login from "../../components/Auth/Login/Login"

const LoginPage = () => {

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    document.title = "Logowanie"
    window.scrollTo(0, 0)
    if (userInfo) {
      navigate('/', { replace: true })
    }
  }, [navigate, userInfo, dispatch])

  const submitHandler = (e, emailInputRef, passwordInputRef) => {
    e.preventDefault();

    // console.log(e)
    console.log(emailInputRef.current.value)
    console.log(passwordInputRef.current.value)

    dispatch(login(emailInputRef.current.value, passwordInputRef.current.value))
    if (error && error === 'No active account found with the given credentials') {
      const errorMessage = 'Nie ma takiego konta!';
      setMessage(errorMessage);
    }
  }

  return (
    <Login
      loading={loading}
      error={error}
      submitHandler={submitHandler}
    />
  )
}

export default LoginPage;