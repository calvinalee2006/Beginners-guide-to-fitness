import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

//purpose: To have the user see their specific exercises.

export default function personalExercise(props) {

    return (
        <>
         {props.data}
        </>
    );
}


// function workout(){

// }