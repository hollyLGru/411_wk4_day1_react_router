
import React from 'react'
import cars from '../cars.json'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const carId = useParams().id;
    const findCar = cars.find((c) => parseInt(c.id) === carId);

    //check out link below 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

    return (
    <div>
        {findCar.map((car, index) => {
            return (
                <h1>{car.index} </h1> 
            )
            })}
    </div>
    )
}

export default Car