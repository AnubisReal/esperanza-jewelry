import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background transition from white to dark space
      gsap.to(".experience", {
        scrollTrigger: {
          trigger: ".experience",
          start: "top 60%",
          end: "top 10%",
          scrub: 1,
        },
        backgroundColor: "#050510",
      });

      // Title reveal
      gsap.from(".experience__title", {
        scrollTrigger: {
          trigger: ".experience__content",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      // Floating jewels
      gsap.utils.toArray<HTMLElement>(".experience__jewel").forEach((jewel, i) => {
        gsap.from(jewel, {
          scrollTrigger: {
            trigger: ".experience__universe",
            start: "top 70%",
          },
          scale: 0,
          opacity: 0,
          duration: 1.2,
          delay: i * 0.2,
          ease: "elastic.out(1, 0.5)",
        });

        // Continuous floating
        gsap.to(jewel, {
          y: `random(-30, 30)`,
          x: `random(-20, 20)`,
          rotation: `random(-5, 5)`,
          duration: `random(4, 7)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });

      // Stars animation
      gsap.from(".experience__star", {
        scrollTrigger: {
          trigger: ".experience__universe",
          start: "top 60%",
        },
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: {
          each: 0.05,
          from: "random",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience__content container">
        <p className="experience__eyebrow">La Experiencia</p>
        <h2 className="experience__title">
          Joyas que habitan
          <br />
          <em>entre las estrellas</em>
        </h2>
        <p className="experience__text">
          Una experiencia que trasciende lo terrenal. Donde cada pieza cobra vida
          propia, flotando en el silencio infinito del espacio, revelando su
          verdadera esencia luminosa.
        </p>
      </div>

      <div className="experience__universe">
        {/* Floating jewels */}
        <div className="experience__jewel experience__jewel--1">💎</div>
        <div className="experience__jewel experience__jewel--2">✨</div>
        <div className="experience__jewel experience__jewel--3">💙</div>
        <div className="experience__jewel experience__jewel--4">💠</div>
        <div className="experience__jewel experience__jewel--5">👑</div>

        {/* Stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="experience__star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          ></span>
        ))}

        {/* Nebula accents */}
        <div className="experience__nebula experience__nebula--1"></div>
        <div className="experience__nebula experience__nebula--2"></div>
      </div>
    </section>
  );
}
