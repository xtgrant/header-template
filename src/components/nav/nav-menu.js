import React from 'react';

export default class NavMenu extends React.Component{

  actionClick(evt) {
    let menu = document.querySelector('.nav-container');
    menu.classList.toggle('expand');
  }

  render(){
      //html to render for base header
      return(
        <div class="nav-container">
          <div class="nav-list">
            <ul>
              <li class="nav-link"><div class="link-home"> <span>HOME</span></div></li>
              <li class="nav-link"><div class="link-home"> <span>DASHBOARD</span></div></li>
              <li class="nav-link"><div class="link-home"> <span>SERVICES</span></div></li>
            </ul>
          </div>
          <div class="nav-action">
            <div class="action-arrow" onClick={this.actionClick}>CLICK</div>
          </div>
        </div>
      );
  }
}
