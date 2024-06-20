import { useContext } from 'react';
import { MockApiContext } from '../context/MockApiProvider';
import '../App.css';

const Home = () => {
    const { data, loading, error, deleteProduct } = useContext(MockApiContext);

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Home Page</h1>
            <h2 style={{ margin: '10px', marginLeft: '20px' }}>Cats:</h2>
            <ul className="product-list" style={{ margin: '10px', display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                {data.map((product) => (
                    <li key={product.id} className="product-card" style={{ border: '1px solid black', padding: '10px', borderRadius: '15px' }}>
                        <p>ID: {product.id}</p>
                        <img src={product.img} alt={product.name} style={{ maxWidth: '200px', display: 'block', marginBottom: '10px' }} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <div>
                            <img src={product.avatar} alt={`Avatar of ${product.name}`} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                        </div>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
