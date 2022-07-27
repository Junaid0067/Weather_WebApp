import React from 'react'
import { Link } from "react-router-dom";
import Clock from 'react-live-clock';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link style={{fontFamily: "Montserrat", fontSize: "30px", color: "white"}} className="navbar-brand" to='/'>WeatherApp</Link>
                    

                <h4 className='my-3 time'><Clock format={'dddd, MMMM DD, YYYY, h:mm:ss A'} ticking={true}  /></h4>
                </div>
            </nav>
        </div>
    )
}

export default Navbar