import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDets } from '../store/reducers/userReducer';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [contact, setcontact] = useState("")


  const SubmitHandler = (e) => {
    e.preventDefault();
    const id = nanoid();
    dispatch(userDets({ Username: name, Useremail: email, Usercontact: contact, Userid: id }));
    toast.success("User Created Successfully!",{
      autoClose: 2000,
      hideProgressBar: true,
    });
    navigate("/userinfo")
  }

  return (
    <div className='w-full h-[90.6vh] flex items-center justify-center'>
      <form onSubmit={SubmitHandler} className='w-80 h-4/5 rounded-lg border-2 border-fuchsia-700 flex flex-col items-center justify-center gap-10'>
        <h1 className='text-xl font-medium border-b-2 border-black w-56 text-center'>Enter Your Details</h1>
        <input className='bg-zinc-300 w-64 h-10 px-4 rounded font-medium outline-none border-2 border-fuchsia-700 placeholder:text-zinc-600' onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder="Enter name" />
        <input className='bg-zinc-300 w-64 h-10 px-4 rounded font-medium outline-none border-2 border-fuchsia-700 placeholder:text-zinc-600' onChange={(e) => setemail(e.target.value)} value={email} type="email" placeholder="Enter email" />
        <input className='contact bg-zinc-300 w-64 h-10 px-4 rounded font-medium outline-none border-2 border-fuchsia-700 placeholder:text-zinc-600' onChange={(e) => setcontact(e.target.value)} value={contact} type="number" placeholder="Enter Contact number" />
        <button className='px-8 py-2 bg-fuchsia-800 font-medium rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Register