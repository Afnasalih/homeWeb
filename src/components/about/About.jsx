import React from 'react'
import './About.css'
import MENS from '../../asset/mens.png'

export default function About() {
  return (
    <div className='aboutmain'>
        <div className="aboutleft">
          <div className="aleftcon">
            <img src={MENS} alt="" className='menstyle' />
          </div>
        </div>
        <div className="aboutright">
          <div className="arightcon">
            <div className="righthead">
              <p className='offerstyle3'>About</p>
              <p className='offerstyle4'>US</p>
              </div>
              <div className="rimain">
                <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                   aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
              <div className="aboutbtn">
                <button className='abtn'>Learn More</button>

              </div>
          </div>

        </div>
    </div>
  )
}
