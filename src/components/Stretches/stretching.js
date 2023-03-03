import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import bumKicks from './stretchingImages/bumkicks.jpg'
import highknee from './stretchingImages/highknee.jpg'
import deadhang from './stretchingImages/deadhang.jpg'
import cobra from './stretchingImages/cobra.jpg'
import headToKnee from './stretchingImages/headtokneeforwardbend.jpg'
import overhead from './stretchingImages/overheadtricepstretch.jpg'
import dynamicstretch from "./stretchingImages/dynamicstretch.jpg"
import pulse from "./stretchingImages/checkpulse.jpg"
import classStretch from './stretchingImages/stretching.jpg'

export default function Stretching()  {

  const navigate = useNavigate()
  return (
    <>
    <h1 className ="stretchHeading">Stretching</h1>

    <div className="container">
    <div className = "stretchIntro">
      <p className ="stretchPara"><b>Stretching</b> is a form of physical exercise in which a specific muscle or tendon (or muscle group)
        is deliberately flexed or stretched in order to improve muscles felt elasticity and achieve comfortable muscle tone. 
        The result is a feeling of increased muscle control, flexibility, and range of motion. Stretching is also used
        therapeutically to alleviate cramps and to improve function in daily activities by increasing range of motion.
         For beginners, stretching seems like a waste of time, and tends to remind us of how horrible the 
            beginning of gym class was for us growing up. People skip stretching because they feel it is a waste
            of time and energy, when in reality it is a way from causing injury, helps the flexibility of your 
            muscles and gets your body ready for the challenge ahead. 
        </p>
        <img src={classStretch} 
              width={400}
              height ={300}
              alt="Someone illustrating the bum kick stretch" 
                />
        </div> 
        <h2 className = "stretchType">Types of stretches</h2>

        <p className ="stretchPara">
        <b>Dynamic</b> stretches is a movement-based stretch aimed at increasing blood
        flow throughout the body while also loosening up the muscle fibers. Standard
        dynamic stretches typically involve slow and controlled active contraction
        of muscles. Dynamic stretches are typically done before you start your workout.<br />
       </p>
       <h3 className ="stretchName">Bum Kicks</h3>
        <div className = "example">
              <img src={bumKicks} 
              width={300}
              height ={315}
              alt="Someone illustrating the bum kick stretch" 
                /> 
              
            <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/oaq2UiWXof8" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullscreen>
            </iframe>
            </div>
            

            <h3 className ="stretchName">High knees</h3>
            <div className = "example"> 
              <img src ={highknee}
               width={300} 
               height={315} 
               alt="Someone illustrating the high knee stretch" />
               

               <iframe 
               width="560" 
               height="315" 
               src="https://www.youtube.com/embed/oDdkytliOqE" 
               title="YouTube video player"  
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullscreen>
               </iframe>
               </div>
               
            <h3 className ="stretchName">Dynamic hang</h3> 
            <div className = "example"> 
              <img 
              src ={deadhang} 
              width={300} 
              height={315} 
              alt="Someone illustrating the dynamic hang stretch" 
              />
              
              <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/3CEmHJXbNpc" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen>
                </iframe>
                </div>
                <br />
        <p className ="stretchPara">
        <b>Static</b> stretches brings the joint to its end of motion and you hold your
        ligament at a specific point using external force. This allows your muscles to 
        loosen up, while increasing flexibility and range of motion. 
        Static stretches are recommended to be performed after your workout.</p>
        
            <h3 className ="stretchName">Cobra pose</h3>  
            <div className = "example">
            <img 
            src ={cobra} 
            width={300} 
            height={315} 
            alt="Someone illustrating the cobra stretch" />
            
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/zgvolE4NAH0" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullscreen>
            </iframe>
            </div>
            
            <h3 className ="stretchName">Head-to-knee-forward bend</h3>
            <div className = "example">
              <img 
              src ={headToKnee} 
              width={300} 
              height={315} 
              alt="Someone illustrating the head-to-knee-forward bend stretch" 
              /> 
              <iframe
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/Z3xK3trnpfw" 
              title="YouTube video player"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullscreen>
              </iframe>
              </div>
          
            <h3 className ="stretchName">Overhead tricep extension</h3> 
            <div className = "example">
              <img src ={overhead}
              width={300} 
              height={315}
              alt="Someone illustrating the over-head-to-tricep extension stretch" />
              
              <iframe 
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zzvDO56B0HE" 
              title="YouTube video player"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen></iframe>
              </div>

        <p className ="stretchPara">If you have a problem figuring out a Dynamic stretch that works for you, here are some stretch routines
          that will help you get started. At some point during your routine, you will want to make some changes and 
          maybe add something to your routine, which is completely normal! For now I would like to show you a full body routine that 
          would work for any beginner.  {/* Find youtube videos and pictures, seperate dynamic and static stretches*/}
        </p>

        <h3 className ="stretchName">Dynamic Stretch examples</h3>
<div className ="example">
        <img src={dynamicstretch} 
              width={600}
              height ={400}
              alt="A dynamic stretch chart" 
                /> 
  
        <iframe
        width="500"
        height="315"
        src="https://www.youtube.com/embed/pPlFSqXnbls"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen>          
        </iframe>
        </div>

        

        <h3 className ="stretchName">Static Stretch examples</h3>
        <p className ="stretchPara">Remember, static stretches are the main type of stretching that was performed during 
          gym class in school, the main goal is loosen up and feel a bit better <b>AFTER</b> you
          have performed your workout.
        </p>

        <iframe
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/aZ1PzhThqcU" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullscreen>
         </iframe>
        {/*Later Note: Add Authors static and dynamic stretch routine */}

        <h2 className ="stretchName">Benefits of stretching</h2>

        <p className ="stretchPara"><b><i>ALWAYS</i></b> make time for stretching!! Trainers and health professionals will always break 
        down the importance of stretching such as:<br />
        - Greater flexibility and range of motion <br />
        - Less pain and stiffness <br />
        - Decrease stress * Authors Note: Anyway to decrease stress is Awesome!* <br />
        - Increased blood flow </p>

        <h3 className="authorsAdvice">Authors Advice!</h3>

        <p className ="authorsParagraph">So from my experience exercising over the years, starting off with Dynamic stretches accomplishes 
          the listed goals and makes you feel better, but I always needed something more to warm me up. When I had achieved a 
          firmer grasp on a workout routine I added a small mini routine before I got the the main course. This routine was non-stop
          and I felt the blood really pumping. 
          My suggestion is once you get a great handle of what is works best for you, try and add this to the end of your dynamic stretch routine and 
          before your workout.
        </p>

        <div className ="stretchPara">
          <div className="example">
        <ul>
          <li>Jumping jacks: 30 reps</li>
          <li>Push-ups: 30reps</li>
          <li>sit-ups or crunches: 30 reps </li>
          <li>pull-ups: 30 reps</li>
          <li> 5-10 min cool down</li>
        </ul>
        <img src={pulse} 
              width={300}
              height ={200}
              alt="checking their pulse" 
                />
                </div>
        </div>
      
        <button className="btn-left" onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="cardio">
            <button className="btn-right">Next</button>
            </NavLink>

            </div>
    </>
  )
}


