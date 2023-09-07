import React from 'react'
import './Offer.css'
import O2 from '../../asset/o2.png'
import ARROW from '../../asset/arrow.png'
import O1 from '../../asset/o1.png'
import O3 from '../../asset/o3.png'
import O4 from '../../asset/o4.png'
import O5 from '../../asset/o5.png'

export default function Offer() {
  return (
    <div className='offerdiv'>
        <div className="offermiddle">
            <div className="offertop">
                <p className='offerstyle1'> We </p>
                <p className='offerstyle2'> Offer</p>
            </div>
            <div className="offerdown">
                <div className="types">
                    <div className="typestyle">
                    <div className="typeog">
                    <div className="offerimg">
                            <img src={O1} alt="" className='oimg' />
                        </div>
                        <div className="offerhead">
                            <p className='privatestyle'>Private House</p>
                        </div>
                        <div className="offercon">
                            <p className='privateog'>Lorem ipsum dolor sit amet consectetur adipiscing elit, Ut enim ad minim veniam. </p>
                        </div>
                        <div className="offerlearn">
                            <button className='offerbtn'>Learn More
                            <img src={ARROW} alt="" className='arrwstyle'/>
                            </button>
                        </div>

                    </div>
                    </div>
                    <div className="typestyle">
                    <div className="typeog">
                        <div className="offerimg">
                            <img src={O2} alt="" className='oimg' />
                        </div>
                        <div className="offerhead">
                            <p className='privatestyle'>Commercial</p>
                        </div>
                        <div className="offercon">
                            <p className='privateog'>Lorem ipsum dolor sit amet consectetur adipiscing elit, Ut enim ad minim veniam. </p>
                        </div>
                        <div className="offerlearn">
                            <button className='offerbtn'>Learn More
                            <img src={ARROW} alt="" className='arrwstyle'/>
                            </button>
                        </div>


                    </div>
                    </div>
                    <div className="typestyle">
                    <div className="typeog">
                    <div className="offerimg">
                            <img src={O3} alt="" className='oimg' />
                        </div>
                        <div className="offerhead">
                            <p className='privatestyle'>Hotel & Malls</p>
                        </div>
                        <div className="offercon">
                            <p className='privateog'>Lorem ipsum dolor sit amet consectetur adipiscing elit, Ut enim ad minim veniam.  </p>
                        </div>
                        <div className="offerlearn">
                            <button className='offerbtn'>Learn More
                            <img src={ARROW} alt="" className='arrwstyle'/>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="typestyle">
                    <div className="typeog">
                    <div className="offerimg">
                            <img src={O4} alt="" className='oimg' />
                        </div>
                        <div className="offerhead">
                            <p className='privatestyle'>Private Room</p>
                        </div>
                        <div className="offercon">
                            <p className='privateog'>Lorem ipsum dolor sit amet consectetur adipiscing elit, Ut enim ad minim veniam.  </p>
                        </div>
                        <div className="offerlearn">
                            <button className='offerbtn'>Learn More
                            <img src={ARROW} alt="" className='arrwstyle'/>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="typestyle">
                    <div className="typeog">
                    <div className="offerimg">
                            <img src={O5} alt="" className='oimg' />
                        </div>
                        <div className="offerhead">
                            <p className='privatestyle'>Warehouse</p>
                        </div>
                        <div className="offercon">
                            <p className='privateog'>Lorem ipsum dolor sit amet consectetur adipiscing elit, Ut enim ad minim veniam. </p>
                        </div>
                        <div className="offerlearn">
                            <button className='offerbtn'>Learn More
                            <img src={ARROW} alt="" className='arrwstyle'/>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
