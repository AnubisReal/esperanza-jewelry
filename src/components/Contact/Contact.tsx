import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact__title", {
        scrollTrigger: {
          trigger: ".contact__inner",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".contact__item", {
        scrollTrigger: {
          trigger: ".contact__grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact__inner container">
        <p className="contact__eyebrow">Contacto</p>
        <h2 className="contact__title">
          Comienza tu historia
          <br />
          <em>con Esperanza</em>
        </h2>
        <p className="contact__subtitle">
          Agenda una cita privada en nuestro atelier para una experiencia
          personalizada e irrepetible.
        </p>

        <div className="contact__grid">
          <div className="contact__item">
            <span className="contact__icon">📍</span>
            <h3>Atelier</h3>
            <p>Paseo de Gracia 42, Barcelona</p>
            <p>España</p>
          </div>
          <div className="contact__item">
            <span className="contact__icon">📧</span>
            <h3>Email</h3>
            <p>concierge@esperanza.jewelry</p>
            <p>Respuesta en 24h</p>
          </div>
          <div className="contact__item">
            <span className="contact__icon">📞</span>
            <h3>Teléfono</h3>
            <p>+34 900 123 456</p>
            <p>Lun — Sáb, 10:00 — 20:00</p>
          </div>
        </div>

        <div className="contact__cta">
          <a href="mailto:concierge@esperanza.jewelry" className="btn btn--primary">
            Reservar Cita Privada
          </a>
        </div>
      </div>
    </section>
  );
}
