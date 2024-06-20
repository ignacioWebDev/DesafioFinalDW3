import { useState, useContext } from 'react';
import { MockApiContext } from '../context/MockApiProvider';
import '../App.css';

const AddProduct = () => {
    const { createProduct } = useContext(MockApiContext);
    const [imageUrl, setImageUrl] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newProduct = {
            id: Math.random().toString(36).substr(2, 9),
            name: formData.get('name'),
            price: parseFloat(formData.get('price')),
            img: imageUrl || 'fallback-image-url',
            avatar: formData.get('avatar') || 'avatar-url',
        };
        
        try {
            await createProduct(newProduct);
            setImageUrl('');
            e.target.reset();
            setSuccessMessage('Product added successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Failed to add product:', error);
            setSuccessMessage('Failed to add product. Please try again.');
        }
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <div className="add-product-container">
            <h1>Add New Cat</h1>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <form onSubmit={handleSubmit} className="product-form2">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" step="0.01" required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input type="url" id="image" name="image" value={imageUrl} onChange={handleImageUrlChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar URL:</label>
                    <input type="url" id="avatar" name="avatar" />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
