import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import DummbellPress from "./WeightTrainingImages/dumbbellPress.jpg"
 export default function WeightTraining() {
    const navigate = useNavigate()
  return (
    <>
    
      <h1 className="strengthHeading">Strength training </h1>

      <div className="dummbellPressPic">
        <img  src={DummbellPress} alt="Young man doing dumbbell press"/>
      </div>
      
      <div className ="strengthContainer">
        <div className="firstStrengthP">
      <p>According to websters dictionary, strength training is a system of physical conditioning in which muscles are 
        exercised by being worked against an opposing force to increase strength. When a person thinks about strength training they think about olympic weight lifters screaming and grunting to get that 
        one repetition of 800lbs off the floor. Or they think about a solid physic that is beach ready, no matter what time of year it is.
        <br /><br />
        Those thoughts are possible and can be achieved! One thing people tend to forget, is that to reach those goals they take, time, effort, and 
        dedication and more importantly the will to start from the beginning. 
      </p>
      </div>

      <h2 className ="typesOfStrength">Types of strength training</h2>
 
      <ul>
      <li><b>Muscular hypertrophy</b> - This type of strength training uses moderate-to-heavy weights to stimulate muscle growth.</li>
      <li><b>Muscular endurance</b> - This refers to your muscles ability to sustain exercise for a period of time. Usually involves high reps
      using lightweight or bodyweight exercises</li>
      <li><b>Circuit Training</b> - During this form of full body conditioning, you cycle through various exercises with little to no rest between them.</li>
      <li><b>Maximum muscular strength</b> - This tye of exercise involves low reps (usually 2-6) and heavy weight to improve overall strength.</li>
      <li><b>Explosive power</b> This training combines power and speed to improve your power output.</li>
      </ul>
      <p>Some advice for beginners, it would be more beneficial to focus only on muscular endurance and circuit training at this point. When you are building your muscles, 
        you want to have that motivation and endurance to keep your body moving during any type of training. 
      </p>

      <h2 className ="startForBegin">Best start for beginners</h2>
      <p>A lot of people commonly think that a person has to have a full gym to really get the muscle growth process going, when in reality body weight workouts work just as well!!</p>
      <ul>
        <li>Push-ups</li>
        <li>Squats</li>
        <li>Planks</li>
        <li>Pull-ups</li>
        <li>Lunges</li>
        <li>Crunches</li>
        <li>Sit-ups</li>
      </ul>
      <p>All of the workouts in the example are great to use in a circuit</p>
      <p>A example of a circuit would be something like</p>
      <p>5 rounds</p>
      <ul>
        <li>20 push-ups</li>
        <li>30 squats</li>
        <li>20 crunches</li>
        <li>30 tricep pushes</li>
        <li> 1 minute plank</li>
      </ul>
      <p>3-5 minute resting periods between each round</p>
      <p>We are not against using equipment for your workouts! But, we feel that if you want a slow comfortable start into weight training, we would
        highly recommend starting with some bodyweight training. But if you are interested in spending some money (either getting a gym membership or using 
        weights at home), we recommend investing in some fre weights such as dumbbells or kettlebells and if you have the room to use a barbell, that would also be 
        a beneficial investment. 
      </p>
      <p>Using equipment widens your variety of workouts and gives you the first look at muscular hypertrophy.</p>
      <p>A good example of circuit training using weights would be:</p>
      <p>5 rounds 3-5 minute rest</p>
      <ul>
        <li>10 overhead squats</li>
        <li>15 dumbbell Curls each arm</li>
        <li>20 kettlebell swings</li>
        <li>25 mountain climbers</li>
        <li>1 minute plank</li>
      </ul>

      <h2 className="startForBegin" >Advantages of strength training</h2>
      <ol>
        <li>Makes you stronger</li>
        <li>Burs calories efficiently</li>
        <li>Decreases Abdominal fat</li>
        <li>Gives you a leaner look</li>
        <li>Decreases your risk of falls</li>
        <li>Lowers your risk of injury</li>
        <li>Improves overall health</li>
        <li>Promotes greater flexibility</li>
        <li>Boosts self-esteem</li>
        <li>Makes bones stronger</li>
        <li>Improves brain health</li>
        <li>Improves sex drive</li>
      </ol>

        <div>
        <button className="btn-left" onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="Diet">
            <button className="btn-right">Next</button>
            </NavLink>
            </div>
            </div>
    </>
  )
}


