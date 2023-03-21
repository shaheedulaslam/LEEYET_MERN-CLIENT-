import React, { useState } from "react";
import axios from "axios";


export default function Adding() {
  const [name,setName] = useState('')
  const [Age,setAge] = useState('')
  const [email,setEmail] = useState('')
  const [place,setPlace] = useState('')

  const handleForm = (e)=>{
    e.preventDefault()
    console.log(name,Age,email,place);
    axios.post(process.env.REACT_APP_SERVER_URL,{
      name:name,
      Age:Age,
      email:email,
      place:place
    }).then((res)=>{
      console.log(res)
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
<>
<h2 class="text-center mb-5">STUDENT REGISTRATION FORM</h2>
<section class="h-100 h-custom" style={{backgroundColor:"#8fc4b7;"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <img src="https://i.pinimg.com/736x/7a/60/81/7a608125eea5ecb7e8fb689da25ab358.jpg" class="w-100" alt=""/>
            <div class="card-body p-4 p-md-5 bg-light">
              {/* <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center text-dark">Registration Form</h3> */}
  
              <form class="px-md-2" action="" method="post" onSubmit={handleForm}>
                <div class="form-outline mb-4">
                <label class="form-label text-dark" for="form3Example1q">Name</label>
                  <input type="text" id="form3Example1q" class="form-control" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                </div>
                <div class="form-outline mb-4">
                 <label class="form-label text-dark" for="form3Example1q">Age</label>
                    <input type="number" id="form3Example1q" class="form-control" name="Age" value={Age} onChange={(e)=>{setAge(e.target.value)}} required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Email</label>
                    <input type="email" id="form3Example1q" class="form-control" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Place</label>
                    <input type="text" id="form3Example1q" class="form-control" name="place" value={place} onChange={(e)=>{setPlace(e.target.value)}} required/>
                  </div>
               
                <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>
  
              </form>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
}
