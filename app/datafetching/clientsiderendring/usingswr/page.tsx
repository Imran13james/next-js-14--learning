'use client'
import Link from "next/link";
import useSWR from "swr"

const baseUrl = "https://jsonplaceholder.typicode.com/todos";
// here was the error that Expected 1-2 arguments, but got 0.
const fetcher = (...args:[input: RequestInfo, init?: RequestInit | undefined]) => fetch(...args).then(res => res.json())

export default function FetchUsingswr() {
    const { data, error } = useSWR(baseUrl, fetcher)
    if (error) {
        return <div> An error in useSWR</div>
    }
    if (!data) {
        return <div>...loading</div>
    }
    return (
        <>
            {
                error ? (
                    <h1>{error}</h1>
                ) : !data ? (
                    <h1>products are loading</h1>
                ) : data ? (
                    data.map((data: any) => {
                return  <Link href={`/datafetching/clientsiderendring/usingswr/${data.id}`} key={data.id} className="tooltip tooltip-open tooltip-warning" >

                            <li className="btn btn-warning">{data.userId}</li>
                            

                        </Link>

                    })
                ) : null
            }
        </>
    )
}