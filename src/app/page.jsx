"use client"
import { Alert, Button } from '@mui/material';
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { useState } from 'react';

const page = () => {

    const Router = useRouter();
    const gotomain = useCallback(()=>Router.replace("/home"));
    const gotoignore = useCallback(()=>Router.replace("/ignore"));

    const [alert,setAlert]=useState(false);
  return (
<div className=" min-h-screen justify-items-center flex flex-col bg-[url('/homebg.jpg')] bg-cover bg-center " style={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: '0',
      }}>
    
    <div className='text-5xl font-bold p-10'>Hai! Supriyaa</div>
    <div className='flex flex-row  '>
    <div className='p-5'><Button variant='contained' onClick={gotomain}>Say HI</Button></div>
      <div className='p-5'><Button variant="contained" onClick={()=>setAlert(true)} >Ignore</Button></div>
      </div>
      <div>
        {alert && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Are You Sure?</h2>
            <p className="text-gray-600 mt-2">Nijam ga Ignore Chesthunnava?</p>
            <div className='flex flex-row'>
            <button 
              onClick={gotoignore} 
              className="mt-4 bg-blue-500 text-white mr-5 px-4 py-2 rounded">
             Nooo
            </button>
            <button 
              onClick={gotoignore} 
              className="mt-4 bg-red-500 text-white ml-5 px-4 py-2 rounded">
              Ninnu Ignore Chesthana!
            </button>
            </div>
          </div>
        </div>)}
        </div>
        </div>
        
   
  )
}

export default page