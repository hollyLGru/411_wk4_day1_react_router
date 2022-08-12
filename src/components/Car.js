
import React from 'react';
import cars from "../cars.json";
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Container, Paper, Chip } from "@mui/material";

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const carId = useParams().id;
    console.log(typeof carId)
    const findCar = cars.find((car) => car.id === parseInt(carId));
    console.log(typeof cars[0].id)
    
    console.log(findCar)
    //check out link below 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

    return (
        <Container maxWidth="sm" className="car-container">
        <Paper className="car-paper">
          <h1>{findCar.Name}</h1>
          {Object.keys(findCar).map((key, idx) => {
            return <Chip key={idx} label={`${key}: ${findCar[key]}`}></Chip>
          })}
        </Paper>
      </Container>
    )
}

export default Car