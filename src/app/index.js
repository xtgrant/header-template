import React from "react";
import { render } from "react-dom";
import App from '../components/app';

render(<App />, document.getElementById('app'));

console.log('HEADER TEMPLATE WORKS');
let message = 'Hello from ES6';
console.log(message);
