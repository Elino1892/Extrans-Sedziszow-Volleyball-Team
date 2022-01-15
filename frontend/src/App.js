import { Route, Routes } from 'react-router';

import Layout from './components/Layout/Layout';
import HomePage from './pages/User/HomePage';
import NewsPage from './pages/User/NewsPage';
import ArticleItemPage from './pages/User/ArticleItemPage';
import FullGameplayPage from './pages/User/FullGameplayPage';
import TeamPage from './pages/User/TeamPage';
import PlayerPage from './pages/User/PlayerPage';
import ClubPage from './pages/User/ClubPage';
import LoginPage from './pages/User/LoginPage';
import RegisterPage from './pages/User/RegisterPage';
import ProfilePage from './pages/User/ProfilePage';

import UserListPage from './pages/Admin/UserListPage';
import UserEditPage from './pages/Admin/UserEditPage';
import NewsListPage from './pages/Admin/NewsListPage';
import NewsCreatePage from './pages/Admin/NewsCreatePage';
import NewsEditPage from './pages/Admin/NewsEditPage';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profil" element={<ProfilePage />}></Route>
          <Route path="/aktualnosci/:articleId" element={<ArticleItemPage />}></Route>
          <Route path="/aktualnosci" element={<NewsPage />}></Route>
          <Route path="/rozgrywki" element={<FullGameplayPage />}></Route>
          <Route path="/druzyna" element={<TeamPage />}></Route>
          <Route path="/druzyna/:playerId" element={<PlayerPage />}></Route>
          <Route path="/klub" element={<ClubPage />}></Route>
          <Route path="/logowanie" element={<LoginPage />}></Route>
          <Route path="/rejestracja" element={<RegisterPage />}></Route>

          <Route path="/admin/uzytkownicy" element={<UserListPage />}></Route>
          <Route path="/admin/uzytkownik/:id/edycja" element={<UserEditPage />}></Route>
          <Route path="/admin/aktualnosci" element={<NewsListPage />}></Route>
          <Route path="/admin/aktualnosci/tworzenie" element={<NewsCreatePage />}></Route>
          <Route path="/admin/aktualnosci/:id/edycja" element={<NewsEditPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
