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

import UserListPage from './pages/Admin/User/UserListPage';
import UserEditPage from './pages/Admin/User/UserEditPage';
import NewsListPage from './pages/Admin/News/NewsListPage';
import NewsCreatePage from './pages/Admin/News/NewsCreatePage';
import NewsEditPage from './pages/Admin/News/NewsEditPage';

import PlayerListPage from './pages/Admin/Player/PlayerListPage';
import PlayerCreatePage from './pages/Admin/Player/PlayerCreatePage';
import PlayerEditPage from './pages/Admin/Player/PlayerEditPage';

import GroupListPage from './pages/Admin/Group/GroupListPage';
import GroupCreatePage from './pages/Admin/Group/GroupCreatePage';
import GroupEditPage from './pages/Admin/Group/GroupEditPage';

import PreviousClubListPage from './pages/Admin/PreviousClub/PreviousClubListPage';
import PreviousClubCreatePage from './pages/Admin/PreviousClub/PreviousClubCreatePage';
import PreviousClubEditPage from './pages/Admin/PreviousClub/PreviousClubEditPage';

import PlayerPreviousClubEditPage from './pages/Admin/PlayerPreviousClub/PlayerPreviousClubEditPage';
import PlayerPreviousClubCreatePage from './pages/Admin/PlayerPreviousClub/PlayerPreviousClubCreatePage';

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
          <Route path="/druzyna/:id" element={<PlayerPage />}></Route>
          <Route path="/klub" element={<ClubPage />}></Route>

          <Route path="/logowanie" element={<LoginPage />}></Route>
          <Route path="/rejestracja" element={<RegisterPage />}></Route>


          <Route path="/admin/uzytkownicy" element={<UserListPage />}></Route>
          <Route path="/admin/uzytkownik/:id/edycja" element={<UserEditPage />}></Route>

          <Route path="/admin/aktualnosci" element={<NewsListPage />}></Route>
          <Route path="/admin/aktualnosci/tworzenie" element={<NewsCreatePage />}></Route>
          <Route path="/admin/aktualnosci/:id/edycja" element={<NewsEditPage />}></Route>

          <Route path="/admin/zawodnicy" element={<PlayerListPage />}></Route>
          <Route path="/admin/zawodnicy/tworzenie" element={<PlayerCreatePage />}></Route>
          <Route path="/admin/zawodnicy/:id/edycja" element={<PlayerEditPage />}></Route>

          <Route path="/admin/grupy" element={<GroupListPage />}></Route>
          <Route path="/admin/grupy/tworzenie" element={<GroupCreatePage />}></Route>
          <Route path="/admin/grupy/:id/edycja" element={<GroupEditPage />}></Route>

          <Route path="/admin/poprzednie-kluby" element={<PreviousClubListPage />}></Route>
          <Route path="/admin/poprzednie-kluby/tworzenie" element={<PreviousClubCreatePage />}></Route>
          <Route path="/admin/poprzednie-kluby/:id/edycja" element={<PreviousClubEditPage />}></Route>

          <Route path="/admin/poprzednie-kluby/zawodnicy/:id/edycja" element={<PlayerPreviousClubEditPage />}></Route>
          <Route path="/admin/poprzednie-kluby/zawodnicy/tworzenie" element={<PlayerPreviousClubCreatePage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
