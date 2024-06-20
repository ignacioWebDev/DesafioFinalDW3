
import { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { name, price, image, avatar };

        try {
            const response = await axios.post('https://6655eede3c1d3b60293ba572.mockapi.io/Products', newProduct);
            addProduct(response.data);
            setName('');
            setPrice('');
            setImage('');
            setAvatar('');
        } catch (error) {
            console.error("There was an error adding the product!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='title2'>Agregar un nuevo producto</h2>
            <div className='product-form'>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='product-form'>
                <label>Precio:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className='product-form'>
                <label>Imagen URL:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
            </div>
            <div className='product-form'>
                <label>Avatar URL:</label>
                <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} required />
            </div>
            <button className='btn-prod' type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductForm;
