import React from 'react'
import './Member.css'
import FREIMG from '../../asset/freeimg.png'
import F2 from '../../asset/f2.png'
import F3 from '../../asset/f3.png'
import F4 from '../../asset/f4.png'
import TICK from '../../asset/tick.png'

export default function Member() {
  return (
    <div className='membermain'>
        <div className="membercon">
            <div className="memberhead">
                <p className='dea'>Become a</p>
                <p className='dea1'>Member</p>
            </div>
            <div className="memberdown">
                <div className="memberleft">
                    <div className="memleft">
                        
                        <div className="lefttop">
                            <div className="leto1">
                                <div className="cen">
                                    <div className="nbtn">
                                        <div className="numberog">
                                            <p>01</p>
                                        </div>
                                    </div>
                                    <div className="freeimg">
                                        <img src={FREIMG} alt="" className='one' />
                                    </div>
                                    <div className="free">
                                        <p className='two'>Free Membership</p>
                                    </div>
                                    <div className="freetxt">
                                        <p className='three'>Lorem ipsum dolor sit amet, conse ctetur adipi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="leto3">
                            <div className="cen">
                            <div className="nbtn">
                                        <div className="numberog">
                                            <p>02</p>
                                        </div>
                                    </div>
                                    <div className="freeimg">
                                        <img src={F2} alt="" className='one' />
                                    </div>
                                    <div className="free">
                                        <p className='two'>Enjoy Member Profits</p>
                                    </div>
                                    <div className="freetxt">
                                        <p className='three'>Lorem ipsum dolor sit amet, conse ctetur adipi</p>
                                    </div>
                            </div>

                            </div>
                        </div>
                        <div className="lefttop">
                            <div className="leto2">
                            <div className="cen">
                            <div className="nbtn">
                                        <div className="numberog">
                                            <p>03</p>
                                        </div>
                                    </div>
                                    <div className="freeimg">
                                        <img src={F3} alt="" className='one' />
                                    </div>
                                    <div className="free">
                                        <p className='two'>High Profits</p>
                                    </div>
                                    <div className="freetxt">
                                        <p className='three'>Lorem ipsum dolor sit amet, conse ctetur adipi</p>
                                    </div>
                            </div>

                            </div>
                            <div className="leto4">
                            <div className="cen">
                            <div className="nbtn">
                                        <div className="numberog">
                                            <p>04</p>
                                        </div>
                                    </div>
                                    <div className="freeimg">
                                        <img src={F4} alt="" className='one' />
                                    </div>
                                    <div className="free">
                                        <p className='two'>Get Promotions</p>
                                    </div>
                                    <div className="freetxt">
                                        <p className='three'>Lorem ipsum dolor sit amet, conse ctetur adipi</p>
                                    </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="memberright">
                    <div className="mrightcon">
                        <div className="mrconhead">
                            <p className='d'>Member</p>
                            <p className='d1'>ship</p>
                        </div>
                        <div className="mrcontxt">
                            <p className='ctxt'>loream ipsum dot aod sit amet, consectetur adipiscing Enim,risus dictm sed sit.
                             Suspendisse congue est pellentesque nec. Sed tincidunt aliquam.</p>
                        </div>
                        <div className="lo1">
                            <div className="loleft">
                                <button className='tick'></button>
                                <img src={TICK} alt="" className='timg' />
                            </div>
                            <div className="loright">
                                <p className='righsub'>loream ipsum dot aod sit amet, consectetur</p>
                            </div>
                        </div>
                        <div className="lo1">
                        <div className="loleft">
                                <button className='tick'></button>
                                <img src={TICK} alt="" className='timg' />
                            </div>
                            <div className="loright">
                                <p className='righsub'>loream ipsum dot aod sit amet, consectetur</p>
                            </div>
                        </div>
                        <div className="lo1">
                        <div className="loleft">
                                <button className='tick'></button>
                                <img src={TICK} alt="" className='timg' />
                            </div>
                            <div className="loright">
                                <p className='righsub'>loream ipsum dot aod sit amet</p>
                            </div>
                        </div>
                        <div className="lo1">
                        <div className="loleft">
                                <button className='tick'></button>
                                <img src={TICK} alt="" className='timg' />
                            </div>
                            <div className="loright">
                                <p className='righsub'>loream ipsum dot aod sit </p>
                            </div>
                        </div>
                        <div className="msbtn">
                            <button className='bluebtn'>Learn More</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
  )
}
