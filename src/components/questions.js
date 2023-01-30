import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink,useNavigate } from 'react-router-dom';

export default function Questions(props) {
    const navigate = useNavigate()
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
        getPath(navigate)
       };
       
       const getPath = () => {
        if(formData.gender === "male" && formData.userAge === "young" && formData.goals === "active"){
            navigate("/beginning");
        } else if (formData.gender === "male" && formData.userAge === "middleAged" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "male" && formData.userAge === "older" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "male" && formData.userAge === "senior" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "male" && formData.userAge === "young" && formData.goals === "weight"){
            navigate("/beginning");
        }else if (formData.gender === "male" && formData.userAge === "middleAged" && formData.goals === "weight"){
            navigate("/beginning");
        }else if (formData.gender === "male" && formData.userAge === "older" && formData.goals === "weight"){
            navigate("/beginning");
        } else if(formData.gender === "male" && formData.userAge === "senior" && formData.goals === "weight"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "young" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "middleAged" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "older" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "senior" && formData.goals === "active"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "young" && formData.goals === "weight"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "middleAged" && formData.goals === "weight"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "older" && formData.goals === "weight"){
            navigate("/beginning");
        }else if (formData.gender === "female" && formData.userAge === "senior" && formData.goals === "weight"){
            navigate("/beginning");
        }
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

                    <button type="submit">Submit</button>
                    </Form>
                    <br/>

                    <p>Click here if you changed your mind!!</p>
                    <NavLink to="/exercise">
            <button>Skip Questionnaire</button>
            </NavLink>


                </>
    )
}