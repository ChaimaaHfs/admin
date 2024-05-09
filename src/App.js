import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Accounts from "./pages/accounts/Accounts";
import Complaints from "./pages/complaints/Complaints";
import Logout from "./pages/logout/Logout";
import Registration from "./pages/registration/Registration";
import Satistics from "./pages/satistics/Satistics";
import Settings from "./pages/settings/Settings";


import './compenets/sidebar/sidebar';

function App() {
  return (
    <div className='App'>
     <Router>
      
      
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/Accounts' element={<Accounts/>}/>
      <Route path='/Complaints' element={<Complaints/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Satistics' element={<Satistics/>}/>

     </Routes>
     </Router>
      
    </div>
  );
  
}

export default App;
