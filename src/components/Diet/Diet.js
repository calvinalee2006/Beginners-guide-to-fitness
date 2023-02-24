import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';

function Diet() {
    const navigate = useNavigate()
  return (
    <>
      <div>
        <h1> Eating Healthy</h1>
        <button onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="/">
            <button>Next</button>
            </NavLink>
            </div>
    </>
  )
}

export default Diet
