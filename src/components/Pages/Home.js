import React from 'react';
import Navbar from './Navbar';
import './Styles/Home.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import CachedIcon from '@mui/icons-material/Cached';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import q1img from './Pageimg/q1.jpg'; // Import the image correctly
import q2img from './Pageimg/q2.jpg'; // Import the image correctly
import q3img from './Pageimg/q3.jpg'; // Import the image correctly
import q4img from './Pageimg/q4.jpg'; // Import the image correctly
import q5img from './Pageimg/q5.jpg'; // Import the image correctly
import q6img from './Pageimg/q6.jpg'; // Import the image correctly
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



const Home = () => {
  return (
    <div className="homefull">
      
      <div className="homeheadimg">
       <Navbar/>
        <div className="homeheadimgcon1">
          <h1>MEN'S COLLISION</h1> <br />
          <h1>NEW ARRIVAL</h1><br />
        </div>
        <div className="homeheadimgcon2">
          <h1>BLACK FRIDAY</h1> <br />
          <h1>NEW ARRIVAL</h1><br />
        </div>
        <div className="shopbutton">
          <a href="/About">
            <button className='shopbut'>shop</button>
          </a>
        </div>
      </div>
      <div className='p1'>
        <div className="free">
          <LocalShippingIcon className='shippingicons' />
          <p className='lpara'>  FREE SHIPPING</p>
        </div>

        <div className="free">
          <InfoIcon className='shippingicons' />
          <p className='lpara'>  We are available 24/7</p>
        </div>

        <div className="free">
          <CachedIcon className='shippingicons' />
          <p className='lpara'>  Satisfied or return</p>
        </div>

        <div className="free">
          <LocalAtmIcon className='shippingicons' />
          <p className='lpara'>  100% secure payments</p>
        </div>
      </div><br /><br /><br />
      
      <div className="product">
        
        <div className="product1">

          <a href="/product">
          <img src={q3img} alt="Air conditionerAIR CONDITIONER" /></a>
          <div className="prodoflow">
          GADGETS
          </div>
          
        </div>
        <div className="product1">
                    <a href="/product">

          <img src={q4img} alt="Air conditionerAIR CONDITIONER" /></a>
          <div className="prodoflow">
        PCS & LAPTOP
          </div>
          
        </div>
        <div className="product1">
                    <a href="/product">

          <img src={q5img} alt="Air conditionerAIR CONDITIONER" /></a>
          <div className="prodoflow">
          SMART HOME
          </div>
          
        </div>  <div className="product1">
                    <a href="/product">

          <img src={q6img} alt="Air conditionerAIR CONDITIONER" /></a>
          <div className="prodoflow">
          KITCHEN APPLIANCES
          </div>
          
        </div>
        <div className="product1">
                    <a href="/product">

          <img src={q1img} alt="Air conditionerAIR CONDITIONER" /></a>
          <div className="prodoflow">
          AIR CONDITIONER
          </div>
          
        </div>
        <div className="product1">
                    <a href="/product">

          <img src={q2img} alt="Air conditionerAIR CONDITIONER" /></a>
          <div className="prodoflow">
          AUDIO & VIDEO
          </div>
          
        </div>
      </div>
      <div className="logoinfo">
        <div className="logoinfo1"></div>
        <div className="logoinfo2"></div>
      </div>
      {/* <div className="logo">
        <h1> TOP BRANDS</h1>
        <div className="brands">

        </div>
      </div> */}
      <div className="appliens"><br />
        <h1 className='appliinfo' >Kitchen appliances</h1>
        <div className="appliens1">
          <div className="appliensimg">
            <img src={q6img} alt="" />
          </div><br />
          <h3 className='appliinfo'>Microwave Oven with Smart Sensor Easy Clean Interior ECO Mode 1.2 Cu Ft Stainless Steel</h3>

        </div>
        <div className="appliens1">
          <div className="appliensimg">
          <img src={q2img} alt="" />

          </div><br />
          <h3 className='appliinfo'>X80J 55 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR</h3>

        </div>
        <div className="appliens1">
          <div className="appliensimg">
          <img src={q3img} alt="" />

          </div>
          <h3 className='appliinfo'>5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey</h3>


        </div>
        <div className="appliens1">
          <div className="appliensimg">
          <img src={q4img} alt="" />

            
          </div><br />
        <h4 className='appliinfo'>13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4</h4>

        </div>
      </div>
      <div className="fooder">
        <div className="foodercontact">
          <p className='appliinfo1'> EXCEPT ADVICE <br /> <h1>CONTACT 999-865-256 </h1></p>
          <p className='appliinfo1'> CUSTOMER CARE <br /> <h1>CONTACT 989-865-256 </h1></p>
          <p className='appliinfo1'> <ul>Have any questions?</ul> <br /> <h1>CONTACT US</h1></p>

        </div>
        <h4 className='iconss'>© 2023 Electronic Store. Powered by Electronic Store</h4>
        <FacebookIcon className='iconss'/>
        <EmailIcon className='iconss' />
        <TwitterIcon className='iconss'/>


      </div>
      
     
        </div>
    
  );
}

export default Home;
