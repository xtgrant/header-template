import React from 'react';

export default class UserDropdown extends React.Component{
  actionClick(evt) {
    let menu = document.querySelector('.user-container');
    menu.classList.toggle('expand');
  }

  render(){
      //html to render for base header
      return(
        <div class="user-container">
          <div class="user-action">
            <div class="user-name">John Dow</div>
            <div class="user-profile" onClick={this.actionClick}><div class="profile-image">_profile_img_</div></div>
          </div>
          <div class="user-nav-list">
            <ul>
              <li>PROFILE</li>
              <li>SETTINGS</li>
              <li>LOGOUT</li>
            </ul>
          </div>
        </div>
      );
  }
}
