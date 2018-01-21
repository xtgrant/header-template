import React from 'react';
import UserDropdown from '../user/user-dropdown'

export default class Header extends React.Component{
    render(){
        //html to render for base header
        return(
          <div className="header-container">
            <div className="header-title">BRAND</div>
            <div className="header-action"><UserDropdown /></div>
          </div>
        );
    }
}
