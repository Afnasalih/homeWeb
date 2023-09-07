import React from 'react'
import './Contact.css'
import CIMG from '../../asset/cimage.png'

export default function Contact() {
  return (
    <div className='conmain'>
      <div className="conhead">
        <div className="contxt">
          <div className="conimg"><img src={CIMG} alt="" />
             
          </div>
          <p className='ustxt'>Contact Us</p>
        </div>
      </div>

      <div className="contable">


      <div className="App">
      <h1></h1>
      <table>
        <thead>
          <tr>
            <th>CITY</th>
            <th>ADDRESS</th>
            <th>TOLL FREE</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ahmedabad</td>
            <td>106, Iscon Elegance, S.G. Highway, Prahladnagar, Ahmedabad. Pin: 380015.</td>
            <td>91-1800-4199099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Bangalore</td>
            <td>Info Edge (India) Ltd. N – 503, North Block, Manipal Centre, Dickenson Road, Bangalore - 560042</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Chandigarh</td>
            <td>Info Edge (India) Ltd. SCO 224-225 ,1st Floor Sector 40D Chandigarh -160036</td>
            <td>91-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Chennai</td>
            <td>Info Edge (India) Ltd. Samson towers 1st floor 403L Pantheon road Egmore Chennai 600008</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Hyderabad</td>
            <td>Info Edge India Ltd., 6-3-1192/1/1, Office No:113 To 115, 3rd Block, 1st Floor, White House, Kundan bagh, Beside Life Style, Begumpet, Hyderabad-500016</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Mumbai (Andheri)</td>
            <td>Info Edge (India) Ltd. 127-128, B-wing, 1st Floor, Chintamani Plaza, Andheri-Kurla Road, Chakala, Opp. CineMagic Theatre. Andheri-E, Mumbai- 400099</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Indore</td>
            <td>518, 5th floor Shekhar Central Palasia Square A.B. Road – Indore Madhya Pradesh – 452001</td>
            <td>18-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Jaipur</td>
            <td>Info Edge (India) Ltd. 605, Crystal Palm, 22 Godam Circle, Sardar Patel Marg, Jaipur - 302001</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Coimbatore</td>
            <td>Info Edge (India ) Ltd, 1st Floor, Elysium Central, Puliakulam Road, Coimbatore - 641045</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
          <tr>
            <td>Kolkata</td>
            <td>Space Ergo Brilliant, Office No: 505, 5th Floor Plot No: A1-4, Block EP & GP Sector V, Salt Lake, Kolkata – 700 091</td>
            <td>1800-41-99099</td>
            <td>service@99acres.com</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}
