import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function sex() {
    return (
        <>
        <header>Gender</header>
        <p>What was your gender at birth?</p>
        <NavLink to="">
            <button>Male</button>
            </NavLink>
            <NavLink to="">
            <button>Female</button>
            </NavLink>
        </>
    )
}