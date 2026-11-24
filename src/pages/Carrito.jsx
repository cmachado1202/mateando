import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from 'react-icons/fi';
import { useCarrito } from '../context/Carrito';
import { imagenProducto } from '../imagen';

const moneda = new Intl.NumberFormat('es-AR', {
  style: 'currency', currency: 'ARS', minimumFractionDigits: 0
});

export default function Carrito() {
  const { items, cantidad, agregar, restar, eliminar, vaciar } = useCarrito();
  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
  return <section className="seccion bolsa">
    <Link className="regresar" to="/productos"><FiArrowLeft /> Volver al catálogo</Link>
    <h1>Tu carrito</h1>
    {items.length ? <div className="bolsa-grid">
      <section className="bolsa-lista" aria-label="Productos agregados">
        <div className="bolsa-cab"><h2>Productos</h2><button className="texto-btn" onClick={vaciar}>Vaciar carrito</button></div>
        <ul>{items.map(p => <li key={p.id} className="bolsa-item">
          <Link className="miniatura" to={'/producto/' + p.id}><img src={imagenProducto(p.imagen)} alt={p.nombre} /></Link>
          <div className="linea-info"><small>{p.categoria}</small><h3>{p.nombre}</h3><span>{moneda.format(p.precio)} por unidad</span>
            <div className="unidades"><button disabled={p.cantidad <= 1} onClick={() => restar(p.id)} aria-label={'Restar una unidad de ' + p.nombre}><FiMinus /></button>
            <output aria-label="Cantidad">{p.cantidad}</output><button disabled={p.cantidad >= p.stock} onClick={() => agregar(p)} aria-label={'Sumar una unidad de ' + p.nombre}><FiPlus /></button></div>
          </div>
          <div className="importe"><strong>{moneda.format(p.precio * p.cantidad)}</strong><button className="texto-btn" aria-label={'Quitar ' + p.nombre} onClick={() => eliminar(p.id)}><FiTrash2 /> Quitar</button></div>
        </li>)}</ul>
      </section>
      <aside className="resumen"><h2>Resumen del carrito</h2><p><span>Unidades</span><span>{cantidad}</span></p>
        <div className="total"><span>Total</span><strong>{moneda.format(total)}</strong></div>
        <Link className="boton" to="/productos">Seguir explorando</Link>
      </aside>
    </div> : <div className="bolsa-vacia"><FiShoppingBag size={38} /><h2>Tu carrito está vacío</h2><Link className="boton" to="/productos">Explorar productos</Link></div>}
  </section>;
}
