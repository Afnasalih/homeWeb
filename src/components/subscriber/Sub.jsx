import React from 'react'
import './Sub.css'
import SIMG1 from '../../asset/simg1.png'
import SIMG2 from '../../asset/simg2.png'

export default function Sub() {
  return (
    <div className='submain'>
      <div className="sub1">
        <div className='subimg1'>
          <img src={SIMG1} alt="" className='s1'/>
        </div>
        <div className="subcon">
          <div className="subnew"><p className='subs'>Subscribe to our newsletter</p></div>
          <div className="stay"><p className='subs1'>Stay in the loop with everything you need to know.</p></div>
          <div className="subemail"><div className="sem"><input type="text" placeholder='Email' className='esub'/>
          
          <button className='scribebtn'>Subscribe</button>
          </div>
          
          </div>
          <div className="privacy">
            <p className='policy'>We care about your data in our <u className='under'>privacy policy</u></p>
          </div>
        </div>
        <div className="subimg1">
        <img src={SIMG2} alt="" className='s1'/>

        </div>
      </div>
    </div>
  )
}
