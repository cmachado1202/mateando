# Recorrido para la presentación de Mateando

1. Abrí el catálogo y buscá «calabaza». Mostrá cómo se combinan la búsqueda y el filtro de categoría.
2. Entrá al detalle, agregá un mate y abrí el carrito. Cambiá la cantidad, comprobá el total y quitá el producto.
3. Abrí la ruta de gestión sin sesión. La aplicación te lleva al ingreso.
4. Con una cuenta de gestión, creá un artículo de prueba con nombre, precio y stock. Verificá que aparezca en el catálogo, editá el precio y eliminá el artículo desde el modal.
5. Cerrá sesión. Las cuentas comunes pueden registrarse e ingresar. Firestore reserva la escritura del catálogo para gestores.

## Cómo está hecho

React Router maneja las vistas. CarritoContext comparte productos y cantidades entre catálogo, detalle, contador y carrito. AuthContext escucha los cambios de sesión de Firebase. El catálogo se actualiza en tiempo real desde Firestore. La grilla cambia según el ancho de pantalla y la búsqueda pagina a partir de 13 resultados.
