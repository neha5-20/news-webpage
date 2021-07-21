import React from "react";
import "./Navbar.css"

const Navbar = () =>{

    window.onscroll=function(){
        console.log("scroll")
        if(window.pageYOffset>10){
            document.getElementById('header').style.backgroundColor="#3f6d80"
        }
        else{
            document.getElementById('header').style.backgroundColor="transparent"
        }
    }
    return(
        <div className="nav">
            <div className="nav-padd" id="header">
                <h1 className="logo">NEWS 24X7</h1>
                <div class="new">
                    <div class="nav-item">Home</div>
                    <div class="nav-item">News</div>
                    <div class="nav-item">About</div>
                    <div class="nav-item">Contact</div>
                </div>
            </div>
            <div className="banner">
                <div className="overlay">
                   <div className="b-text">
                       <div className="padd-text">
                           <h1 className="b_title">Connect with World</h1>
                           <p className="banner-desc">Check out the latest news from India and around the world. <br/> Latest India news on Bollywood, Politics, Business, Cricket, Technology and Travel.</p>
                           <p>
                             <button className="banner-btn"><span>GET STARTED</span></button>
                           </p>
                        </div>

                   </div>
                    
                </div>
            </div>
        </div>

    );
}

export default Navbar;