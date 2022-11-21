import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Chain() {
  return (
    <>
    <div className="container text-center">
  <div className="row row-cols-2">
    <div className="col"><img src="https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/60237f4da1f9a2083007365b_Client%20Warehouse%20NORM%20.gif" style={{width:"700px"}}/></div>

    <div className="col">
        <h1><strong>Supply Chain Automation</strong></h1>
        <h3>Auto-replenish all your unbranded goods</h3>
        <hr/>
        <img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/60243fd8a9397c785556fe54_Effective%20inventory.svg' style={{marginRight:"400px"}}/>
        <h3><strong>Efficient Inventory Management</strong></h3>
        <p>Auto-replenish inventory to ensure 100% product availability at all times.</p>
        <img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/60243fdc62772d89912ac3e1_digitised%20distribution.svg' style={{marginRight:"400px"}}/>
        <h3><strong>Digitalised Distribution Services</strong></h3>
        <p>Smoothen the logistics even for large, multi-location requirements.</p>
        <br/>
        <br/>
        <h5><NavLink to="/contactus">Learn More</NavLink></h5>
        <br/>
        <br/>
        <div className="card "style={{backgroundColor:"blue"}}>

  <div className="card-body "  >
    <img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/6024cc217dddeaca15a42a8b_Frame%2020.png' style={{marginRight:"400px", width:"70px"}}/>
    <p className="card-text text-light">Bizongo provided cure.fit with a 360-degree food packaging solution that involved reduced costs, timely deliveries, assured quality, and supply chain visibility. Cure.fit now delivers 35K+ packed meals daily..</p>
    <h5><NavLink to="/contactus" style={{color:"white"}}>Learn More</NavLink></h5>
  </div>
</div>
    </div>
    
  </div>
</div>
    </>
  )
}
