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
                  Ever wanted to run a hackathon? Join our team below!
                  <br/>
                  Work with fellow engineers on a robust 200 person event!
                  <br/>
                  Click on the link below to apply for the team!
                </p>
                <a className="registerButton2Stars" href="https://docs.google.com/forms/d/e/1FAIpQLSdvJNPf1waAtIJPR_gGSw3Ve9H7l1S92e4DXFmjF1R2zJCp4g/viewform?usp=dialog">
                  <button className="registerButton2">Apply Now!</button>
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
                </a>

                <img src={HackMercedTower} className='Main-hackmerced-tower' alt='HackMerced X Tower'/>
                <p className="Main-footer">Have questions? Email <a className="Main-footerlink" href="mailto:general@hackmerced.com"> general@hackmerced.com <p className="emailEmoji"><span role="img" aria-label="email">📧</span></p></a></p>
                </div>
            </div>
      </div>
    );
  }
  
  export default MainPage;