import React from 'react'
import './Home.css'

export default function () {
    return (
        <>
            <div className='container-fluid homebg '>
                <div className='row'>
                    <div className='col-md-6 col-10'>
                        <img className='img-fluid' src='assets/bags-rebg.png' />
                    </div>
                    <div className='col-md-6 col-10 m-auto'>
                    <div class="col-6 ">
                  <h1 class="landing-hefirst mt-5" style={{color:"white"}}> FLIGHTS</h1>
                  <b style={{backgroundColor: "#ffd700",
                  /* color: #ffd700; */
                  fontSize: "19px",
                  padding: "4px"}}>Get 20% off on your first flight</b>
                <ul class="submenu mt-2">
        
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flight_type" id="inlineRadio1" checked="" value="1"/>
                    <label class="form-check-label" for="inlineRadio1">One-way </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flight_type" id="inlineRadio2" value="2"/>
                    <label class="form-check-label" for="inlineRadio2">Round-trip</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flight_type" id="inlineRadio3" value="3"/>
                    <label class="form-check-label" for="inlineRadio3">Multi-city</label>
                  </div>
                </ul>
                <div class="row">
                  <div class="col-6">
                    <div class="item-landing">
                      <i class="fa-sharp fa-solid fa-location-dot icon"></i>
                      <input name="check-in " type="text" id="search" class="form-control  form-select form-select-sm" placeholder="Where form ?" code="ZMH"/>
                       
                        <ul class="list-group " id="result"></ul>
                    </div>
        
                  </div>
                  <div class="col-6">
                    <div class="item-landing ">
                      <i class="fa-sharp fa-solid fa-location-dot icon"></i>
                      <input name="check-in" type="text" id="search1" class="form-control form-select form-select-sm" placeholder="Where to ?" code=""/>
                      <ul class="list-group" id="result1"></ul>
                    </div>
        
                  </div>
                  <div class="col-6 mt-4">
                    <div class="item-landing " style= {{position:" relative"}}>
                      <i class="fa-solid fa-calendar icon"></i>
                      <input type="text" name="" class="datepicker" id="departure_date1" placeholder="Departure Date"/>
                    <div class="qs-datepicker qs-hidden">
      <div class="qs-controls">
        <div class="qs-arrow qs-left"></div>
        <div class="qs-month-year">
          <span class="qs-month">April</span>
          <span class="qs-year">2023</span>
        </div>
        <div class="qs-arrow qs-right"></div>
      </div>
 
        <div class="qs-close">✕</div>
        <input type="number" class="qs-overlay-year" placeholder="4-digit year"/>
        <div class="qs-submit qs-disabled">Submit</div>
      </div>
    </div></div>
        
                  </div>
                  <div class="col-6 mt-4" style={{display: "none"}}>
                    <div class="item-landing" style={{position:"relative"}}>
                      <i class="fa-solid fa-calendar icon"></i>
                      <input type="text" name="" class="datepicker" id="return_date1" placeholder="Return Date"/>
                    <div class="qs-datepicker qs-hidden">
      <div class="qs-controls">
        <div class="qs-arrow qs-left"></div>
        <div class="qs-month-year">
          <span class="qs-month">April</span>
          <span class="qs-year">2023</span>
        </div>
        <div class="qs-arrow qs-right"></div>
      </div>
    
      <div class="qs-overlay qs-hidden">
        <div class="qs-close">✕</div>
        <input type="number" class="qs-overlay-year" placeholder="4-digit year"/>
        <div class="qs-submit qs-disabled">Submit</div>
      </div>
    </div></div>
                  </div>
                  <div class="col-6 mt-4">
                    <div class="item-landing">
                      <i class="fa-solid fa-user icon"></i>
                      <select class="form-select form-select-sm" id="passenger_count1" aria-label=".form-select-lg example">
                        <option selected>Select Passenger</option> 
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 mt-4">
                    <div class="item-landing">
                      <i class="fa-solid fa-user icon"></i>
                      <select class="form-select form-select-sm" id="child_f1" aria-label=".form-select-lg example">
                        <option selected>Select Child</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 mt-4">
                    <div class="item-landing">
                      <i class="fa-solid fa-user icon"></i>
                      <select class="form-select form-select-sm" id="economy1" aria-label=".form-select-lg example">
                        <option value="Economy">Economy</option>
                        <option value="First-class">First-class</option>
                        <option value="Business-class">Business-class</option>
                      </select>
                    </div>
        
                  </div>
                  <div class="col-12 mt-4">
                    <div class="item-landing ">
                        <i class="fa-solid fa-user icon"></i>
                      <input type="number" name="" class="datepicker" id="mobile_number" placeholder="Enter Mobile Number"/>
                    </div>
        
                  </div>
                 
                  <div class="col-12">
                    <div class="btn-row mt-4">
                      <button class="landing-btn" onclick="send_email();">Instant Book</button>
                    </div>
        
                  </div>
                </div>
              </div>
                    </div>
                </div>
           
        </>
    )
}
