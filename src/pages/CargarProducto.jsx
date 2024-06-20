import React, { useContext, useState } from "react";
import Navegador from "../components/Navegador";
import { ProductosContext } from "../context/ProveedorProductos";
import Productos from "./Productos";

const CargarProducto = () => {
    const { agregarProducto, setProductos} = useContext(ProductosContext);
    const [nuevoProducto, setNuevoProducto] = useState({ precio: "", name: "", imagen: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

  

    const handleSubmitProducto = () => {
        // Validar y enviar el nuevo producto al servidor
        if (nuevoProducto.name.trim() === '' || nuevoProducto.precio.trim() === '' || nuevoProducto.imagen.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        fetch("https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        })
            .then((response) => response.json())
            .then((nuevoProductoCreado) => {
                // Agregar el producto creado al contexto
                agregarProducto(nuevoProductoCreado);
                // Limpiar los campos después de agregar el producto
                setNuevoProducto({ precio: "", name: "", imagen: "" });
                // Actualizar la lista de productos
                return fetch(url);
            })
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error(error.message));
    };

    return (
        <div>
            <h2>Agregar Producto</h2>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="name" value={nuevoProducto.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Precio:
                    <input type="text" name="precio" value={nuevoProducto.precio} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Imagen (url):
                    <input type="text" name="imagen" value={nuevoProducto.imagen} onChange={handleInputChange} />
                </label>
                <br />
                <button type="button" onClick={handleSubmitProducto}>
                    Cargar Producto
                </button>
            </form>
        </div>
    );
};

export default CargarProducto;