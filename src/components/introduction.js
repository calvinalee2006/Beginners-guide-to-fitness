import React from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function introduction() {
    return (
      <>
      <header>
        Get Moving!!
      </header>
      <p>In these times it is important to keep mentally and physically healthy. But with 
        life always keeping you on go, it is very easy forget your personal health. 
        The age old saying of "I don't have time" becomes a constant saying in our daily dictionary, 
        and in reality saying those words can be depressing. </p>
        <p>This app is to get you moving for just 30 minutes a day! Minimum cardio or 
          small at home exercises to do to make sure you are keeping healthy and keeping your heartbeat up, 
          at the same time focusing clearing your mind of stress for the days ahead! </p>
          <NavLink to="/questions">
            <button>Next</button>
            </NavLink>
    
      </>
    )
  }

