import React from 'react';
import Header from './header/header';
import NavMenu from './nav/nav-menu';
export default class App extends React.Component{
    render(){
        //html to render for base app
        return(
          <div className="bar-container">
            <div className="bar-top"><Header /></div>
            <div className="bar-left"><NavMenu /></div>
          </div>
        );
    }
}
