import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ringImg from "../../assets/products/ring.jpeg";
import braceletImg from "../../assets/products/bracelet.jpeg";
import necklaceImg from "../../assets/products/necklace.jpeg";
import earringsImg from "../../assets/products/earrings.jpeg";
import "./Products.css";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Solstice", type: "Anillo Solitario", price: "600 €", image: ringImg },
  { id: 2, name: "Lumière", type: "Pulsera de Diamantes", price: "1.000 €", image: braceletImg },
  { id: 3, name: "Celestia", type: "Collar con Zafiro", price: "1.500 €", image: necklaceImg },
  { id: 4, name: "Éternité", type: "Pendientes de Diamantes", price: "2.000 €", image: earringsImg },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".product-item").forEach((item) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="products" ref={sectionRef}>
      <div className="products__grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-item__image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-item__image"
              />
            </div>
            <div className="product-item__info">
              <h3 className="product-item__name">{product.name}</h3>
              <p className="product-item__type">{product.type}</p>
              <p className="product-item__price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
