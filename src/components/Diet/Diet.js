import React, {useState} from 'react'
import ReactModal from 'react-modal'
import {NavLink,useNavigate} from 'react-router-dom';


export default function Diet() {
     const navigate = useNavigate()
     const [isDoorOpen, setIsDoorOpen] = useState(false)
     const [isMilkModalOpen,setIsMilkModalOpen] = useState(false)
     const [isBowlModalOpen, setIsBowlModalOpen] = useState(false)
     const [isCarrotModalOpen, setIsCarrotModalOpen] = useState(false)
     const [isOrangeModalOpen, setIsOrangeModalOpen] = useState(false)

     const handleFridgeClick = () => {
      setIsDoorOpen(!isDoorOpen)
     }
 
  return (
    <>
    <h1 className="healthyHeading">Eating Healthy</h1>

    <div>
      <div className = "fridgeContainer">
      <div className ="background">

        <div className = "InsideFridge">
          <div className = "firstRungFoods"> 

        <button 
        onClick={() => setIsMilkModalOpen(true)} 
        className = "milk">
          <p>MILK</p>
        </button>
             
            <div className ="cerealBowl">
            <div className="spoon"></div>
            <div className = "cereal"></div>
            <button
            onClick={() => setIsBowlModalOpen(true)}
             className= "bowl">
             </button>
              </div>
              
              {/* Add a carrot stem */}
              <button
              onClick={() =>setIsCarrotModalOpen(true)} 
              className= "carrot">
              </button>

              
                    
          <div className="orange"></div>
          </div>

          <div className = "firstRung"></div>
          
        </div>
      <div className={`fridge ${isDoorOpen ? 'open' : ''}`}>
        <p>{isDoorOpen ? '' : 'HealthyFridge'}</p>
       <div className ="handle" onClick={handleFridgeClick}></div>
       <div className ="fridgeContents">
       
       </div>
        </div>
    </div>
    <div className = "floor"></div>
    </div>
		</div>

    <ReactModal
     isOpen={isMilkModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsMilkModalOpen(false)}>
      <button onClick={() => setIsMilkModalOpen(false)}>Close</button>
      {/* Dairy information and picture */}
    </ReactModal>

    <ReactModal
     isOpen={isBowlModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsBowlModalOpen(false)}>
      <button onClick={() => setIsBowlModalOpen(false)}>Close</button>
      {/* Vegetables information and picture */}
    </ReactModal>

    <ReactModal
     isOpen={isCarrotModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsCarrotModalOpen(false)}>
      <button onClick={() => setIsCarrotModalOpen(false)}>Close</button>
      {/* Vegetables information and picture */}
    </ReactModal>




    <div className ="healthyContainer">
    <p>When you first start exercising, eating healthy is going to be one of the BIGGEST
    concerns you are going to worry about. This topic alone scares so many beginners that
    they give up their commitment to health and succumb to cravings. The fast pace of daily
    life does not seem to help with the decisions of a persons eating habits either.</p>

    <p>Life moves fast and it always seems like the day has ended before it even began. 
    To keep up with the passing of times people tend to eat on the fly or plan to pick up 
    something from a fast food place on the way to their destination. The fast-food choice 
    is not the best option, even though it looks to be the fastest.  Whether people want to
    hear it or not, this option is not healthy due to your food not settling in your stomach, 
    the way you are consuming your food and what they are consuming. </p>

    <p>Consider your body to be the vehicle of your dreams. You want this vehicle to last a 
    lifetime and be able to keep up with traffic anytime you hit the road. You realize you are
    running low on fuel (getting hungry) and you pull up to your local gas station. You only have
    two options. </p>
    <ul>
        <li>Option1. This fuel costs $1.25 but it is 90% H2O and 10% fuel.</li>
        <li>Option 2. This fuel costs $2.00 but it is 90% fuel and 10%H2O. </li>
    </ul>
    <p>If you chose option one you saved some money now, but that fuel you just put in is going to hurt your 
        vehicle in more ways than one. That fuel will burn quickly, causing you to need more gas and spend more
        money. Your injectors will get clogged because that fuel is only there to dissolve faster, it is not trying
        to clean your engine or consider your fuel efficiency. If you chose option two, you might have spent more money,
        but that fuel cleans your injectors, improves efficiency, and helps your vehicle get from zero to eighty in seven
        seconds. Best part, you will end up spending less in the long run! <br />

        To shorten things up, if you have good input, you will get a fantastic output!
        If you have a bad input, then you will have a horrible output
    </p>
      <div>
        <button className="btn-left" onClick ={() => navigate(-1)}>Previous</button>
        <NavLink to="/">
            <button className="btn-right">Next</button>
            </NavLink>
            </div>
            </div>
    </>
  )
}


