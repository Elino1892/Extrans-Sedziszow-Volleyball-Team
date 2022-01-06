import { Route, Routes } from 'react-router';

import Layout from './components/Layout/Layout';
import HomePage from './pages/User/HomePage';
import NewsPage from './pages/User/NewsPage';
import ArticleItemPage from './pages/User/ArticleItemPage';
import FullGameplayPage from './pages/User/FullGameplayPage';
import TeamPage from './pages/User/TeamPage';
import PlayerPage from './pages/User/PlayerPage';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aktualnosci" element={<NewsPage />}></Route>
          <Route path="/aktualnosci/:articleId" element={<ArticleItemPage />}></Route>
          <Route path="/rozgrywki" element={<FullGameplayPage />}></Route>
          <Route path="/druzyna" element={<TeamPage />}></Route>
          <Route path="/druzyna/:playerId" element={<PlayerPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
