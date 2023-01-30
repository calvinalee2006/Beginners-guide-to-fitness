import React from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BeforeBeginning() {
    return (
        <>
        <p>Before beginning, would you mind entering some info about yourself? This information
            is used to help understand what kind of exercises suit you and lets the app know how 
            it can fit the 30 min sessions in your day! 
        </p>
        <p>If you would like to skip the questionnaire and dive right into exercising, so you 
            can personally select what you want as your exercise, that is also an excellent
            choice! </p>
            <NavLink to="/questions">
            <button>Take Questionnaire</button>
            </NavLink>
            <NavLink  to ="/noSurvey">
            <button>Skip Questionnaire</button>
            </NavLink>
        </>
    )
}