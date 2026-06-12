import { useRef, useState } from "react";
import gsap from "gsap";
import type { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      y: -8,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(cardRef.current.querySelector(".product-card__glow"), {
      opacity: 1,
      duration: 0.6,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(cardRef.current.querySelector(".product-card__glow"), {
      opacity: 0,
      duration: 0.6,
    });
  };

  return (
    <div
      className={`product-card ${isExpanded ? "product-card--expanded" : ""}`}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-card__glow"></div>

      <div className="product-card__visual">
        <div
          className="product-card__image"
          style={{ background: `radial-gradient(circle, ${product.accent}22 0%, transparent 70%)` }}
        >
          <span className="product-card__emoji">{product.image}</span>
        </div>
        <div className="product-card__shine"></div>
      </div>

      <div className="product-card__info">
        <span className="product-card__number">
          {String(product.id).padStart(2, "0")}
        </span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__subtitle">{product.subtitle}</p>
        <p className="product-card__price">
          {product.price.toLocaleString("es-ES")} €
        </p>
      </div>

      <div className="product-card__expand">
        <button
          className="product-card__btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={`Ver detalles de ${product.name}`}
        >
          {isExpanded ? "Cerrar" : "Descubrir"}
        </button>
      </div>

      {isExpanded && (
        <div className="product-card__details">
          <p className="product-card__description">{product.description}</p>
          <ul className="product-card__specs">
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
