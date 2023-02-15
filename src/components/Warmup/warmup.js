import React from 'react'
import { NavLink } from 'react-router-dom'

const warmup = () => {
  return (
    <>
      <h1>Warm-ups</h1>

      <p>From this authors perspective you wont get the full performance from your body unless you take the time
        to perform a quick warm-up. Most people say that performing stretches <i>IS</i> a warm-up, but that is 
        not necessarily true. The main objective for a warm-up is to elevate core temperature, increase blood flow, 
        to working muscles and reduce the risk of injury (We really don't want to see you get hurt!).   
      </p>

      <p>A warm up consists of anywhere between a walk to a slow paced jog to a series of light exercises. All it 
        takes is 10 minutes to warm-up those muscles and get ready for your workout!!</p>

        <p>Here are some warm-up tips, tricks, and exercises to get an idea of what works best for you. </p>
        {/*Insert articles, videos and author suggestions.  */}

        <NavLink to="/Stretching">
            <button>Previous</button>
            </NavLink>

        {/* <NavLink to="/Warmup">
            <button>Next</button>
  </NavLink> */}
    </>
  )
}

export default warmup
