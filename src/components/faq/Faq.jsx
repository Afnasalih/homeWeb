import React from 'react'
import './Faq.css'

import { useState } from 'react'

export default function Faq() {
    // const [show, setShow]= useState(false)
    const [show1, setShow1]= useState(false)
    const [show2, setShow2]= useState(false)
    const [show3, setShow3]= useState(false)
    const [show4, setShow4]= useState(false)
  return (
    <div className='faqmain'>
        <div className="faqhead">
            <div className="fheadcon">
                <p className='frequenty'>FAQ's - Frequently Asked Questions</p>
            </div>
            <div className="as">
                <div className="as1"><p className='asl1'>As you might imagine, real estate agents field quite a few questions every day. People are</p></div>
                <div className="as2"><p className='asl2'>naturally curious, and it's an agent's job to guide.</p></div>
            </div>
        </div>
        <div className="faqdown">
            <div className="lightblue">
                <div className="faqm">
                    <div className="faq1">
                          <div className='dO'>
                                 <p className='how'>How Can I Build Equity Into My House?</p>
                         </div>
                           <div className='dO2'>
                                <button className='crossbutn' onClick={() => {
                                console.log("button clicked")
                                // alert("clicked")
                                setShow1(!show1)

                                }}>
                                    <img src={show1 ? "https://www.pngitem.com/pimgs/m/4-47688_transparent-cross-cliparts-orange-x-icon-png-png.png" : "https://www.nicepng.com/png/full/7-74809_plus-sign-png-images-free-download-png-blue.png" } alt="" className='plustyle' />
                                </button>
                            </div>

                            {show1 && <div className='drop1'>
                                <div className="dropnav1">
                                   
                                        <p className='btxt'>How Can I Build Equity Into My House?</p>
                                        <p className='bsub'>You can build equity in three ways. first (and easiest) is 
                                            from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
                                    
                                    
                                    </div>
                                
                                
                                </div>}
                        
                    </div>
                    <div className="faq1">
                    <div className='dO'>
                                 <p className='how'>How Big Is An Acre?</p>
                         </div>
                           <div className='dO2'>
                                <button className='crossbutn' onClick={() => {
                                console.log("button clicked")
                                // alert("clicked")
                                setShow2(!show2)

                                }}>
                                    <img src={show2 ? "https://www.pngitem.com/pimgs/m/4-47688_transparent-cross-cliparts-orange-x-icon-png-png.png" : "https://www.nicepng.com/png/full/7-74809_plus-sign-png-images-free-download-png-blue.png" } alt="" className='plustyle' />
                                </button>
                            </div>
                            {show2 && <div className='drop1'>
                                <div className="dropnav1">
                                   
                                        <p className='btxt'>How Can I Build Equity Into My House?</p>
                                        <p className='bsub'>You can build equity in three ways. first (and easiest) is 
                                            from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
                                    
                                    
                                    </div>
                                
                                
                                </div>}


                        </div>
                    <div className="faq2">

                    <div className='dO'>
                                 <p className='how'>How Can I Build Equity Into My House?</p>
                         </div>
                           <div className='dO2'>
                                <button className='crossbutn' onClick={() => {
                                console.log("button clicked")
                                // alert("clicked")
                                setShow3(!show3)

                                }}>
                                    <img src={show3 ? "https://www.pngitem.com/pimgs/m/4-47688_transparent-cross-cliparts-orange-x-icon-png-png.png" : "https://www.nicepng.com/png/full/7-74809_plus-sign-png-images-free-download-png-blue.png" } alt="" className='plustyle' />
                                </button>
                            </div>

                            {show3 && <div className='drop1'>
                                <div className="dropnav1">
                                   
                                        <p className='btxt'>How Can I Build Equity Into My House?</p>
                                        <p className='bsub'>You can build equity in three ways. first (and easiest) is 
                                            from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
                                    
                                    
                                    </div>
                                
                                
                                </div>}



                    
                        
                    </div>
                    <div className="faq1">

                    <div className='dO'>
                                 <p className='how'>How Can I Build Equity Into My House?</p>
                         </div>
                           <div className='dO2'>
                                <button className='crossbutn' onClick={() => {
                                console.log("button clicked")
                                // alert("clicked")
                                setShow4(!show4)

                                }}>
                                    <img src={show4 ? "https://www.pngitem.com/pimgs/m/4-47688_transparent-cross-cliparts-orange-x-icon-png-png.png" : "https://www.nicepng.com/png/full/7-74809_plus-sign-png-images-free-download-png-blue.png" } alt="" className='plustyle' />
                                </button>
                            </div>

                            {show4 && <div className='drop1'>
                                <div className="dropnav1">
                                   
                                        <p className='btxt'>How Can I Build Equity Into My House?</p>
                                        <p className='bsub'>You can build equity in three ways. first (and easiest) is 
                                            from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.</p>
                                    
                                    
                                    </div>
                                
                                
                                </div>}



                    </div>
                </div>

                
            </div>
        </div>



        




    </div>
  )
}
