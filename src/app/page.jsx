"use client"
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

const page = () => {

    const Router = useRouter();
    const gotomain = useCallback(()=>Router.replace("/home"));
  return (
<div className=" min-h-screen justify-items-center flex flex-col bg-[url('/homebg.jpg')] bg-cover bg-center " style={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: '0',
      }}>
    
    <div className='text-5xl font-bold mb-10 p-10'>Hai! Supriyaa</div>
    <div className='flex flex-row mt-10 '>
    <div className='p-5'><Button variant='contained' onClick={gotomain}>Say HI</Button></div>
      <div className='p-5'><Button variant="outlined" onClick={gotomain} > Ignore</Button></div>
      </div>
    </div>
   
  )
}

export default page