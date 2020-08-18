import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//create a fetch call for the RESTful endpoint https://polar-beach-08187.herokuapp.com/api/pets/2
(async()=>{
  const url = 'https://polar-beach-08187.herokuapp.com/api/pets/2';
  const response = await fetch(url);
  if(response.ok){
    const pet = await response.json();
    console.log(pet)
  
      ReactDOM.render( 
        <React.StrictMode>
          <App pet ={pet}/> 
        </React.StrictMode>,
        document.getElementById('root')
        );
      }
  })();
  
  /*to pass that data into your React components, you will pass it as a property. 
  You have to pass it on the element getting rendered.
  you will pass the pet data in as an attribute of the App 
  component with curly braces to indicate to JSX that it is a data value and not a string.
  */