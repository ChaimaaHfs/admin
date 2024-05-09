import React from 'react';
import Sidebar from "../../compenets/sidebar/sidebar";
import Navbar from "../../compenets/Navbar/Navbar";

import './Accounts.css'; // Import your CSS file



const Accounts = () => {
  return (
    <div className='accounts'>
        <Sidebar/>
      <div className="accountsContainer">
      <Navbar/>
      <div className="">
            
        </div>

    </div>
    </div>
  );
};

export default Accounts;