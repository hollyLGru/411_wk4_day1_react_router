import React from 'react'
import cars from '../cars.json'
import { Link } from 'react-router-dom'
import { Routes, Route, useParams } from 'react-router-dom';

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const carId = useParams().carId

    return (
        <h1>A specific car</h1>
    )
}

export default Car