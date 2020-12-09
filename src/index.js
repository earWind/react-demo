import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';

/**
 * redux
 * cnpm i redux react-redux --save
 */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers"; // 创建store
import Count from "./redux/components/Count";
import TestRedux from "./redux/components";
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* redux */}
    <Provider store={store}>
      <Count />
      <hr />
      <TestRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
