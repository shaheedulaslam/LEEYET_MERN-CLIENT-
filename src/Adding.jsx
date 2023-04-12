import React, { useState } from "react";
import axios from "axios";


export default function Adding() {
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  // const [image,setImage] = useState('')
  const [description,setDescription] = useState('')
  const [file,setFile] = useState([])

    const handleForm = async (e)=>{
    e.preventDefault()
    console.log(name,price,file,description);
   await axios.post(process.env.REACT_APP_SERVER_URL,{
      name:name,
      price:price,
      file:file,
      description:description
    }).then((res)=>{
      console.log(res)
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
<>
<h2 class="text-center mb-5">ADD PRODUCT</h2>
<section class="h-100 h-custom" style={{backgroundColor:"#8fc4b7;"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <img src="https://cdn.pixabay.com/photo/2017/01/19/13/22/ecommerce-1992280__340.png" class="w-100 h-25" alt=""/>
            <div class="card-body p-4 p-md-5 bg-light">
              {/* <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center text-dark">Registration Form</h3> */}
  
              <form class="px-md-2" action="" method="post" onSubmit={handleForm}>
                <div class="form-outline mb-4">
                <label class="form-label text-dark" for="form3Example1q">Name</label>
                  <input type="text" id="form3Example1q" class="form-control" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                </div>
                <div class="form-outline mb-4">
                 <label class="form-label text-dark" for="form3Example1q">Price</label>
                    <input type="number" id="form3Example1q" class="form-control" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">image</label>
                    <input type="file" multiple id="form3Example1q" class="form-control" name="image" onChange={(e)=>{setFile(e.target.files)}} />
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Description</label>
                    <textarea id="form3Example1q" class="form-control" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
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
