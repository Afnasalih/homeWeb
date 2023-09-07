import React from 'react'
import './About.css'
import HAND from '../../asset/handshake.png'
import AWARD from '../../asset/award.png'

export default function About() {
  return (
    <div className='aboutmain2'>
      <div className="conhead">
        <div className="contxt">
          <div className="conimg"><img src={HAND} alt="" />
             
          </div>
          <p className='ustxt'>About Us</p>
        </div>
      </div>
      <div className="conwrite">
        <div className="conwriteog">
          <p className='launch'>Launched in 2005, 99acres.com, India’s No. 1 property portal, deals with every aspect of the consumers’
             needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange 
             information about real estate properties quickly, effectively and inexpensively. At 99acres.com, you can advertise 
             a property, search for a property, browse through properties, build your own property microsite, 
            and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
            <p className='real'> why real estate ?</p>
            <p className='acres'> At present, 99acres.com prides itself for having around nine lakh property listings spanning across 600+ cities in India. 
                Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform 
                to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, 99acres.com offers 
                advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and 
                branding in the market.
                With the ever-evolving online search behaviour, 99acres.com shares updated information pertinent to real estate activities, 
                assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!</p>
        </div>
      </div>
      <div className="awards">
        <div className="awardog">
          <img src={AWARD} alt=""  className='awimg'/>
          <p className='awars'>Awards & Recognitions</p>
        </div>
      </div>
      <div className="points">
        <div className="pointsog">
          <p>•PropTech Mobile App of the Year Award 2019</p>
          <p>•99acres.com won the award for ‘Personalized User Journey</p>
          <p>•Best Mobile Appies Award 2015</p>
          <p>•99acres.com won the award for having the ‘Most Innovative Mobile App’ in the real estate category</p>
          <p>•CMO ASIA Awards 2012</p>
          <p>•99acres.com was awarded the ‘Most Admired Real Estate Website of the Year’ at the 3rd CMO Asia Awards for excellence in the real estate segment.</p>
          <p>•BCI Awards 2012</p>
          <p>•99acres.com was recognised as the ‘Best Real Estate Portal’ in 2012.</p>
          <p>•Accommodation Times Awards 2012</p>
          <p>•99acres.com was announced the ‘Best Online Realty Portal’ by the Accommodation Times in 2012.</p>
        </div>
      </div>
      
    </div>
  )
}
