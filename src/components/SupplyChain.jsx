import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/Bizongo.png'

export default function SupplyChain() {
  return (
    <>
      <div class="container text-center">
  <div class="row">
    <div class="col-sm-6">
       <h1>Skyrocket Supply Chain Visibility With Procure Live</h1><hr/>
       <h3><img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/60243f830714935a074a4a06_Real%20time%20tracking.svg' /> Real-Time Analytics & Tracking</h3>
                <h6 >Be on your A-game with real-time updates of all your orders & inventory.</h6>
      <h3><img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/60243f906e04384136dc2f19_digitised%20documentation.svg'/>Digitized Documentation</h3>
              <h6>Build a single source of data. Increase productivity with fewer calls & emails.</h6>

              <h2><NavLink to="/contactus">Learn More</NavLink></h2>
    </div>
    <div class="col-sm-6"><img src={image}  style={{height:"400px" , width:"600px"}}/></div>
  </div>
 
</div>

    </>
  )
}
