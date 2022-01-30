import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../store/actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';

import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import Profile from '../../components/Auth/Profile/Profile';

const ProfilePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [message, setMessage] = useState({
    isUpdate: false,
    text: '',
  })

  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile


  useEffect(() => {
    document.title = "Twój profil"
    window.scrollTo(0, 0)
    if (!userInfo) {
      navigate('/logowanie');
    }
  }, [navigate, userInfo])

  const submitHandler = (e, name, email, password, confirmPassword) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage(
        {
          isUpdate: false,
          text: 'Hasła nie pasują do siebie!'
        }
      );
    }
    else {
      dispatch(updateUserProfile({
        'id': user.id,
        'name': name,
        'email': email,
        'password': password
      }))
      setMessage(
        {
          isUpdate: true,
          text: 'Dane zostały zmienione!'
        }
      );
    }


  }

  return (
    <Profile
      user={user}
      loading={loading}
      error={error}
      submitHandler={submitHandler}
      success={success}
      message={message}
    />
  )
}

export default ProfilePage;