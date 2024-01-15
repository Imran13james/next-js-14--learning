'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page(){
    const [data ,usedata] = useState(null)
    const [isloading,issetloading] = useState(true)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data)=>{
            usedata(data)
            issetloading(false)
        })
    },[])
    const router = useRouter()
    if(isloading) return <h1>...loading data</h1>
if(!data) return <h1>not data been found</h1>
    return(
        <>
        
        <h1>page not found </h1>
        </>
    )
}