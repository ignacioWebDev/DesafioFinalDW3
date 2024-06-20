import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarProducto = () => {
const [producto, setproducto] = useState({});
const [name, setName] = useState('');
const [precio, setPrecio] = useState('');
const [imagen, setImagen] = useState('');
const { id } = useParams();
const navigate = useNavigate();
useEffect(() => {
// Llamar a la función para obtener los detalles del usuario
fetchUserDetails();
}, [id]);

const fetchUserDetails = async () => {
try {
const response = await fetch(`https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos/${id}`);
const data = await response.json();
setproducto(data);
setName(data.name);
setPrecio(data.precio);
setImagen(data.imagen)
} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

const handleUpdate = async () => {
try {
const response = await fetch(`https://664bfe9435bbda10987ea2c9.mockapi.io/users/productos/${id}`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ name, precio, imagen }),
});
if (response.ok) {
navigate(`/productos/${id}`);
} else {
console.error('Error al actualizar usuario');
}
} catch (error) {
console.error('Error en la solicitud: ', error);
}
};

return (
<div>
<h1>Editar Usuario</h1>
<label>Nombre: </label>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label>Precio: </label>
<input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
<br />

<label>Iamgen(url): </label>
<input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
<br />
<button onClick={handleUpdate}>Actualizar</button>
</div>
);
};

export default EditarProducto;