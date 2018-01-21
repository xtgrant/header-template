import React from 'react';
import UserDropdown from '../user/user-dropdown'

export default class Header extends React.Component{
    render(){
        //html to render for base header
        return(
          <div class="header-container">
            <div class="header-title">BRAND</div>
            <div class="header-action"><UserDropdown /></div>
          </div>
        );
    }
}
