import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';



export default function Productlist(){
  const [flag,setFlag] = useState('home')
  const [products,setProducts] = useState([])
  const [editProducts,setEditProducts] = useState('')
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  // const [image,setImage] = useState('')
  const [description,setDescription] = useState('')
  const [viewProduct,setViewProduct] = useState('')
  const [file,setFile] =useState([])


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/products`).then(({data})=>{
      setProducts(data)
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })
  }, [])


    function deleteProduct(id){
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/products/${id}`).then((res)=>{
      console.log(res);
      alert("Delete this product")
       window.location.reload()
    }).catch((err)=>{
      console.log(err);
      alert("something wrong")})
  }

  const submitForm = ()=>{
    console.log(name,price,file,description);
    axios.put(`${process.env.REACT_APP_SERVER_URL}/products/${editProducts._id}`,{
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
    {flag === 'home'? <>
    <h1 className='text-center'>Product List</h1>
    <div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className='text-light'>
          <th>ProductName</th>
          <th>Image</th>
          <th>Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((res,i)=>{
          return (
            <tr key={i}>
            <td className='text-light'>{res.name}</td>
            <td className=''>{res.file}</td>
            <td className='text-light'>{res.price}</td>
            <td className='text-light'>{res.description}</td>
            <td><button className='btn btn-outline-primary w-75 mb-1' onClick={()=>{setFlag('editPage');setEditProducts(res)}}>edit</button><br/>
            <button className='btn btn-outline-danger w-75' onClick={()=>{setFlag('viewProduct');setViewProduct(res)}}>View</button>
              <button className='btn btn-outline-danger w-75' onClick={()=>deleteProduct(res._id)}>delete</button>
            </td>
          </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
    </>: ''}


    {flag === 'editPage' ? <>
    <div>
    <h1>Edit Product</h1>
    <section class="h-100 h-custom" style={{backgroundColor:"#8fc4b7;"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <img src="https://i.pinimg.com/736x/7a/60/81/7a608125eea5ecb7e8fb689da25ab358.jpg" class="w-100" alt=""/>
            <div class="card-body p-4 p-md-5 bg-light">
  
              <form class="px-md-2" action="" onSubmit={submitForm}>
                <div class="form-outline mb-4">
                <label class="form-label text-dark" for="form3Example1q">Name</label>
                  <input type="text" id="form3Example1q" class="form-control" name="name" defaultValue={editProducts.name} onChange={(e)=>{setName(e.target.value)}}  required/>
                </div>
                <div class="form-outline mb-4">
                 <label class="form-label text-dark" for="form3Example1q">Price</label>
                    <input type="number" id="form3Example1q" class="form-control" name="price" defaultValue={editProducts.price} onChange={(e)=>{setPrice(e.target.value)}}  required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Image</label>
                    <input type="file" id="form3Example1q" class="form-control" name="image" defaultValue={editProducts.file} onChange={(e)=>{setFile(e.target.files)}}  required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Description</label>
                    <textarea id="form3Example1q" class="form-control" name="description" defaultValue={editProducts.description} onChange={(e)=>{setDescription(e.target.value)}} required/>
                  </div>
               
                <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>
  
              </form>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
    </>:''}

{flag === 'viewProduct' ? <>
        <div>
        <h2 className='text-center'>View Product</h2>
        <div className="card" style={{width: "18rem;"}}>
        <img src={viewProduct.image} className="card-img-top" alt="product image"/>
        <div className="card-body">
          <h5 className="card-title">{viewProduct.name}</h5>
          <h6 className='card-text'>{viewProduct.price}</h6>
          <h6 className='card-text'>{viewProduct.description}</h6>
          <a href="" className="btn btn-primary">Buy Now</a>
        </div>
      </div>
        </div>
    
    </>:''}


    </>
    )    
  }


