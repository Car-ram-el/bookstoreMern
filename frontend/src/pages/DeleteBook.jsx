import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import {useSnackbar} from 'notistack';

const DeleteBook = () => {
  const [loading,setLoading]=useState();
  const nav=useNavigate();
  const {id}=useParams();
  const {enqueueSnackbar}=useSnackbar();
  const func=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{setLoading(false); enqueueSnackbar('Book deleted.',{variant:'success'}); nav('/');})
    .catch((err)=>{setLoading(false); console.log(err); enqueueSnackbar('Error!',{variant:'error'});})
  }
  return (
    <div className=' p-4'>
      <BackButton/>
      <h1 className=' text-3xl my-4'>Delete the book:</h1>
      {loading?<Spinner/>:''}
      <div className=' flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8'>
        <h3 className=' text-2xl'>You sure you want to delete?</h3>
        <button className=' p-4 bg-red-600 text-white m-8 w-full' onClick={func}>Yes, delete.</button>
      </div>
    </div>
  )
}

export default DeleteBook