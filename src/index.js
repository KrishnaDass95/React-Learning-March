import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// the components are coming from App
import App from './App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
// inside the render function always have a parent div to wrap other components inside
// MyComponent and MySecondComponent is a jsx element
root.render(<App />); // its like root.innerHTML


// jsx -> combination of js and HTML -> 
// JSX is when you return html code through js functions
// returning html through a jsx function is called jsx

function MyComponent() { // components are pascal case
  return (
    <div>
      <h1>Hi, Krishna!</h1>
    </div>
  )
}
function MySecondComponent(){
  return (
    <h3>Hello, world!</h3>
  )
}
