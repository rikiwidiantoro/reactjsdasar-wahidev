import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Variabel from './dasar/variabel/Variabel';
// import StateProps from './dasar/StateProps/StateProps'
// import Map from './dasar/mapfilterreduce/Map'
import Lifecycle from './dasar/lifecycle/Lifecycle'
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Variabel /> */}
    {/* <StateProps /> */}
    {/* <Map /> */}
    <Lifecycle />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
