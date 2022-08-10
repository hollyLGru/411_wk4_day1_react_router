import React from 'react'
import cars from '../cars.json'
// import { Link } from 'react-router-dom'
import { Routes, Route, useParams } from 'react-router-dom';

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const {carId} = useParams();
    
    function findCar() {
        return cars.id === carId
    }
    
    const carfilter = cars.find(findCar);
    
    console.log(carfilter)

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

    return (
    <div>
        {/* {carfilter.map((car, index) => {
            return(
                <h1>{car.Name}</h1>
                )
        })} */}

    </div>
    )
}

export default Car