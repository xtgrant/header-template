import React from 'react';
import Header from './header/header';
import NavMenu from './nav/nav-menu';
export default class App extends React.Component{
    render(){
        //html to render for base app
        return(
          <div class="bar-container">
            <div class="bar-top"><Header /></div>
            <div class="bar-left"><NavMenu /></div>
          </div>
        );
    }
}
