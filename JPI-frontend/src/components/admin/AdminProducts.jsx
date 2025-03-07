import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminProducts.css';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        isActive: true,
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin/products`);
            setProducts(response.data);
        } catch (error) {
            alert('Failed to fetch products.');
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/admin/products/${id}`);
            fetchProducts();
        }
    };

    const handleEdit = (product) => {
        setEditingProduct({ ...product });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct({ ...editingProduct, [name]: name === 'isActive' ? value === 'true' : value });
    };

    const handleSave = async () => {
        await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/admin/products/${editingProduct._id}`, editingProduct);
        setEditingProduct(null);
        fetchProducts();
    };

    const handleNewProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: name === 'isActive' ? value === 'true' : value });
    };

    const handleAddProduct = async () => {
        if (!newProduct.name || !newProduct.description || !newProduct.price || !selectedFile) {
            alert('Please fill all fields and upload an image');
            return;
        }

        const formData = new FormData();
        formData.append('name', newProduct.name);
        formData.append('description', newProduct.description);
        formData.append('price', newProduct.price);
        formData.append('isActive', newProduct.isActive);
        formData.append('image', selectedFile);

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/admin/products`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        setNewProduct({ name: '', description: '', price: '', isActive: true });
        setSelectedFile(null);
        fetchProducts();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setSelectedFile(file);
        } else {
            alert('Only JPG or PNG files are allowed');
        }
    };

    return (
        <div className="admin-products">
            <h2>Manage Products</h2>

            <div className="add-product-form">
                <h3>Add Product</h3>
                <input name="name" value={newProduct.name} onChange={handleNewProductChange} placeholder="Name" />
                <input name="description" value={newProduct.description} onChange={handleNewProductChange} placeholder="Description" />
                <input name="price" type="number" value={newProduct.price} onChange={handleNewProductChange} placeholder="Price" />
                <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
                <select name="isActive" value={newProduct.isActive} onChange={handleNewProductChange}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <button onClick={handleAddProduct}>Add Product</button>
            </div>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>₹{product.price}</td>
                            <td>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}${product.imageUrl}`} alt={product.name} width="50" />
                            </td>
                            <td>{product.isActive ? 'Active' : 'Inactive'}</td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingProduct && (
                <div className="edit-modal">
                    <h3>Edit Product</h3>
                    <input name="name" value={editingProduct.name} onChange={handleEditChange} />
                    <input name="description" value={editingProduct.description} onChange={handleEditChange} />
                    <input name="price" type="number" value={editingProduct.price} onChange={handleEditChange} />
                    <input name="imageUrl" value={editingProduct.imageUrl} onChange={handleEditChange} />
                    <select name="isActive" value={editingProduct.isActive} onChange={handleEditChange}>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditingProduct(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
