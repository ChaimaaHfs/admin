import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faUser, faExclamationCircle, faChartBar, faCog, faQuestionCircle, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sidebar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
       
        <li>
            <Link to="/" className="logo">
              
              <span className="nav-item">DashBoard</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <FontAwesomeIcon icon={faHome} />
              <span className="nav-item">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/registration">
              <FontAwesomeIcon icon={faWallet} />
              <span className="nav-item">registration</span>
            </Link>
          </li>
          <li>
            <Link to="/accounts">
              <FontAwesomeIcon icon={faUser} />
              <span className="nav-item">Accounts</span>
            </Link>
          </li>
          <li>
            <Link to="/complaints">
              <FontAwesomeIcon icon={faExclamationCircle} />
              <span className="nav-item">complaints</span>
            </Link>
          </li>
          <li>
            <Link to="/satistics">
              <FontAwesomeIcon icon={faChartBar} />
              <span className="nav-item">statistics</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FontAwesomeIcon icon={faCog} />
              <span className="nav-item">Settings</span>
            </Link>
          </li>
         
          <li>
            <Link to="/logout" className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="nav-item">Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default sidebar;