import { useEffect } from 'react';
import { useState } from 'react';

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const UseEffect = () => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const result = await response.json();
                setData(result.products);

            } catch (error) {
                console.log('Error ------------>>404', error);
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            {data.length > 0 ? (
                data.map((product) => (
                <div key={product.id}>
                    <p>ID: {product.id}</p>
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Discount Percentage: {product.discountPercentage}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Category: {product.category}</p>
                        <p>Thumbnail:</p>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <p>Images:</p>
                            {product.images.map((image, index) => (
                                <img key={index} src={image} alt={`${product.title} - ${index}`} />
                            ))}
                        </div>

                </div>
            ))) : <p>Loading...</p>}
        </div>

    )
}

export default UseEffect