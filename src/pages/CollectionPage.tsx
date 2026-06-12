import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { products } from "../data/products";
import "../components/CollectionView/CollectionView.css";

export default function CollectionPage() {
  const navigate = useNavigate();
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let currentIndex = 0;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isScrolling) return;

      if (e.deltaY > 0 && currentIndex < products.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }

      isScrolling = true;
      gallery.scrollTo({ left: currentIndex * window.innerWidth, behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 600);
    };

    gallery.addEventListener("wheel", handleWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="collection-page">
      <div className="cv-header">
        <h2 className="cv-header__title"></h2>
        <button className="cv-header__close" onClick={() => navigate("/")}>
          ✕
        </button>
      </div>

      <div className="cv-gallery" ref={galleryRef}>
        {products.map((product) => (
          <div key={product.id} className="cv-item">
            <div className="cv-item__image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cv-item__info">
              <span className="cv-item__number">{String(product.id).padStart(2, "0")}</span>
              <h3 className="cv-item__name">{product.name}</h3>
              <p className="cv-item__type">{product.type}</p>
              <p className="cv-item__description">{product.description}</p>
              <p className="cv-item__material">{product.material}</p>
              <span className="cv-item__price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
