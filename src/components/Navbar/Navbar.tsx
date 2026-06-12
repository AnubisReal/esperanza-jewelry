import { useEffect, useRef } from "react";
import "./Navbar.css";

interface NavbarProps {
  onCollectionClick: () => void;
}

export default function Navbar({ onCollectionClick }: NavbarProps) {
  const [hidden, setHidden] = [false, (_: boolean) => {}];
  const lastScroll = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (navRef.current) {
        if (current > lastScroll.current && current > 80) {
          navRef.current.classList.add("navbar--hidden");
        } else {
          navRef.current.classList.remove("navbar--hidden");
        }
      }
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar__inner">
        <div className="navbar__brand">
          <span className="navbar__logo">ESPERANZA</span>
          <span className="navbar__tagline">Jewelry</span>
        </div>
        <nav className="navbar__links">
          <button onClick={onCollectionClick}>Colección</button>
          <a href="tel:+1213756642">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
