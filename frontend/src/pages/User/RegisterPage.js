import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register } from '../../store/actions/userActions';

import Register from "../../components/Auth/Register/Register"

const RegisterPage = () => {

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    document.title = "Rejestracja"
    if (userInfo) {
      navigate("/", { replace: true })
    }
  }, [navigate, userInfo])

  const submitHandler = (e, nameInputRef, emailInputRef, passwordInputRef, confirmPasswordInputRef) => {
    e.preventDefault();

    if (!nameInputRef.current.value || !emailInputRef.current.value || !passwordInputRef.current.value || !confirmPasswordInputRef.current.value) {
      setMessage('Proszę wypełnić pola!');
    } else if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
      setMessage('Hasła nie pasują do siebie!');
    }
    else {
      dispatch(register(nameInputRef.current.value, emailInputRef.current.value, passwordInputRef.current.value))
    }
  }


  return (
    <Register
      loading={loading}
      error={error}
      submitHandler={submitHandler}
    />
  )
}

export default RegisterPage;