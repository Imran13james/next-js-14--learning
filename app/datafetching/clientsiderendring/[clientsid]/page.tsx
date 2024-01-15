'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Products {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    category: string;
    discountPercentage: number;
    thumbnail: string;
    brand: string;
    images: string[];
}

export default function Page({params}:{params:{clientsid:string}}) {
    const [productsData, setProductsData] = useState<Products[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Added for error handling
    const [id, setId] = useState<number | null>(null); // Added state for product ID
    const router = useRouter()
    useEffect(() => {
        const id = params.clientsid
        console.log(id)
        if (!id) {
            return; // Don't fetch if no ID is set
        }
        const fetchData = async (id:any) => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                console.log(response.url)
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const fetchedData: Products = await response.json(); // Assuming a single product
                setProductsData([fetchedData]); // Store the fetched product in an array
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch products. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
    
            fetchData(id); // Fetch data if ID is present

    }, [id]); // Run the effect when ID changes

    return (
        <>
            {error ? (
                <h1>{error}</h1>
            ) : isLoading ? (
                <h1>Loading products...</h1>
            ) : productsData ? (
                <ul>
                    {productsData.map((product: Products) => (
                        <li key={product.id} className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.title}</h2>
                                <div className="grid grid-cols-1 py-5 justify-center">
                                    <p className="btn btn-primary  py-5">{product.description}</p>
                                    <p className="btn btn-primary py-5">Price: ${product.price}</p>
                                    <p className="btn btn-primary py-5">discountPercentage: {product.discountPercentage}</p>
                                    <p className="btn btn-primary py-5">Rating: {product.rating}</p>
                                    <p className="btn btn-primary py-5">stock: {product.stock}</p>
                                    <p className="btn btn-primary py-5">category: {product.category}</p>
                                    <p className="btn btn-primary py-5">brand: {product.brand}</p>
                                    <p className="btn btn-primary py-5">thumbnail: {product.thumbnail}</p>
                                    <p className="btn btn-primary py-5">Rating: {product.rating}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1>No products found.</h1>
            )}
        </>
    );
}
// client side rendring

