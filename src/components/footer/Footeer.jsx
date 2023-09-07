import React from 'react'
import './Footer.css'
import FACEB from '../../asset/faces.png'
import INSTA from '../../asset/instas.png'
import SKYPE from '../../asset/skypes.png'
import WHATS from '../../asset/whts.png'
import MSG from '../../asset/msg.png'
import CALL from '../../asset/call.png'
import LOC2 from '../../asset/loc2.png'
import { Link } from 'react-router-dom'

export default function Footeer() {
  return (
    <div className='footermain'>
        <div className="footerhead">
            <div className="foo">
                <div className="foo1">
                    <div className='wr'>
                        <p className='nemo'> Nemo enim ipsam voluptatem quia voluptas sit 
                            aspernatur a odit aut fugit sed consequuntur magni dolores eos qui ratione.</p>
                    </div>
                    <div className="follow">
                        <div className="folname">
                            <p className='us'>Follow Us </p>
                        </div>
                        <div className="folbtn">
                            <button className='bt'><img src={FACEB} alt="" /></button>
                            <button className='bt'><img src={INSTA} alt="" /></button>
                            <button className='bt'><img src={SKYPE} alt="" /></button>
                            <button className='bt'><img src={WHATS} alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="foo2">
                    <div className="f2head"> <p className='us1'>About Us </p></div>
                    <div className='f2'>
                        <p className='cc'>How it work</p>
                        <p className='cc'>Customers</p>
                        <p className='cc'>Our Story</p>
                        <p className='cc'>Career</p>
                        <Link to="/contact" style={{textDecoration : 'none'}}>

                        <p className='cc'>Contact Us</p>
                        </Link>
                        <p className='cc'>FAQs</p>
                    </div>

                </div>
                <div className="foo3">
                <div className="f2head"> <p className='us2'>Support & Summary </p></div>
                    <div className='f3'>
                        <p className='cc'>Question</p>
                        <p className='cc'>Helping Center</p>
                        <p className='cc'>Privacy & policy</p>
                        <p className='cc'>Buy or Rent</p>
                        <p className='cc'>Properties</p>
                        <p className='cc'>Blogs</p>
                    </div>
                </div>
                <div className="foo4">
                    <div className="head4"><p className='us1'>Contact Us</p></div>
                    <div className="foodown">
                        <div className="fd1">
                            <div className="fd1left">
                                <button className='sobtn'><img src={MSG} alt="" className='size'/></button>
                            </div>
                            <div className="fd1right">
                                <p className='top'>E-mail</p>
                                <p className='down'>youremailid@gmail.com</p>
                            </div>
                        </div>
                        <div className="fd1">
                        <div className="fd1left">
                                <button className='sobtn'><img src={CALL} alt="" className='size'/></button>
                            </div>
                            <div className="fd1right">
                                <p className='top'>Contact</p>
                                <p className='down'>(+01) 123 456 7890</p>
                            </div>
                        </div>
                        <div className="fd1">
                        <div className="fd1left">
                                <button className='sobtn'><img src={LOC2} alt="" className='size'/></button>
                            </div>
                            <div className="fd1right">
                                <p className='top'>Location</p>
                                <p className='down'>3012 pine garden lane atlantis boulevard,GA 30328</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footertail">
            <div className="tail">Copyright 2022 Real Estate.   |  Term Condition & policy</div>
        </div>
    </div>
  )
}
