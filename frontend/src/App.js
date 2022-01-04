import { Route, Routes } from 'react-router';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ArticleItemPage from './pages/ArticleItemPage';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aktualnosci" element={<NewsPage />}></Route>
          <Route path="/aktualnosci/:articleId" element={<ArticleItemPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
