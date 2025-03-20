"use client"
import React, { useState } from "react";

export default function Home() {

  const [name,setName]= useState("Suppu");


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/flower.jpg')] bg-cover bg-center ">
     <h1 className="text-xl font-bold">Happiest Birthday to the most beautiful girl I have seen!!</h1>
     <h1 className="font-bold">Happy Birthday {name} </h1>
    </div>
  );
}
