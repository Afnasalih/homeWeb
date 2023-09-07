import React from 'react'
import './Rating.css'

export default function Rating() {
  return (
    <div className='ratingmain'>
        <div className="ratingcenter">
            <div className="ratingog">
            <div className="sold">
                <div className='dummy'>
                <div className="number">200K+</div>
                <div className="txt">Property Sold</div>
                </div>
                
            </div>
            <div className="sold">
            <div className='dummy'>
            <div className="number">100+</div>
                <div className="txt">Award Winning</div>
            </div>
            
            </div>
            <div className="sold">
            <div className='dummy'>
            <div className="number">20+</div>
                <div className="txt">Years of Experience</div>
            </div>
            
            </div>
            <div className="sold">
            <div className='dummy'>
            <div className="number">100K+</div>
                <div className="txt">Agents Working</div>
            </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}
