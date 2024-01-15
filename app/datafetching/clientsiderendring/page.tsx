'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Products {
    id: number;
    title: string;
}

export default function Page() {
    const [productsData, setProductsData] = useState<Products[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // Added for error handling
      const router = useRouter
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products`);
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const fetchedData:{ products: Products[] }= await response.json(); // Adjust type
                setProductsData(fetchedData.products); // Access the 'products' array correctly
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch products. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {error ? (
                <h1>{error}</h1>
            ) : isLoading ? (
                <h1>Loading products...</h1>
            ) : productsData ? (
                <ul>
                    {productsData.map((product: Products) => (
                        <Link key={product.id} href={`/datafetching/clientsiderendring/${product.id}`} className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.title}</h2>
                            </div>
                        </Link>
                    ))}
                </ul>
            ) : (
                <h1>No products found.</h1>
            )}
        </>
    );
}
// client side rendring
