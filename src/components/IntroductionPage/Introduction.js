import React from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Introduction() {
    return (
      <>
        <h1 className="introHeading">Beginners guide to fitness</h1>
        <div className = "introContainer">
          <p>With the hussle and bussle of life, fitting fitness into your daily life is a difficult task. But what makes starting more difficult 
            is knowing where to begin. Having an idea of what to do, makes the journey easier and sometimes faster. 
          </p>
          <p>Here we would like to help you by giving you information and health tips you can use to starting adding some exercises and health tips you can 
            use to start adding fitness into your lifestyle
          </p>
        </div>
      
    
          <NavLink to = '/stretching'>
            <button className="btn-right">Next</button>
            </NavLink>
      </>
    )
  }

