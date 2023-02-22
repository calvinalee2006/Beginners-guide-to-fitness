import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';

function WeightTraining() {
    const navigate = useNavigate()
  return (
    <>
      <h1>Strength training </h1>
      <p>Strength </p>
      {/* <p>Weight lifting generally refers to physical exercise and sports in which people lift weights, 
        often in the form of dumbbells and barbells. People engage in weightlifting for a variety of different
        reasons. These can include: </p>
        <ul>
            <li>Developing physical strength</li>
            <li>Promoting health and fitness</li>
            <li>Weightlifting competitions</li>
            <li>developing a muscular and aesthetic physic</li>
        </ul>

        <p>For now the main goal we would like you to focus on is using weight lifting to improve your
            health and fitness. 
        </p> */}

        <p>When you feel comfortable getting to this point in your health journey, you may want to rush to your
            nearest Golds gym {/*Add hyperlink to golds gym */}, get yourself a membership and find the person who 
            you think is in the "perfect" physical physic. Once you find this person you start copying everything they do, from 
            their actions to the amount of weight they use. This is a recipe for disaster and they only person gaining 
            anything is hospital. 
        </p>
        
        <h2>Authors Motivational story!</h2>
        <p></p>

        <div>
        <button onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="/">
            <button>Next</button>
            </NavLink>
            </div>
    </>
  )
}

export default WeightTraining
