import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function male() {
    const[formData, setFormData] = useState(
        {firstName:"", lastName:"", email:"", comments:"", isFriendly: true
            }
        )

    function handleChange(event){
        const{name, value, type, checked} = event.target
       setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value 
        }
       })
    }

    return (
        <>
        <header>Questions</header>
        <p>How old are you?</p>

        <p>Testing 123</p>
        <form>
            <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            />

            <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange} 
            name="lastName"
            value={formData.lastName}
            />

            <input
            type="text"
            placeholder="e-mail"
            onChange={handleChange} 
            name="e-mail"
            value={formData.email}
            />

            <textarea
            placeholder='comments'
            onChange={handleChange}
            name="comments"
            value={formData.comments} />

            <input 
            type="checkbox"
            id="isFriendly" 
            onChange={handleChange}
            checked={"isFriendly"}
            name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
        </form>
        </>
    )
}