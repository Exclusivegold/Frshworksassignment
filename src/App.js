import React from 'react'
import "./App.css"
import Logo from "./images/blacklogo.png"
import Babe from "./images/freshworklady.PNG"
import manwoman from "./images/man and woman.png"
import cursor from "./images/cursor.JPG"
import dollars from "./images/dollar.JPG"
import purple from "./images/purple.JPG"
import timer from "./images/timer.JPG"
import pearson from "./images/pearson.JPG"
import travix from "./images/travix.JPG"
import dog from "./images/dog.JPG"
import bridgestone from "./images/bridgestone.JPG"
import delivery from "./images/delivery.JPG"
import engel from "./images/engel.JPG"
import fiverr from "./images/fiverr.png"
import vice from "./images/vice.JPG"
import bluenile from "./images/blue nile.JPG"
import itv from "./images/itv.JPG"
import klarna from "./images/klarna.JPG"
import waterstone from "./images/w@terstons.JPG"
import exabyte from "./images/exabyte.JPG"
import trainline from "./images/trainline.JPG"
import katzmedia from "./images/katzmedia.JPG"
import foursquare from "./images/foursquare.JPG"
import dlogo from "./images/dlogo.JPG"
import fresh from "./images/logo.JPG"
import man from "./images/man.JPG"
import girls from "./images/girls.JPG"
import nicelady from "./images/nicelady.JPG"
import jungle from "./images/manwoman.JPG"
import ballon from "./images/fwlogo.PNG"
import lastlogo from "./images/logo.JPG"
function App(){

  return(

    <div className="Container">
      <div className="Header">
        <div className="Headerwrapper">
          <div><img src={Logo} className="Logo" /></div>
          <div className="Navs">
            <p>Products</p>
            <p>Platfom</p>
            <p>Company</p>
            <p>Resources</p>
            <p>Customers</p>
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
            <h1 className="Heads">Delight made easy</h1>

            <p className="PMan">We make it fast and easy for your business to delight
             customers and employees</p>
             <div className="but">
               <button className="but1">Free Trials</button>
               <button className="but2">Contact Sales</button>
             </div>

          </div>
          <div>
            <img src={Babe} className="Baby"/>
          </div>

        </div>

      </div>
      <div className="manwoman">
        <div>
          <img src={manwoman} className="manwoman"/>
        </div>
        <div className="Whole">
          <div className="TopHeader">
            <h2>Try the business software used by over 50,000 companies across the 
              <br/>
              globe to exceed customer and employee expectations.</h2>
          </div>

          <div className="Container2">
            <div className="Container2-Box">
              <button className="button3">Customer Service</button>
            </div>
            <div className="Container2-Box">
              <button className="button3">IT Service Management</button>
            </div>
          </div>
          <br/>

          <div className="Container3">
            <div className="Container3-Box">
              <button className="button3">HR Management</button>
            </div>
            <div className="Container3-Box">
              <button className="button3"> Sale Automation</button>
            </div>
          </div>
          <br/>
          <div className="Container4">
            <div className="Container4-Box">
              <button className="button3">Marketing Automations.</button>
            </div>
            <div className="Container4-Box">
              <button className="button3">All Products/Trials</button>
            </div>
          </div>

        </div>

      </div>
      <div className="Third">
        <div className="TopDisplay">
          <h2>Frictionless,simple,easy</h2>
          <p>Freshworks makes it fast and easy for business to delight their customers and employee.</p>
          <br/>
          We take fresh approach to how bsiness discover, engage with and realize value from software through their journey.
        </div>

        <div className="Thirdfirst">
        <div className="ThirdfirstContainer">
          <div>
            <img src={cursor} className="cursor"/>
          </div>
          <h3>GetUp and running with no barriers</h3>
          <p>Try or push our software directly from our <br/> website, and on board in a matter of days, not <br/> months </p>
          </div>
          <div className="ThirdfirstContainer1">
            <div>
              <img src ={dollars} className="dollars"/>
            </div>
            <h4>Choose your pricing plan</h4>
            <p>Our Pricing plan are designed for mordern <br/> business use cases and affordable for <br/> organisation of all sizes</p>
          </div>

          <div className="Thirdfirst">
            <div className="ThirdfirstContainer">
              <div>
                <img src={purple} className="purple" />
              </div>
              <h3>Build and Customize as you go</h3>
              <p>Extend and tailor experience to meet your <br/> unique business needs, with low-code<br/> development and over 1100 custom apps made <br/>
              available on our maketplace</p>
            </div>
            <div className="ThirdfirstContainer1">
              <div>
                <img src={timer} className="timer" />
              </div>
              <h4>
                Create value, fast
              </h4>
              <p>Accelerate your team's productivity and efficiency<br/>
              with mordern Automation and collaboration tools<br/>
              to get tangible result resukt in no time</p>
            </div>

          </div>

        </div>

      </div>

      <div className="Forth">
        <div className="Forthtop">
          <h2>Trusted by 50k+ Customers Big and Small</h2>
          <p>
            We are leading provider of mordern SaaS solution that solve multiple, complex business problem to companies of all sizes. Business from more than 120 countries around the worls use Freshworks product to delight their customers and employees everyday
          </p>
        </div>
        <br/>
        <div className="ForthContainer1">
          <div className="ForthHolder">
            <img src={pearson} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={travix} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={dog} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={bridgestone} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={delivery} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={engel} className="icon"/>
          </div>

        </div>
        <div className="ForthContainer1">
          <div className="ForthHolder">
            <img src={fiverr} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={vice} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={bluenile} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={itv} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={klarna} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={waterstone} className= "icon"/>
          </div>
        </div>
        <div className="ForthContainer1">
          <div className="ForthHolder">
            <img src={exabyte} className= "icon"/>
          </div>
          <div className="ForthHolder">
            <img src={trainline} className= "icon"/>
          </div>
          <div className="ForthHolder">
            <img src={katzmedia} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={foursquare} className="icon"/>
          </div>
          <div className="FourthHolder">
            <img src={dlogo} className="icon"/>
          </div>
          <div className="ForthHolder">
            <img src={fresh} className="icon"/>
          </div>
        </div>
        <div className="Fifth">
          <div className="Topart">
            <h2>"  W@tersons  "</h2>
          </div>
          <div className="FifthHeader">
            <p>"The Freshworks team was a great asset during implementation and continue to partner for Watersons as we look to further mature and improve our sevices to customers, tailored to their specific needs.</p>
          </div>
          <div className="FifthHeader1">
            <p>
              Alex Bookless, Head of Managed Services, Watersons
            </p>
          </div>

        </div>
        <div className="Sixth">
          <div className="sixthtop">
            <h2>We aspire to be of the most loved companies in the world</h2>
          </div>
          <div className="MainContainer">

            <div className="HouseContainer">
              <div className="ImageContainer">
                <img src={man} className="people"/>
              </div>
              <h3>Culture</h3>
              <p className="sixthpara">
                A culture thar supports high-quality work, joy and pride in that work, speed execution, and intense customer focus.
              </p>

            </div>

            <div className="HouseContainer">
              <div className="ImageContainer">
                <img src={girls} className="people"/>
              </div>
              <h3>Diversity</h3>
              <p className="sixthpara">
                Full-spectrum diversity' equity, and inclusion sre key priorities for us.
              </p>
            </div>

            <div className="HouseContainer">
              <div className="ImageContainer">
                <img src={nicelady} className="people"/>
              </div>
              <h3>Experience</h3>
              <p className="sixthpara">
                Focus on enhancing the team experience by strenghthening our manager's leadership capabilities. 
              </p>
            </div>
            <div className="HouseContainer">
              <div className="ImageContainer">
                <img src={jungle} className="people"/>
              </div>
              <h3>Team</h3>
              <p className="sixthpara">
                4,000 employees and growing in offices across India, US, Europe, and Australia 
              </p>
            </div>



          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div>
            <button className="sixthbottom">SEE LIFE AT FRESHWORKS</button>
          </div>
        </div>
        <div className="seventh">
          <div><img src={ballon} className="ballon"/></div>
          <div><img src={ballon} className="ballon2"/> </div>
          <div className="Seventhtop">
            <h3>Ready to get started?</h3>
          </div>
          <div className="SeventhHeader">
            <p className="SeventhHeaderpara">Join our communityof 50,000+ companies of all sizes who use freshwork's modern SaaS Product to make it fast and easy to <br/>delight theit customers and employees.</p>
          </div>
          <div className="SeventhHeader1">
            <button className="seventhbutton">CONTACT SALES</button>
          </div>
          <div><img src={ballon} className="ballon1"/></div>
          <div><img src={ballon} className="ballon4"/></div>

        </div>
        <div className="Lastpage">
          <div className="Firstcolumn">
            <div><img src={lastlogo} className="self"/></div>
            <a href="" className="link">freshDeck</a>
            <a href="" className="link">FreshSales</a>
            <a href="" className="link">FrshMarketer</a>
            <a href="" className="link">FreshService</a>
            <a href="" className="link">FreshTeam</a>
          </div>
          <div className="Secondcolumn">
            <p className="company">Company</p>
            <a href="" className="link">About</a>
            <a href="" className="link">Leadership</a>
            <a href=""className="link">Board of Directors</a>
            <a href="" className="link">Affiliates</a>
            <a href="" className="link">Partners</a>
            <a href="" className="link">Philanthropy</a>
            <a href="" className="link">Careers</a>
            <a href="" className="link">News Room</a>
            <a href="" className="link">Contact Us</a>
          </div>
          <div className="Thirdcolumn">
            <div>
              Contact with Us
            </div>
            <br/>

          </div>
        </div>
      </div>
    </div>
  


  )
}
export default App;