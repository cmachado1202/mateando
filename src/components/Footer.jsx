import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="pie-tienda"><div className="contenedor pie-interior">
    <div><Link className="firma" to="/">Mateando</Link><p>Buenos Aires, Argentina</p></div>
    <div className="pie-credito"><strong>Carolina Machado</strong><p>Proyecto final de React · 2026</p><small>Tienda educativa. Sin ventas reales.</small></div>
  </div></footer>;
}
