import React from 'react'
import './Hero.css'
import HOME from '../../asset/home.jpg'
import LOC from '../../asset/location.png'
import HO from '../../asset/home.png'
import  PRICE from '../../asset/price.png'
import SEARCH from '../../asset/search.png'



export default function  Hero() {
  return (
    <div className='heromain'>
        <img src={HOME} alt="" className='homestyle'/>
        <div className='blurdiv'>
          <div className='leftcontent'>
            <div className='contentog'>
              <div className="conthead">
                <p className='headstyle'>Discover The Ideal Property Here</p>
              </div>
              <div className="contsub">
                <p className='substyle'>As soon as I had found a few properties that suited me, I was
                able to forget about how diffivult it was to find a suitable home.</p>
              </div>
              <div className="buybtn">
                <button className='buy'>Buy</button>
                <button className='buy'>Sell</button>
                <button className='buy'>Rent</button>
              </div>
              <div className="loc">
                <div className="locstyle">
                <label for="cars"></label>
                

                    <select name="cars" id="cars" className='selectstyle'>
                      <img src={LOC} alt="" />
                    
                    <option value="volvo"> <p className='loctxt'>Location</p> </option>
                      <option value="saab">INDIA</option>
                      <option value="mercedes">USA</option>
                      <option value="audi">KOREA</option>
                      <option value="audi">ITALY</option>
                      <option value="audi">UAE</option>
                      <option value="audi">JAPAN</option>
                    </select>
                    <img src={LOC} className="loca1" alt="" />
                </div>

                <div className="locstyle">
                <label for="cars"></label>
                

                    <select name="cars" id="cars" className='selectstyle'>
                      <img src={LOC} alt="" />
                    
                    <option value="volvo"> <p>Property</p> </option>
                      <option value="saab">HOME</option>
                      <option value="mercedes">FLAT</option>
                      <option value="audi">APPARTMENT</option>
                      <option value="audi">VILLA</option>
                      <option value="audi">STUDIO APPARTMENT</option>
                      <option value="audi">OFFICE</option>
                    </select>
                    <img src={HO} className="loca1" alt="" />
                </div>
                <div className="locstyle">
                
                <label for="cars"></label>
                
                    <select name="cars" id="cars" className='selectstyle'>
                    
                    <option value="volvo" className='loctxt'> <p>Price</p> </option>
                      <option value="saab">below $1000</option>
                      <option value="mercedes">below $2000</option>
                      <option value="audi">below $3000</option>
                      <option value="audi">below $4000</option>
                      <option value="audi">below $5000</option>
                    </select>
                    <img src={PRICE} className="loca1" alt="" />
                </div>
                <div className="locstyle">
                  <button className='btnsty'>Search</button>
                  <img src={SEARCH} className="loca" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
