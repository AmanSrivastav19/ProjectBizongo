import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Already() {

   const clickfirst = useNavigate()
    function click(){
        clickfirst("/started")
    }
  return (
    <>
    <div class="container text-center" >
  <div class="row row-cols-2" style={{background:"skyblue"}} >
    <div class="col">
       <h1>Already Loving Bizongo?</h1>
       <p>Our dedicated team of supply chain experts ensure you get the best of both worlds - high quality & low cost.</p>
       <br/>
       <br/>
       <br/>
       <br/>
       <button onClick={click} style={{backgroundColor:"blue", color:"white",border:"none"}}>Get Started</button>
        </div>
    <div class="col">
        <h3><strong>87%</strong></h3>
        <p>TIMES ORDER DELIVERED ON-TIME & IN-FULL</p>
        <br/>
        <h3><strong>3 Days</strong></h3>
        <p>FOR ORDERS TO BE DELIVERED AFTER DISPATCH</p>
        <br/>
        <h3><strong>100%</strong></h3>
        <p>VISIBILITY ON SUPPLY CHAIN</p>
        <br/>
        <h3><strong>0</strong></h3>
        <p>CHANCES OF FACING STOCKOUTS</p>
    </div>
   
  </div>
</div>
    </>
  )
}
