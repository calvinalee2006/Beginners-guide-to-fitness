import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';

//Buttons show clicked in console but not on page, continue investigation. Css issue?

export default function male() {
    const[formData, setFormData] = useState(
        {gender: "", userAge: "", goals:"", motivate: ""
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

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
       }

    return (
        <>
        <header>Questions</header>

<Form onSubmit={handleSubmit}>

    <fieldset>
    <legend>What was your gender at birth</legend>
        <input 
        type='radio'
        id = 'male'
        name = 'gender' 
        value = 'male'
        checked={formData.male === "male"}
        onChange={handleChange}/>
        <label htmlFor="male"> Male </label>
                <br />

        <input 
        type='radio'
        id='female'
        name='gender'
        value = 'female' 
        checked={formData.female === "female"}
        onChange={handleChange}/>
        <label htmlFor="female"> Female </label>
                <br />
    </fieldset>
            <fieldset>
                <legend>How old are you?</legend>

                <input 
                type='radio'
                id="young"
                name="userAge"
                value="young"
                checked={formData.young === "young"}
                onChange={handleChange}
                />
                <label htmlFor="young"> 18-28 </label>
                <br />

                <input 
                type='radio'
                id="middleAged"
                name="userAge"
                value="middleAged"
                checked={formData.middleAged === "middleAged"}
                onChange={handleChange}
                />
                <label htmlFor="middleAged"> 29-39 </label>
                <br />

                <input 
                type='radio'
                id="older"
                name="userAge"
                value="older"
                checked={formData.older === "older"}
                onChange={handleChange}
                />
                <label htmlFor="older"> 40-50 </label>
                <br />

                <input 
                type='radio'
                id="senior"
                name="userAge"
                value="senior"
                checked={formData.senior === "senior"}
                onChange={handleChange}
                />
                <label htmlFor="senior"> 51+ </label>
                <br />
            </fieldset>
            <br />

            <fieldset>
                <legend>What kind of fitness would you prefer?</legend>

                <input 
                type="radio"
                id="active"
                name="goals"
                value="active"
                checked = {formData.active === "active"}
                onChange={handleChange}
                />
                <label htmlFor='active'>To stay active!</label>
                <br />

                <input
                type="radio"
                id="weight"
                name="goals"
                value= "weight"
                checked = {formData.weight === "weight"}
                onChange={handleChange}
                />
                <label htmlFor="weight"> To loose weight</label>
            </fieldset>
            <br />

            <fieldset>
                <legend>What would help motivate you when exercising?</legend>

                <input 
                type ="radio"
                id="music"
                name = "motivate"
                value="music"
                checked = {formData.music === 'music'}
                onChange={handleChange}
                />
                <label htmlFor = "music"> Music</label>
                <br />

                <input
                type ="radio"
                id="speeches"
                name ="motivate"
                value ="speeches"
                checked = {formData.speeches === "speeches"}
                onChange = {handleChange}
                />
                <label htmlFor = "speeches">Motivational speeches</label>
                <br />

                <input
                type = "radio"
                id="videos"
                name ="motivate"
                value ="videos"
                checked ={formData.videos === "videos"}
                onChange = {handleChange}
                />
                <label htmlFor = "videos"> Success Videos</label>
            </fieldset>
            <br />
            <br />
            <button>Submit</button>
            </Form>


        </>
    )
}