import React from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function sex() {
    return (
        <>
        <header>Gender</header>
        <p>What was your gender at birth?</p>
        <NavLink to="/male">
            <button>Male</button>
            </NavLink>
            <NavLink to="/female">
            <button>Female</button>
            </NavLink>
        </>
    )
}