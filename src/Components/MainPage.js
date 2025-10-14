import React from 'react';
import HackMercedTower from '../Assets/HackMercedTower.png';


function MainPage() {
  // function scrollToHacktually() {
    // document.getElementById('hacktually').scrollIntoView({behavior: 'smooth', block:'end', alignToTop:false})
  // }
    return (
      <div className="MainPage">
            <div className="Main-text-background">
              <div className="Main-text">
                {/* <h1 className="Main-title">HackMerced XI @ UC Merced</h1> */}
                <h1 className="Main-title">Hack Day @ UC Merced</h1>
                <p className="Main-subtitle">
                  {/* Coming in Spring 2026!  */}
                  November 8, Saturday, from 8:00am to 8:00pm
                  <br/>
                  <div class="starWrapper">
                    <p class="star1" id="star">★</p>
                    <p class="star2" id="star">★</p>
                    <p class="star3" id="star">★</p>
                  </div>
                  <div class="starBursts">
                    <p class="starBurst1">✨</p>
                    <p class="starBurst2">⭐️</p>
                    <p class="starBurst3">🌟</p>
                  </div>
                </p>
                <a href="https://forms.gle/oTLNoYy3xV6YWXQV7" target="_blank" rel="noopener noreferrer"><button class="registerButton2">Sign up for Hack Day</button></a>

                <img src={HackMercedTower} className='Main-hackmerced-tower' alt='HackMerced X Tower'/>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji"><span role="img" aria-label="email">📧</span></p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;