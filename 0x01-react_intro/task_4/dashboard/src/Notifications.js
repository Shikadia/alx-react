import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
  return (
    <div>
    <div className="Notifications">
      <h1>Here is the list of notifications</h1>
      <button style={{
        float: 'right',
        marginTop: '-70px',
        backgroundColor: '#fff',
        border: 'none',
      }} aria-label='Close'>
        <img src={closeIcon} alt='close' />
      </button>
      <ul>
        <li className= "Notl1" data-priority="default">New course available</li>
        <li className= "Notl2" data-priority="urgent">New resume available</li>
        <li className= "Notl3" data-priority="urgent"
            dangerouslySetInnerHTML={{
              __html: getLatestNotification(),
            }}></li>
      </ul>
    </div>
  </div>
  );
};

export default Notifications;