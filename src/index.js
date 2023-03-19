import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose,applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducer/reducer'

const store = createStore(reducer,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();



