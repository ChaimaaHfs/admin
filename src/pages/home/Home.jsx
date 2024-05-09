import React from 'react';
import Sidebar from "../../compenets/sidebar/sidebar";
import Navbar from "../../compenets/Navbar/Navbar";

import './Home.css'; // Import your CSS file
import Widget from "../../compenets/widget/widget";


const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
          <Widget type="user" />
          <Widget type="magasinier" />
          <Widget type="admin" />  
        </div>

    </div>
    </div>
  );
};

export default Home;