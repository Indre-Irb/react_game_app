import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import statusReducer from "./features/status";
import equipmentReducer from "./features/equipment";
import triggerReducer from "./features/trigger";
import weaponReducer from "./features/weapon";
import arrayReducer from "./features/newArray";
import enemyReducer from "./features/enemycard";
import arenaTriggerReducer from "./features/arenaTrigger"

const store = configureStore({
    reducer: {
        status: statusReducer,
        equipment: equipmentReducer,
        trigger: triggerReducer,
        weapon: weaponReducer,
        newArray: arrayReducer,
        enemy: enemyReducer,
        arenaTrigger: arenaTriggerReducer
    }
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
