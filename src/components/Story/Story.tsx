import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Story.css";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story__eyebrow", {
        scrollTrigger: {
          trigger: ".story__content",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".story__title", {
        scrollTrigger: {
          trigger: ".story__content",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".story__text", {
        scrollTrigger: {
          trigger: ".story__content",
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".story__values li", {
        scrollTrigger: {
          trigger: ".story__values",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Parallax line
      gsap.to(".story__line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        width: "120px",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" className="story" ref={sectionRef}>
      <div className="story__bg-accent"></div>
      <div className="container story__container">
        <div className="story__content">
          <p className="story__eyebrow">Nuestra Esencia</p>
          <h2 className="story__title">
            Creamos joyas que cuentan
            <br />
            <em>historias eternas</em>
          </h2>
          <div className="story__line"></div>
          <p className="story__text">
            Desde 1987, Esperanza ha sido sinónimo de excelencia artesanal y
            visión creativa sin límites. Cada pieza es una constelación de
            maestría, donde metales preciosos y gemas extraordinarias se
            encuentran para crear obras que trascienden generaciones.
          </p>
          <p className="story__text">
            Nuestros maestros joyeros combinan técnicas centenarias con una
            estética contemporánea, creando piezas que habitan el espacio entre
            lo terrenal y lo celestial — joyas que no solo adornan, sino que
            transforman.
          </p>
        </div>

        <ul className="story__values">
          <li>
            <span className="story__value-number">01</span>
            <h3>Excelencia Artesanal</h3>
            <p>Más de 200 horas de trabajo manual en cada pieza maestra.</p>
          </li>
          <li>
            <span className="story__value-number">02</span>
            <h3>Gemas Excepcionales</h3>
            <p>Solo el 0.1% de los diamantes del mundo cumplen nuestro estándar.</p>
          </li>
          <li>
            <span className="story__value-number">03</span>
            <h3>Legado Intemporal</h3>
            <p>Diseños que trascienden modas y se heredan entre generaciones.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
