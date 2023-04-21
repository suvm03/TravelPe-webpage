import React from 'react'

import './Navbar.css'

export default function Navbar() {
    return (
        <>
            
                <div className='cont '>
                   

                        <nav className="navbar navbar-expand-lg bg-blue" >
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"> <img src='assets/logo-bg.png' width= "50px " height="50px"/> TravelPey</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  mb-2 mb-lg-0 ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link " aria-current="page" href="#">Flights</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">
Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">
Terms & Conditions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">+1 8886763247</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                
            

        </>
    )
}
