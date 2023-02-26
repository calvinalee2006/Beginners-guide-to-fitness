import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';

function Diet() {
    const navigate = useNavigate()
  return (
    <>
    <h1>Eating Healthy</h1>
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
    </>
  )
}

export default Diet
