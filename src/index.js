import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Contactpage from './page/contact';
import Aboutpage from './page/about';
import Resumepage from './page/resume';
import Boxmedicinepage from './page/boxmedicp';
import Mainpage from './page/main';
import Webfilepage from './page/webfilep';
import Webquepage from './page/webquep';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
  
    
       <Route path="/" element={<App/>}/>
       <Route path="/contactp" element={<Contactpage/>}/>
       <Route path="/aboutp" element={<Aboutpage/>}/>
       <Route path="/resumep" element={<Resumepage/>}/>
       <Route path="/boxmedicp" element={<Boxmedicinepage/>}/>
       <Route path="/mainp" element={<Mainpage/>}/>
       <Route path="/webfilep" element={<Webfilepage/>}/>
       <Route path="/webfilep" element={<Webfilepage/>}/>
       <Route path="/webquep" element={<Webquepage/>}/>
   </Routes>
  </BrowserRouter>

);
    //
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))sss
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
