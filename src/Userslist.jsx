import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';



export default function Userslist(){
  const [flag,setFlag] = useState('home')
  const [users,setUsers] = useState([])
  const [editUser,setEditUser] = useState('')
  const [name,setName] = useState('')
  const [Age,setAge] = useState('')
  const [email,setEmail] = useState('')
  const [place,setPlace] = useState('')


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users`).then(({data})=>{
      setUsers(data)
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })
  }, [])

    function deleteUser(id){
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${id}`).then((res)=>{
      console.log(res);
      alert("Delete this user")
       window.location.reload()
    }).catch((err)=>{
      console.log(err);
      alert("something wrong")})
  }

  const submitForm = ()=>{
    console.log(name,Age,email,place);
    axios.put(`${process.env.REACT_APP_SERVER_URL}/users/${editUser._id}`,{
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
    {flag === 'home'? <>
    <h1 className='text-center'>UsersList</h1>
    <div>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className='text-light'>
          <th>UserName</th>
          <th>Age</th>
          <th>Place</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((res,i)=>{
          return (
            <tr key={i}>
            <td className='text-light'>{res.name}</td>
            <td className='text-light'>{res.Age}</td>
            <td className='text-light'>{res.place}</td>
            <td className='text-light'>{res.email}</td>
            <td><button className='btn btn-outline-primary w-75 mb-1' onClick={()=>{setFlag('editPage');setEditUser(res)}}>edit</button><br/>
              <button className='btn btn-outline-danger w-75' onClick={()=>deleteUser(res._id)}>delete</button>
                
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
    <h1>Edit User</h1>
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
                  <input type="text" id="form3Example1q" class="form-control" name="name" defaultValue={editUser.name} onChange={(e)=>{setName(e.target.value)}}  required/>
                </div>
                <div class="form-outline mb-4">
                 <label class="form-label text-dark" for="form3Example1q">Age</label>
                    <input type="number" id="form3Example1q" class="form-control" name="Age" defaultValue={editUser.Age} onChange={(e)=>{setAge(e.target.value)}}  required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Email</label>
                    <input type="email" id="form3Example1q" class="form-control" name="email" defaultValue={editUser.email} onChange={(e)=>{setEmail(e.target.value)}}  required/>
                  </div>
                  <div class="form-outline mb-4">
                  <label class="form-label text-dark" for="form3Example1q">Place</label>
                    <input type="text" id="form3Example1q" class="form-control" name="place" defaultValue={editUser.place} onChange={(e)=>{setPlace(e.target.value)}} required/>
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
    </>
  )
  }


