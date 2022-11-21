import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function male() {
const [age, setAge] = useState();

const handleChange =(e) => {
    setAge(e.target.value);
}
    return (
        <>
        <header>Questions</header>
        <p>How old are you?</p>
        <form>
            <input type ="radio" value="young" id="young" onChange={handleChange} name="youngAge" />
            <label htmlFor="young">18-28</label>
        </form>
       
        </>
    )
}