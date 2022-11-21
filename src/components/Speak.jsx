import React from 'react'

export default function Speak() {
  return (
    <>
     <h1 className='text-center'>Customers Speak</h1>
     <p className='text-center'>We're Trusted by India's Best.</p>
     <br/>
     <br/>
     <div id="carouselExampleIndicators" className="carousel slide w-50" data-bs-ride="true" >
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"  >
    <div className="carousel-item active" style={{backgroundColor:"skyblue"}}>
        <img src='https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/6046013271a18cb7c2090370_uc_logo.png' style={{width:"50px",height:"50px",marginLeft:"650px"}}/>
        <h3 className='text-center'>Aman Chitkara</h3>
        <h3  className='text-center'>Manager, Product Procurement & Supply Chain, Urban Company</h3>
        <p className='text-center'>When the pandemic hit, Urban Company  daily operations came to a sudden halt. Resuming the services and bringing their professional partners back on track was crucial. Ensuring community safety alongside was pivotal too. Bizongo  agile digital supply chain solution fit in perfectly as per their requirement. It ensured that each and every service professional was equipped with safety kits while visiting the customers. To fulfil this, Bizongo delivered 70,000+ safety kits to the doorsteps of these professionals across the country to 1500+ pincodes.</p>
    </div>
    <div className="carousel-item" style={{backgroundColor:"lightgreen"}}>
      <img src="https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/6046021b1678a44fabe380d1_sharda-logo.png" style={{width:"50px",height:"50px",marginLeft:"650px"}} />
      <h3 className='text-center'>Ankit Gupta</h3>
      <h3  className='text-center'>Director, Sharda Oils</h3>
      <p  className='text-center'>We are working with Bizongo since past 2-3 years & the experience has been amazing. The packaging procurement services provided by them have seamlessly flown into our system & have been very helpful. Right from ease in vendor discovery to pricing, the processes have been all smooth. It's very convenient to choose from the pool of vendors Bizongo has. The pricing is also always very competitive. Even during the pandemic they have managed to support us fully & provide best-quality packaging in time & at right cost. We look forward to more opportunities to grow our business with Bizongo in future.</p>
    </div>
    <div className="carousel-item" style={{backgroundColor:"yellow"}}>
      <img src="https://global-uploads.webflow.com/5fad195767bb5f0163efac7f/6086b5535e6cdb16d9d9f1a2_1%20India.jpg" style={{width:"50px",height:"50px",marginLeft:"650px"}} />
      <h3 className='text-center'>JP Shukla</h3>
      <h3 className='text-center'>CEO & MD, Nysaa Retail Pvt Ltd</h3>
      <p className='text-center'>"We were really glad to have collaborated with Bizongo. With 100+ stores across the nation, managing vendors, their payments & at the same time tracking orders efficiently for 50L+ customers can get complex & tiresome. Bizongo's entry into the system gave us end-to-end supply chain solutions that enabled us to handle vendor consolidation, POs, order deliveries, & inventory planning, all in one place. It improved our cash flow offering us the liberty to better utilize our working capital. We look forward to growing our partnership in the future."</p>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
