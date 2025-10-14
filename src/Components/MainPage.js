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
                <h1 className="Main-title">HackMerced XI @ UC Merced</h1>
                <p className="Main-subtitle">
                  Coming in Spring 2026! 
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

                <img src={HackMercedTower} className='Main-hackmerced-tower' alt='HackMerced X Tower'/>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji"><span role="img" aria-label="email">📧</span></p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;