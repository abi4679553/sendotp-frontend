import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/tailwind.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  Dcontext  from './provider/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Dcontext>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Dcontext>
);


