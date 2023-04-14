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
    <div className ="background"></div>
    
      <div className = "fridgeContainer">
      
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
           onClick={() =>setIsOrangeModalOpen(true)}
          className="orange"></button>
          </div>

          <div className = "firstRung"></div>

        </div>
        
      <div className={`fridge ${isDoorOpen ? 'open' : 'close'}`}>
        <p>{isDoorOpen ? '' : 'HealthyFridge'}</p>
       <div className ="handle" onClick={handleFridgeClick}></div>
       <div className ="fridgeContents">
       
       </div>
        </div>
    </div>
    
    </div>

    <ReactModal
     isOpen={isMilkModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsMilkModalOpen(false)}>
      <button onClick={() => setIsMilkModalOpen(false)}>Close</button>
                      <div className = "dairyModule">
                     <h1>Dairy</h1> 
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
      <div className="grainsModule">
      <h1>Grains</h1> 
      <p>There are two types of grains, whole grains and refined grains:</p>
      <ul>
        <li>Whole Grains - Which are grains made with the entire grain kernel. Some whole-grain examples are whole-wheat flour
          bulgur(cracked wheat), oatmeal, and brown rice. 
        </li>
        <li>Refined grains - Which are grains that have been milled and removes bran and germ, which can be found in whole grains. This is done 
          to give grains a finer texture and improve their shelf life, but doing this removes nutrients from the grains. Some examples of refined grain products are
          white flour, corn grit, white bread and white rice.</li>
      </ul>
      <p>Grains are an important sources of many nutrients, including complex carbohydrates, dietary fiber, several B vitamins and minerals.</p>
      <p>Not only does whole grain fiber help with bowl movements, it also may help lower the risk of heart disease, and is also used to carry oxygen to the blood. </p>
      </div>
    </ReactModal>

    <ReactModal
     isOpen={isCarrotModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsCarrotModalOpen(false)}>
      <button onClick={() => setIsCarrotModalOpen(false)}>Close</button>
      <div className ="vegModule">
    <h1>Vegetables </h1>
    <p>Vegetables!! BLAH!! That is the normal reaction to when people are suggested to include them in their diet. But vegetables add and do so much to your body,
      it is amazing how people can go a day without one! Vegetables an be served in many different forms (juiced, frozen, canned, dried etc.).
      Vegetables are organized into 5 subgroups based on their nutritional value: </p>
      <ul>
        <li>Dark Green - Vegetables such as kale, spinach, and collard greens provides the body with Vitamin K, a nutrient that helps reduce blood clotting, 
           and inflammatory diseases such as arthritis. </li>
        <li>Red and orange - Vegetables such as carrots and red bell peppers, which may help reduce the risk of diabetes, osteoporosis and high cholesterol.</li>
        <li>Beans, Peas, and Lentils - Basically, and bean! Black, garbanzo, kidney, lima, the list seems endless. Beans are a strong source for protein, fiber, and iron. Beans help lower blood glucose levels
          that can help prevent diabetes.  </li>
        <li>Starchy - Vegetables such as corn and potatoes are a vital source for energy and satisfies hunger so you won't have the ure to reach for that bag of chips. </li>
        <li>Other - Vegetables such as beets, cabbage, cucumbers, which are overall good to add to your diet. </li>
      </ul>
    </div>
    </ReactModal>

    <ReactModal
     isOpen={isOrangeModalOpen}
     ariaHideApp={false}
     onRequestClose ={() => setIsOrangeModalOpen(false)}>
      <button onClick={() => setIsOrangeModalOpen(false)}>Close</button>
        
        <div className="fruitsModule">
        <h1>Fruits</h1>
          <p>In this authors opinion, fruits are probably the easiest addition to a diet since a lot of people don't have issues consuming them. 
            The fruit group includes all fruits and 100% fruit juice. Fruit juice from the store can have a lot of sugar and additives, so a great buy 
            would be a juicer, that way you can make your own recipes and have natural fruit juice (and if you wanted to get creative you can do the same with vegetables). 
            Fruits may be frozen, canned, or dried/dehydrated. Fruits can be eaten whole, cut up, pureed, or cooked.s
          </p>
          <p>Fruits are low in fat, sodium, and calories and do not have any cholesterol. Fruits provide vitamins such as potassium, fiber, vitamin C and folate.
            Fruits rich with potassium may help maintain blood pressure, while fruits with dietary fiber helps reduce blood cholesterol levels. Eating fruits can also 
            help with hydration because some fruit are composed of 90% water. 
          </p>
        </div>
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


