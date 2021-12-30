import { Route, Routes } from 'react-router';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
