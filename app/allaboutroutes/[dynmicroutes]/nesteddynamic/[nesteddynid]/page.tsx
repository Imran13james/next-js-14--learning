'use client'

import { useRouter } from "next/navigation";

export default function DynamicNested({params}:{params:{nesteddynid:string;dynmicroutes:string }}){
    const router = useRouter()
    return(
        <>
        <button className="btn w-64 rounded-full">{params.dynmicroutes}</button>
        <button className="btn w-64 rounded-full">{params.nesteddynid}</button>
        </>
    )
}