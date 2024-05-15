import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../store/reducers/userReducer';
import { toast } from 'react-toastify';

const Cards = (props) => {
    const dispatch = useDispatch();
    const { Username, Useremail, Usercontact, Userid } = props.state;

    const DeleteHandler = (Userid) => {
        dispatch(deleteUser(Userid));
        toast.success("User Deleted Successfully!", {
            autoClose: 2000,
            hideProgressBar: true,
        });
    }

    return (
        <div className='w-64 h-80 rounded shadow-lg shadow-zinc-600 flex flex-col items-center justify-center gap-5'>
            <h1 className='text-xl font-medium'>User Details</h1>
            <h1 className='text-base'>Name: {Username}</h1>
            <h1 className='text-sm'>Email: {Useremail}</h1>
            <h1 className='text-base'>Contact: {Usercontact}</h1>
            <button onClick={() => DeleteHandler(Userid)} className='px-6 py-2 bg-red-700 font-medium rounded'>Delete</button>
        </div>
    )
}

export default Cards