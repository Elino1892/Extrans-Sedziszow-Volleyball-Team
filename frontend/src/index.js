import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store.js';
import "./styles/index.scss"


import "../node_modules/bootstrap/scss/bootstrap.scss"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

