import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById("root")

//NO JSX
//const element = React.createElement(component,properties,childs)
//const element = React.createElement("h1",{className:"greetings"},"Hey there!")

//JSX
//const element = <h1 className="greetings">Hey there!</h1>
//ReactDOM.render(element,root);

//Inserción de Componente App

ReactDOM.render(<App />,root) //Importante el cierre.
