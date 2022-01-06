import { Route, Routes } from 'react-router';

import Layout from './components/Layout/Layout';
import HomePage from './pages/Admin/HomePage';
import NewsPage from './pages/Admin/NewsPage';
import ArticleItemPage from './pages/Admin/ArticleItemPage';
import FullGameplayPage from './pages/Admin/FullGameplayPage';
import TeamPage from './pages/Admin/TeamPage';


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
        </Routes>
      </Layout>
    </>
  );
}

export default App;
