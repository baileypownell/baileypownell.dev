import React from 'react';

class Porfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <a name="portfolio"></a>
        <h2>PORTFOLIO</h2>
            <div id="gallery" className="faded">
              <div class="parent">
                <div class="website seven"></div>
                <div class="darken">
                    <div class="information-banner">
                      <button><a href="https://github.com/baileypownell/React-Weight-Tracker-SPA" target="_blank">See the Code</a></button>
                      <button class="modalBtn" id="react_weight_tracker">Learn More</button>
                    </div>
                </div>
              </div>
              <div class="parent">
                <div class="website eight"></div>
                <div class="darken">
                    <div class="information-banner">
                      <button><a href="https://github.com/baileypownell/Virtual-Cookbook" target="_blank">See the Code</a></button>
                      <button class="modalBtn" id="virtualCookbook">Learn More</button>
                    </div>
                </div>
            </div>
             <div class="parent">
               <div class="website two"></div>
               <div class="darken">
                  <div class="information-banner">
                    <button><a href="https://github.com/baileypownell/Mills-Farms" target="_blank">See the Code</a></button>
                    <button class="modalBtn" id="mills">Learn More</button>
                  </div>
               </div>
              </div>
              <div class="parent">
                <div class="website three"></div>
                  <div class="darken">
                    <div class="information-banner">
                      <button><a href="https://github.com/baileypownell/Simple-Weather-Web-App" target="_blank">See the Code</a></button>
                      <button class="modalBtn" id="weatherApp">Learn More</button>
                    </div>
                  </div>
                </div>
              <div class="parent">
                <div class="website four"></div>
                <div class="darken">
                    <div class="information-banner">
                      <button><a href="https://github.com/baileypownell/Indiana-State-Bar-Redesign" target="_blank">See the Code</a></button>
                      <button class="modalBtn" id="isba">Learn More</button>
                    </div>
                </div>
            </div>
          <div class="parent">
            <div class="website six"></div>
            <div class="darken">
                <div class="information-banner">
                  <button><a href="https://github.com/baileypownell/3-Beers-Deep" target="_blank">See the Code</a></button>
                  <button class="modalBtn" id="threeBD">Learn More</button>
                </div>
            </div>
        </div>
        <div class="parent">
          <div class="website five"></div>
          <div class="darken">
              <div class="information-banner">
                <button><a href="https://github.com/baileypownell/Meal-Picker-React-App" target="_blank">See the Code</a></button>
                <button class="modalBtn" id="mealPickerApp">Learn More</button>
              </div>
          </div>
      </div>
      <a name="about"></a>
      </div>
      </div>
    )
  }
}

export default Porfolio;
