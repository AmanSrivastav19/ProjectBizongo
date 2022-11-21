import React from 'react'

export default function Works() {
    // const [name,setName] = useState("")
    // const [email,setEmail] = useState("")
    // const [phone,setPhone] = useState("")
    // const [password,setPassword] = useState("")
    function  userHandle(e){
         alert("called")

     e.preventDefault()

    }
    function userHandler(e){
// alert(e.target.value)
   let item=e.target.value
   if(item.length<3){
    alert("length is less than 3 ")
   }
    }
  return (
    <>
    <div class="container text-center">
  <div class="row">
    <div class="col" style={{backgroundColor:"lightblue"}}>
       <h4 className='text-light'>Work With Us To Ensure</h4>
       <p className='text-light'>Liquidity for smooth business operations</p>
       <br/>
       <p className='text-light'>1 unified solution to manage multiple vendors</p>
       <br/>
       <p className='text-light'>Uninterrupted supply chain operations</p>
    </div>
    <div class="col">
    <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" defaultValue="Mark" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" defaultValue="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>UP</option>
      <option>MP</option>
      <option>AP</option>
      <option>HP</option>
      <option>DELHI</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
   
    </div>
    
  </div>
</div>
    </>
  )
}
