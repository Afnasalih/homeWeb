import React from 'react'
import './Deal.css'
import P1 from '../../asset/p1.png'
import P2 from '../../asset/p2.png'
import P3 from '../../asset/p3.png'
import P4 from '../../asset/p4.png'
import P5 from '../../asset/p5.png'


export default function Deal() {
  return (
    <div className='dealmain'>
        <div className="dealcont">
            <div className="dealtop">
                <p className='dea'>We</p>
                <p className='dea1'>Deal in</p>
            </div>
            <div className='dealdown'>
                <div className="down1">
                    <div className="picd1">
                        <img src={P1} alt="" className='picstyle' />
                        <div className="hotel">Hotels</div>
                    </div>
                    <div className="picd1">
                        <img src={P2} alt="" className='picstyle' />
                        <div className="hotel">Commercials</div>
                    </div>
                </div>
                <div className="down2">
                    <div className="picd2">
                        <img src={P3} alt="" className='picstyle' />
                        <div className="hotel">Houses</div>
                    </div>
                    <div className="picd2">
                    <img src={P4} alt="" className='picstyle' />
                    <div className="hotel">Warehouse</div>
                    </div>
                    <div className="picd2">
                    <img src={P5} alt="" className='picstyle' />
                    <div className="hotel">Lands</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
