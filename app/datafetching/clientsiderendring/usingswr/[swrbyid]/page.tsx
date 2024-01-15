'use client'

import { useRouter } from "next/navigation";
import useSWR from "swr";
// Correct type for params
interface RouteParams {
    usingswr: string;
  }
const fetcher = (...args: [input: RequestInfo, init?: RequestInit | undefined]) => fetch(...args).then(res => res.json())

export default function SWRgetbyid({ params }: { params: RouteParams }) {
    const router = useRouter()
    const id = params.usingswr;
        console.log(id)
        const URL = `https://jsonplaceholder.typicode.com/todos/${id}`
    const { data, error } = useSWR(URL, fetcher);

    if (error) {
        return <div> An error in useSWR</div>
    }
    if (!id) {
        return;
    }
    if (!data) {
        return <div>...loading</div>
    }
    return (
        <></>
        // <>
        //     {
        //         error ? (
        //             <h1>{error}</h1>
        //         ) : !data ? (
        //             <h1>products are loading</h1>
        //         ) : data ? (
        //             data.map((data: any) => {
        //         return  <ul  key={data.id} className="tooltip tooltip-open tooltip-warning" >

        //                     <li className="btn btn-warning">{data.userId}</li>


        //                 </ul>

        //             })
        //         ) : null
        //     }
        // </>
    )
}
