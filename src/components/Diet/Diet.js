import React, {useState} from 'react'
import ReactModal from 'react-modal'
import {NavLink,useNavigate} from 'react-router-dom';
import MilkCarton from './DietImages/MilkCarton.jpg';


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
              
              <button
              onClick={() =>setIsCarrotModalOpen(true)} 
              className= "carrot">
              </button>
         
          <button
           onClick={() =>setIsCarrotModalOpen(true)}
          className="orange"></button>
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
      <div className="dairyInfo" style={{backgroundImage: `url(${MilkCarton})`}}>
                     <h1 className ="dairyHeader">Dairy</h1> 
                    <h3>Why is Dairy Important?</h3>
                    <p>Dairy products are know for its benefits of maintaining strong and healthy bones in the body.
                      Milk is an excellent source of calcium, vitamin D, vitamin K, phosphorus and magnesium. Calcium is highly known to be linked 
                      to dairy and 99% of your body's calcium is stored in your bones and teeth. </p>
                      <p>Dairy products are used in almost everything we eat and drink, from smoothies, cookies, ice cream, cheese etc.  But some people
                        can not consume dairy products or have a hard time digesting it through there system. There are substitutes for dairy products that you can consume such as:  </p>
                        <ul>
                          <li>Almond Milk- Made from almonds, this plant-based alternative is lower in calories and fat than regular dairy milk.</li>
                          <li>Coconut milk-This tropical drink made from coconut flesh and water has a creamy texture and mild flavor. </li>
                          <li>Cashew milk-Cashews and water combine to make this subtly sweet and rich substitute.</li>
                          <li>soy Milk-This alternative is made from hemp seeds and provides a good amount of high quality-plant based protein.</li>
                          <li>Oat milk-This substitute is very mild in flavor with a thicker consistency, making it a great addition to coffee.</li>
                          <li>Rice Milk-A great option for those with sensitivities or allergies, as it is the least allergenic of all nondairy milks. </li>
                        </ul>
                   </div>
    </ReactModal>

    <ReactModal
     isOpen={isBowlModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsBowlModalOpen(false)}>
      <button onClick={() => setIsBowlModalOpen(false)}>Close</button>
      {/* Grains information and picture */}
    </ReactModal>

    <ReactModal
     isOpen={isCarrotModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsCarrotModalOpen(false)}>
      <button onClick={() => setIsCarrotModalOpen(false)}>Close</button>
      {/* Vegetables information and picture */}
    </ReactModal>

    <ReactModal
     isOpen={isOrangeModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsOrangeModalOpen(false)}>
      <button onClick={() => setIsOrangetModalOpen(false)}>Close</button>
      {/* fruit information and picture */}
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


