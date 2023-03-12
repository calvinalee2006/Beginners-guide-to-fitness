import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import DummbellPress from "./WeightTrainingImages/dumbbellPress.jpg"
import Plank from "./WeightTrainingImages/Plank.jpg"


export default function WeightTraining() {
    const navigate = useNavigate()
  return (
    <>
      <h1 className="strengthHeading">Strength training </h1>

      <div className="dummbellPressPic">
        <img src={DummbellPress} alt="Young man doing dumbbell press"/>
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
      <p>A lot of people commonly think that a person has to have a full gym to really get the muscle growth process going, when in reality calisthenics (body weight workouts) work just as well!
        Calisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing etc. These exercises are often performed 
        rhythmically and with minimal equipment. Some examples types of these exercises are:<br />
        <br />
        Click the name of the exercise to learn more about it and how to have proper form when performing the exercise.
      </p>
     
     <div className ="beginnerBody">
        <div>
          <a href ="https://youtu.be/0GsVJsS6474"><p>Push-ups</p></a>
          <img src={require("./WeightTrainingImages/properPushUp.gif")} alt="Gif of a man performing a push-up using the correct form" width={200} height={200} />
          </div>
        <div>
          <a href ="https://youtu.be/z3XQ7T4-abQ"><p>Squats</p></a>
          <img src={require("./WeightTrainingImages/squat.gif")} alt="Gif example of a an performing a squat exercise" width={200} height={200} />
          </div>
        <div>
          <a href="https://youtu.be/f_O-CzKSSY8"><p>Planks</p></a>
          <img src={Plank} alt="Diagram of a woman performing the plank exercise"  width={200} height={200}/>
          </div>
        <div>
          <a href ="https://youtube.com/shorts/GSGdj-2B0hM?feature=share"><p>Pull-ups</p></a>
          <img src={require("./WeightTrainingImages/pull-ups.gif")} alt="gif of someone performing a pull-up" width={200} height={200} />
          </div>
        <div>
          <a href ="https://youtu.be/fO3dKSQayfg"><p>Lunges</p></a>
          <img src={require("./WeightTrainingImages/lunges.gif")} alt ="gif of a man performing lunges" width ={200} height={200} />
          </div>
        <div>
          <a href="https://youtube.com/shorts/VZnY9KoO3Ng?feature=share"><p>Sit-ups</p></a>
        <img src={require("./WeightTrainingImages/sit-ups.gif")} alt="gif of a man performing sit-ups" width={200} height={200} />
        </div>
        </div>
      
      <p>
        All of the workouts in the example are great to use in a circuit workouts. Here are a few author made examples of circuit workouts that can be done at home:
      </p>

      <div className="circuitExamples">
        <div className="circuitEx1">
      <p>3 rounds <br /> 
      3-5 minute resting periods</p>
      <ul>
        <li>20 push-ups</li>
        <li>30 squats</li>
        <li>20 sit-ups</li>
        <li>30 lunges</li>
        <li>1 minute plank</li>
      </ul> 
       </div >

      <div className="circuitEx2">
      <p>3 Rounds <br />
      3-5 minute resting periods
      </p>
       <ul>
        <li>25 Jumping Jacks</li>
        <li><a href="https://youtu.be/IrvvfLDyr7k" >25 Tricep push-up</a></li>
        <li>Plank till failure</li>
        <li><a href ="https://youtu.be/zT-9L3CEcmk"> 100 Mountain climbers (1 per leg)</a></li>
        <li><a href = "https://youtu.be/qLBImHhCXSw">10 Burpees</a></li>
       </ul>
       </div>

      <div className="circuitEx3">
       <p>10 Rounds <br />
       1 minute resting periods </p>
       <ul>
        <li><a href = "https://youtu.be/qLBImHhCXSw">10 Burpees</a></li>
        <li>10 Sit-Ups</li>
        <li>10 Push-Ups</li>
        <li>10 Squats</li>
        <li><a href ="https://youtu.be/zT-9L3CEcmk"> 100 Mountain climbers (1 per leg)</a></li>
       </ul>
          </div>
       </div>
       <br />
      <p>We are not against using equipment for your workouts! But, we feel that if you want a slow comfortable start into weight training, we would
        highly recommend starting with some calisthenics. But if you are interested in spending some money, we recommend investing in some free weights
        such as dumbbells or kettlebells and if you have the room to use a barbell, that would also be 
        a beneficial investment. If you don't have the room or you feel the need to invest in free weights, you can also join your local Gym or health club! 
      </p>
      <p>Using equipment widens your variety of workouts and gives you the first look at muscular hypertrophy.</p>
      
 <div className ="beginnerBody">
        <div>
          <a href ="https://youtu.be/3OZ2MT_5r3Q"><p>Dumbbell Curls</p></a>
          <img src={require("./WeightTrainingImages/dumbbell-curl.gif")} alt="Gif of a man performing dumbbell curls using the correct form" width={200} height={200} />
          </div>
        <div>
          <a href ="https://youtu.be/a5zhnubunoE"><p>Deadlift</p></a>
          <img src={require("./WeightTrainingImages/deadlift.gif")} alt="Gif deadlift using proper form" width={200} height={200} />
          </div>
        <div>
          <a href="https://youtu.be/RsobeWfbBcY"><p>Bench Press</p></a>
          <img src={require("./WeightTrainingImages/Bench-Press.gif")} alt="Diagram a man performing the bench press"  width={200} height={200}/>
          </div>
        <div>
          <a href ="https://youtu.be/sxeY7kMYhLc"><p>Barbell front raise</p></a>
          <img src={require("./WeightTrainingImages/barbellFrontRaise.gif")} alt="gif of someone performing a barbell front raise" width={200} height={200} />
          </div>
        <div>
          <a href ="https://youtu.be/PgpQ4-jHiq4"><p>Dumbbell Row</p></a>
          <img src={require("./WeightTrainingImages/dumbbellRow.gif")} alt ="gif of a man dumbbell Row" width ={200} height={200} />
          </div>
        <div>
          <a href="https://youtu.be/xu4ahA2VJuo"><p>Dumbbell lunges</p></a>
        <img src={require("./WeightTrainingImages/Dumbbell-Lunge.gif")} alt="gif of a woman performing dumbbell lunges" width={200} height={200} />
        </div>
        </div>

      <p>A good example of circuit training using weights and calisthenics would be:<br />
      Click on the exercise to learn more!</p>

    <div className="circuitExamples">
      <div className="circuitEx4">
      <p>5 Rounds<br />
      3-5 Minute Rest</p>
      <ul>
        <li>10 Deadlifts</li>
        <li>15 Pull-ups</li>
        <li><a href ="https://youtu.be/rHzi_n72pNI">20 Kettlebell Swings</a></li>
        <li><a href ="https://youtu.be/zT-9L3CEcmk"> 100 Mountain climbers (1 per leg)</a></li>
        <li>1 Minute Plank</li>
      </ul>
      </div>

    <div className="circuitEx5">
      <p>3 Rounds<br />
      3-5 Minute Rest</p>
      <ul>
        <li>100 Jump Rope</li>
        <li><a href ="https://youtu.be/KzYlXWXVw3o">15 Barbell Upright Rows</a></li>
        <li><a href="https://youtu.be/ArZXCfbjxWs">20 Knee-tuck Jumps</a></li>
        <li>25 Jumping Jacks</li>
      </ul>
      </div>

      <div className="circuitEx6">
      <p>5 Rounds<br />
      3-5 Minute Rest</p>
      <ul>
        <li><a href ="https://youtu.be/MJao9o7ROs0">40 Dumbbell Front Squats</a></li>
        <li><a href="https://youtu.be/3OZ2MT_5r3Q">15 Dumbbell Curls (Each arm)</a></li>
        <li><a href ="https://youtu.be/rHzi_n72pNI">20 Kettlebell Swings</a></li>
        <li><a href ="https://youtu.be/zT-9L3CEcmk"> 100 Mountain climbers (1 per leg)</a></li>
        <li>1 Minute Plank</li>
      </ul>
      </div>
      </div>

      <h2 className="startForBegin" >Advantages of strength training</h2>
      
      <ol>
        <li>Makes you stronger</li>
        <li>Burns calories efficiently</li>
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

          {/*add something */}
        <button className="btn-left" onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="Diet">
            <button className="btn-right">Next</button>
            </NavLink>
            </div>
            </div>
    </>
  )
}


