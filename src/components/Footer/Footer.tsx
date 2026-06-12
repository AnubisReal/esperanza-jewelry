import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">ESPERANZA</span>
          <span className="footer__tagline">Jewelry</span>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Esperanza Jewelry. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
