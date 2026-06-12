import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import "./Collection.css";

gsap.registerPlugin(ScrollTrigger);

export default function Collection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".collection__header", {
        scrollTrigger: {
          trigger: ".collection__header",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".collection__grid",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="collection" className="collection" ref={sectionRef}>
      <div className="container">
        <div className="collection__header">
          <p className="collection__eyebrow">La Colección</p>
          <h2 className="collection__title">
            Cinco piezas.
            <br />
            <em>Infinitas emociones.</em>
          </h2>
          <p className="collection__subtitle">
            Cada joya es una declaración de intención, un universo contenido en
            metal precioso y luz cristalizada.
          </p>
        </div>

        <div className="collection__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
