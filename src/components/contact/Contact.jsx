import React from 'react'
import './Contact.css'
import PHONE from '../../asset/phone.png'

export default function Contact() {
  return (
    <div className='contactmain'>
        <div className="contactcon">
            <div className="contacthead">
                <p className='dea'>Contact</p>
                <p className='dea1'>Us</p>
            </div>
            <div className="contactdown">
                <div className="contactleft">
                    <div className="cntactmiddle">
                        <div className="cthead"><p className='qoute'>Get A Qoute</p></div>
                        <div className="name"><input type="text" placeholder='Name' className='namebox' /></div>
                        <div className="phonenum"><input type="text" placeholder='Phone Number' className='namebox' /></div>
                        <div className="name"><input type="text" placeholder='E-Mail' className='namebox' /></div>
                        <div className="phonenum"><input type="text" placeholder='The Product / Service Of Interest' className='namebox' /></div>
                        <div className="message"><input type="text" placeholder='Message' className='msgbox' /></div>
                        <div className="csubtxt"><p className='by'>By Submitting An Application You Agree With Politics Confidentiality</p></div>
                        <div className="subtn"><button className='sstyle'>Submit</button></div>
                    </div>
                </div>
                <div className="contactright">
                    <img src={PHONE} alt="" className='phonepic'/>
                </div>
            </div>
        </div>
    </div>
  )
}
