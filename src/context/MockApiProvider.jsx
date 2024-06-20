import { createContext, useState, useEffect } from 'react';

export const MockApiContext = createContext();

const MockApiProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://6655eede3c1d3b60293ba572.mockapi.io/Products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const createProduct = async (newProduct) => {
        try {
            setLoading(true);
            const response = await fetch('https://6655eede3c1d3b60293ba572.mockapi.io/Products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) {
                throw new Error('Failed to create product');
            }
            const result = await response.json();
            setData([...data, result]);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = async (productId, updatedProduct) => {
        try {
            setLoading(true);
            const response = await fetch(`https://6655eede3c1d3b60293ba572.mockapi.io/Products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            const updatedData = data.map((product) =>
                product.id === productId ? { ...product, ...updatedProduct } : product
            );
            setData(updatedData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            setLoading(true);
            const response = await fetch(`https://6655eede3c1d3b60293ba572.mockapi.io/Products/${productId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            const updatedData = data.filter((product) => product.id !== productId);
            setData(updatedData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {
        data,
        loading,
        error,
        createProduct,
        updateProduct,
        deleteProduct,
    };

    return (
        <MockApiContext.Provider value={contextValue}>
            {children}
        </MockApiContext.Provider>
    );
};

export default MockApiProvider;
