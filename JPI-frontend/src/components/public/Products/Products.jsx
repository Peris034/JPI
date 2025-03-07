import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`);
            const activeProducts = response.data.filter(product => product.isActive);
            setProducts(activeProducts);
        } catch (err) {
            setError('Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p className="loading-message">Loading products...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <section className="products-section">
            <h2 className="section-title">Our Products</h2>
            <div className="products-grid">
                {products.length === 0 ? (
                    <p className="no-products-message">No products available</p>
                ) : (
                    products.map(product => (
                        <div key={product._id} className="product-card">
                            <img className="product-image" src={`${process.env.REACT_APP_BACKEND_URL}${product.imageUrl}`} alt={product.name} />
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">₹{product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Products;
