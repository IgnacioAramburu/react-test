import React from 'react'
import './App.css'
import './index.css'
import Food from './Food';
import logo from './logo.svg'

//const App = () => <h1>Hola Mundo desde mi archivo App.js!</h1>

//Restricciones de JSX
//1. Toda etiqueta debe cerrarse
//2. Los componentes deben devolver un oslo elemento padre
//3. Apoyarse de los fragments cuando necesito devolver 2 elements
//4. Fragment => <> hijos </>
//5. img siempre se cierra
//6. class => className
//7. for => htmlFor
//8. No if, else, whil


//Fragment para envolver contenido. <>


var foods = [
    {
        name:"Sushi Roll Table (60pcs)",
        price:5495.3,
        image:"sushi-roll-table.jpg"
    },
    {
        name:"Sushi Roll Table (45pcs)",
        price:4199.3,
        image:"sushi-roll-table.jpg"
    },
    {
        name:"Sushi Roll Table (30pcs)",
        price:2499,
        image:"sushi-roll-table.jpg"
    },
    {
        name:"Sushi Roll Table (26pcs)",
        price:2198,
        image:"sushi-roll-table.jpg"
    },
    {
        name:"Full 28 Salmon Table",
        price:2099,
        image:"sushi-roll-table.jpg"
    },
    {
        name:"3 Harumakis",
        price:499
    },
    {
        name:"Vegetables Itamae",
        price:1200
    },
    {
        name:"Sushi Roll Table (24pcs) + 4 harumakis",
        price:2499
    },
    {
        name:"Shrimp Itamae",
        price:1680
    },
    {
        name:"Grilled Salmon",
        price:1680
    },
    {
        name:"Salmon Itamae",
        price:1260
    },
    {
        name:"Chicken Itamae",
        price:798
    }


]

const App = () => (
    <>
        <div className="main-component" comment="unico elemento que va a exportarse, solo permite un elemento">
            <nav className="d-inline-flex bg-primary text-light w-100">
                <img id="app-logo" src={logo} width="86px" />
                <h1 className="mt-2">React Sushi</h1>
            </nav>
            <h5 className="text-center mt-2 w-100">These are my Foods:</h5>
            <div className="gallery container">
                {
                   foods.map(f => <Food name={f.name} price={f.price} image={f.image} />) 
                }
            </div>
        </div>
    </>
)

export default App;
