import React from 'react'
import { NavLink } from 'react-router-dom'
import bumKicks from './stretchingImages/bumkicks.jpg'

const stretching = () => {
  return (
    <>
      <h1>Stretching</h1>

      <p>Stretching is a form of physical exercise in which a specific muscle or tendon (or muscle group)
        is deliberately flexed or stretched in order to improve muscles felt elasticity, flexibility and range
        of motion. </p>

        <p>For beginners, stretching seems like a waste of time, and tends to remind us of how horrible the 
            beginning of gym class was for us growing up. People skip stretching because they feel it is a waste
            of time and energy, when in reality it is a way from causing injury, helps the flexibility of your 
            muscles and gets your body ready for the challenge ahead. 
        </p>

        <h2>Types of stretches</h2>

        <p><b>Dynamic</b> stretches are typically done before you start your workout and involves active movements
        that help get your muscles ready for exercise.</p>
        <p>Some examples of dynamic stretches are:</p>
        <ul>
            <li>Bum kicks {/* Show illustrations and how to perform exercise*/}
            <img src={bumKicks} width={200} height ={200} alt= "Someone illustrating the bum kick exercise" /></li>
            <li>High knees {/* Show illustrations and how to perform exercise*/}</li>
            <li>Dynamic hang {/* Show illustrations and how to perform exercise*/}</li>
        </ul>

        <p><b>Static</b> stretches are preferred to be performed after your workout and involves stretches that 
        you hold in place for a period of time, without movement. This allows your muscles to loosen up, while
        increasing flexibility and range of motion.</p>
        <p>Some Examples of static stretches are:</p>
        <ul>
            <li>Cobra pose {/* Show illustrations and how to perform exercise*/}</li>
            <li>Head-to-knee-forward bend {/* Show illustrations and how to perform exercise*/}</li>
            <li>Overhead tricep extension {/* Show illustrations and how to perform exercise*/}</li>
        </ul>

        <h2>Benefits of stretching</h2>
        <p><b><i>ALWAYS</i></b> make time for stretching!! Trainers and health professionals will always break 
        down the importance of stretching such as:<br />
        - Greater flexibility and range of motion <br />
        - Less pain and stiffness <br />
        - Decrease stress * Authors Note: Anyway to decrease stress is Awesome!* <br />
        - Increased blood flow </p>

        <p>If you don't know where to start (or how to end), here are some videos and illustrations ou can use
            for examples {/* Find youtube videos and pictures, seperate dynamic and static stretches*/}
        </p>

        {/*Later Note: Add Authors static and dynamic stretch routine */}

        <NavLink to="/">
            <button>Previous</button>
            </NavLink>

        <NavLink to="/Warmup">
            <button>Next</button>
            </NavLink>

        
    </>
  )
}

export default stretching
