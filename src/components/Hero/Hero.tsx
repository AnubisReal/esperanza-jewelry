import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../../assets/hero.jpeg";
import { products } from "../../data/products";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero__bg-blur", {
        backdropFilter: "blur(20px)",
        webkitBackdropFilter: "blur(20px)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".hero__spacer",
          start: "bottom 100%",
          end: "bottom 0%",
          scrub: 0.3,
        },
      });

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".products__header",
          start: "top 90%",
          end: "top 50%",
          scrub: 0.5,
        },
      });

      headerTl
        .from(".products__label", { y: 30, opacity: 0, duration: 0.3 })
        .from(".products__title-thin", { y: 30, opacity: 0, duration: 0.3 }, "-=0.1")
        .from(".products__title-bold", { y: 50, opacity: 0, scale: 0.9, duration: 0.4 }, "-=0.1")
        .from(".products__tagline", { y: 20, opacity: 0, duration: 0.3 }, "-=0.1");

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero__products",
          start: "top 90%",
          end: "top 40%",
          scrub: 0.5,
        },
      });

      cardsTl.from(".product-card", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__bg">
        <img src={heroImage} alt="" className="hero__bg-image" />
        <div className="hero__bg-overlay"></div>
        <div className="hero__bg-blur"></div>
      </div>

      <div className="hero__spacer"></div>

      <div className="products__header">
        <span className="products__label">Exclusivo</span>
        <h2 className="products__title">
          <span className="products__title-thin">Nuestras</span>
          <span className="products__title-bold">Creaciones</span>
        </h2>
        <p className="products__tagline">El arte de lo eterno</p>
      </div>

      <div className="hero__products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card__inner">
              <div className="product-card__img">
                <img src={product.image} alt={product.name} />
                <div className="product-card__shimmer"></div>
              </div>

              <div className="product-card__content">
                <span className="product-card__id">
                  {String(product.id).padStart(2, "0")}
                </span>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__type">{product.type}</p>
                <p className="product-card__material">{product.material}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.price}</span>
                  <span className="product-card__cta">Contáctame</span>
                </div>
              </div>

              <div className="product-card__corner product-card__corner--tl"></div>
              <div className="product-card__corner product-card__corner--br"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
