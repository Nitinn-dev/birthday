"use client"
import React, { useState } from "react";

export default function Home() {

  const [name,setName]= useState("Suppu");


  return (
    <div className="items-center justify-items-center min-h-screen pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('/flower.jpg')] bg-cover bg-center ">
      <h1>Nuv elago IGNORE chesthav ani thelsu ley!</h1>
     <h1 className="text-xl font-bold">Happiest Birthday to the most beautiful girl I have seen!!</h1>
     <h1 className="font-bold">Happy Birthday {name}!! </h1>
    </div>
  );
}
