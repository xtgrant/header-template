import React from 'react';

export default class UserDropdown extends React.Component{

  actionClick(evt) {
    let menu = document.getElementById('user-container');
    menu.classList.toggle('expand');
  }

  render(){
      //html to render for base user-dropdown
      return(
        <div id="user-container" className="user-container">
          <div className="user-action">
            <div className="user-name">John Doe</div>
            <div className="user-profile" onClick={this.actionClick}>
              <div className="profile-image"></div>
              <div className="close-btn"></div>
            </div>

          </div>
          <div className="user-nav-list">
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      );
  }
}
