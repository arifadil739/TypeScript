
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Provider } from 'react-redux';
import store from './store';
import './App.css'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  
    <Provider store={store}>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </Provider>
    
);  

