import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Success() {
  return (
    <>
    <h1 className="text-center">Success Stories Across Brands</h1>
    <h3 className="text-center">Learn how Bizongo's solutions impacted businesses across industries</h3>
   
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" >
  <img src="https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6364b947b7b1d241a7cb0710_Creating%20Indian%20alternatives%20to%20China%20Imports%20%20Tushar%20Jain%20High%20Spirit%20Commercial%20Ventures-p-500.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BIZONGO</h5>
    <p class="card-text">Customer Speak | Bagging Growth </p>
    <NavLink to="/lifestyle" class="btn btn-primary" >Lets Explore</NavLink>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6364b9701d8305276873356d_Bizongo%20powers%20Nagreeka%27s%20procurement%20play%2C%20Aditya%20Patwari%2C%20Nagreeka-p-500.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BIZONGO</h5>
    <p class="card-text">Customer Speak| Nagreeka </p>
    <NavLink to="/lifestyle" class="btn btn-primary">Lets Explore</NavLink>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://global-uploads.webflow.com/6001b7dbeed0a8711afcfaeb/6364b981e01aa4b5cc1e6d8e_Unlocking%20Growth%20through%20Faster%20Lead%20Time.%20Govind%20Taparia%20Taparia%20Textiles-p-500.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BIZONGO</h5>
    <p class="card-text">Customer Speak| Nagreeka</p>
    <NavLink to="/lifestyle" class="btn btn-primary">Lets Explore</NavLink>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  )
}
