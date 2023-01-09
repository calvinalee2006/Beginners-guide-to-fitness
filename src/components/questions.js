import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';


export default function Questions() {
    
    const[formData, setFormData] = useState({
        gender: "", 
        userAge: "", 
        goals:"", 
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
       setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value 
        };
       });
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
       };

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
                checked={formData.gender === "male"}
                onChange={handleChange}
                />
                <label htmlFor="male"> Male </label>
                <br />

                <input 
                type='radio'
                id='female'
                name='gender'
                value = 'female' 
                checked={formData.gender === "female"}
                onChange={handleChange}
                />
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
                        checked={formData.userAge === "young"}
                        onChange={handleChange}
                        />
                        <label htmlFor="young"> 18-28 </label>
                        <br />

                        <input 
                        type='radio'
                        id="middleAged"
                        name="userAge"
                        value="middleAged"
                        checked={formData.userAge === "middleAged"}
                        onChange={handleChange}
                        />
                        <label htmlFor="middleAged"> 29-39 </label>
                        <br />

                        <input 
                        type='radio'
                        id="older"
                        name="userAge"
                        value="older"
                        checked={formData.userAge === "older"}
                        onChange={handleChange}
                        />
                        <label htmlFor="older"> 40-50 </label>
                        <br />

                        <input 
                        type='radio'
                        id="senior"
                        name="userAge"
                        value="senior"
                        checked={formData.userAge === "senior"}
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
                        checked = {formData.goals === "active"}
                        onChange={handleChange}
                        />
                        <label htmlFor='active'>To stay active!</label>
                        <br />

                        <input
                        type="radio"
                        id="weight"
                        name="goals"
                        value= "weight"
                        checked = {formData.goals === "weight"}
                        onChange={handleChange}
                        />
                        <label htmlFor="weight"> To loose weight</label>
                    </fieldset>
                    <br />

                    <button type='submit'>Submit</button>
                    </Form>


                </>
    )
}