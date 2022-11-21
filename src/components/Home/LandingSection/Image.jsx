import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Image() {
  return (
    <>
    <div className="container text-center">
  <div className="row">
    <div className="col" ><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6200fbb853590a691857f4ff_Jain-Cord--120X120-logo.jpg' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col" ><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6200ff6a90a348d70e13bb9a_Stitched-Textiles-Private-Limited-120X120-logo.jpg' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src="https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6200f72ae1ddb4b6bf5d4b84_Birla-Century-120X120-logo.jpg" style={{width:"70px",height:"70px"}}/><NavLink className="d-flex " to="/lifestyle" style={{color:"black"}}>50+ FASHION & LIFESTYLE CUSTOMERS</NavLink></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/60e426a995cc8a0b97b34cc2_Nysaa.png' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src="https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/62010aa50a8aa961694dd1bf_Begwani-120X120-logo.jpg" style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/620109f70a8aa9ceaf4d406f_SA-Snacks-120X120-logo.jpg' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/620109f70a8aa9ceaf4d406f_SA-Snacks-120X120-logo.jpg' style={{width:"70px",height:"70px"}}/><NavLink className="d-flex" to="/customer" style={{color:"black"}} >30+ CONSUMER STAPLES CUSTOMERS</NavLink></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/602bb8f7b93fcc0956d591b6_Gopaljee%20Dairy%20Foods.png ' style={{width:"70px",height:"70px"}}/><hr/></div>
  </div>
 
  <div className="row">
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/613885db31e245154d2e9188_Wonderchef.png' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6200ecbf4244805f4769ca30_613885bb900ed22888afce72_Ansapack.png' style={{width:"70px",height:"70px"}}/><NavLink className="d-flex  " to="/customer" style={{color:"black"}}>20+ DISCRETIONARY CUSTOMERS</NavLink></div>
    <div className="col"><img src="https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/60e428ea41b6efceada48a9a_Sonal-Adhesive.png" style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/60e4272f396a3e2868e8ee1a_Ddecor.png' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/62010e5418593c7d20cc0184_Qmin-120X120.jpg' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/62010e2b5abe53ff9c630be2_Madreich-120X120.jpg' style={{width:"70px",height:"70px"}}/><hr/></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/62010dd2416aa90c886f8502_Bal-Pharma-120X120.jpg' style={{width:"70px",height:"70px"}}/><NavLink className="d-flex "  to="/customer"  style={{color:"black"}}>20+ PHARMACEUTICALS CUSTOMERS</NavLink></div>
    <div className="col"><img src='https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/62010d7efbfde03f6d0b50a6_Dana-120X120.jpg' style={{width:"70px",height:"70px"}}/><hr/></div>
  </div>
  <h6>AND MANY MORE : <NavLink to="/industries">VIEW ALL INDUSTRIES  </NavLink></h6>
</div>
    </>
  )
}
