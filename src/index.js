import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/normalize.css';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";
import GameRoute from "./routes/GameRoute";
import SearchRoute from "./routes/SearchRoute";
import UserRoute from "./routes/UserRoute";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="register" element={<RegisterRoute />} />
      <Route path="games/:id" element={<GameRoute/>}/>
      <Route path="search/:str" element={<SearchRoute/>}/>
      <Route path="user/:id" element={<UserRoute/>}/>
      <Route path="*" element={<App/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
