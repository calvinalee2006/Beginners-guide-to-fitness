import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';

function WeightTraining() {
    const navigate = useNavigate()
  return (
    <>
      <h1>Strength training </h1>
      <p>According to websters dictionary, strength training is a system of physical conditioning in which muscles are 
        exercised by being worked against an opposing force to increase strength.
      <br />
      When a person thinks about strength training they think about olympic weight lifters screaming and grunting to get that 
        one repetition of 800lbs off the floor. Or they think about a solid physic that is beach ready, no matter what time of year it is.
        <br />
        Those thoughts are possible and can be achieved! One thing people tend to forget, is that to reach those goals they take, time, effort, and 
        dedication and more importantly the will to start from the beginning. 
      </p>

      <h2>Types of strength training</h2>
      <ul>
      <li><b>Muscular hypertrophy</b> - This type of strength training uses moderate-to-heavy weights to stimulate muscle growth.</li>
      <li><b>Muscular endurance</b> - This refers to your muscles ability to sustain exercise for a period of time. Usually involves high reps
      using lightweight or bodyweight exercises</li>
      <li><b>Circuit Training</b> - During this form of full body conditioning, you cycle through various exercises with little to no rest between them.</li>
      <li><b>Maximum muscular strength</b> - This tye of exercise involves low reps (usually 2-6) and heavy weight to improve overall strength.</li>
      <li><b>Explosive power</b> This training combines power and speed to improve your power output.</li>
      </ul>
      <p>In our advice for beginners, it would be more beneficial to focus only on muscular endurance and circuit training at this point. When you are building your muscles, 
        you want to have that motivation and endurance to keep your body moving during your circuit training. 
      </p>

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
