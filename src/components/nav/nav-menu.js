import React from 'react';

export default class NavMenu extends React.Component{

  actionClick(evt) {
    let menu = document.querySelector('.nav-container');
    menu.classList.toggle('expand');
  }

  render(){
      //html to render for base nav
      return(
        <div className="nav-container">
          <div className="nav-list">
            <ul>
              <li className="nav-link"><span className="nav-icon icon-home"></span> HOME</li>
              <li className="nav-link"><span className="nav-icon icon-dashboard"></span> DASHBOARD</li>
              <li className="nav-link"><span className="nav-icon icon-services"></span> SERVICES</li>
            </ul>
          </div>
          <div className="nav-action">
            <div className="action-arrow" onClick={this.actionClick}></div>
          </div>
        </div>
      );
  }
}
