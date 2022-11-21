import React from 'react'
import { NavLink } from 'react-router-dom'

export default function() {
  return (
    <>
    <div class="container text-center">
 
  <div class="row">
    <div class="col-md-6">
        <h2>Digital Vendor Management</h2>
        <h3>Digitally transform your entire vendor base</h3>
    </div>
    <div class="col-6 col-md-6"></div>
  </div>

 
 
 <hr/>

  <div class="row">
    <div class="col-6"><img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/608f9cc0e822ca989bb849f7_digital%20catalog.svg' style={{height:"70px" ,width:"70px" ,marginRight:"330px"}}/>
     <h3>Digitize the Product Catalogue</h3>
     <h5>Eliminate spreadsheets, manage & modify your catalogue online</h5>
     <br/>
    <h4> <NavLink to="/about">Get Started With Bizongo</NavLink></h4>
    </div>
    <div class="col-6"><img src="https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/60243fa370ba2dfe0a2f7415_Vendor%20Communication.svg"/>
    <h3>Simplify Vendor Communication</h3>
     <p>Leave all the vendor communication to your Bizongo account manager.</p>
    </div>
   
  </div>
</div>

    </>
  )
}
