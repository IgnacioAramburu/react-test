import React from 'react'

const Food = ({name,price,image}) => (
    <>
        <div className="food-box card bg-secondary rounded text-light">
            <img className="card-image rounded" src={"../src/imgs/"} alt="food"/>
            <div className="card-food-text text-center">
                <h5 className="food-text">{name}</h5>
            </div>
            <div className="card-price text-center">
                ${price}ARS
            </div>
        </div>
    </>
)

export default Food
