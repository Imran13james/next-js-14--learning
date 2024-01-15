'use client'

import { useRouter } from "next/navigation";

export default function DynamicNested({params}:{params:{nesteddynid:string }}){
    const router = useRouter()
    return(
        <>
        <button className="btn w-64 rounded-full">{params.nesteddynid}</button>
        </>
    )
}