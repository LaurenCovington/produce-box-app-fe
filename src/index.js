
// direct copy-paste should work
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; // cant resolve './serviceWorker' in '/Users/laurenacovington/Desktop/produce-box-app-fe/src'
import {ProductProvider} from './store/appContext';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ProductProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>  
    </ProductProvider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//was: serviceWorker.unregister();






// THIS WORKS 81621, 640PM
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { BrowserRouter } from "react-router-dom";
// //import RunThis from './pages/login'
// //import cors from '../package.json'

// ReactDOM.render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// //var cors = require('cors')
// //App.use(cors())
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
