'use client'

import { useRouter } from "next/navigation"

export default function Page({ params }: { params: { dynmicroutes: string } }){
    const router = useRouter()
    return(
        <>
        
        <h1>hello this is my first dynamic routes <div className="text-bold"> {params.dynmicroutes}</div></h1>
        </>
    )
}