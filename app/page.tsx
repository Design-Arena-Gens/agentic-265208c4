"use client";

import { useMemo } from "react";

const moodBoard = [
  "Luz cálida de golden hour",
  "Elegancia urbana y moderna",
  "Confianza creativa",
  "Suavidad hiperrealista",
  "Versatilidad para marcas digitales"
];

export default function Home() {
  const highlights = useMemo(
    () => [
      { label: "Estilo", value: "Moderno, elegante, toques rebeldes" },
      { label: "Personalidad", value: "Segura, creativa, sofisticada" },
      { label: "Contexto", value: "Parque urbano durante golden hour" }
    ],
    []
  );

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__visual">
          <div className="hero__aurora" aria-hidden="true" />
          <div className="portrait" aria-hidden="true">
            <div className="portrait__backlight" />
            <div className="portrait__hair" />
            <div className="portrait__face" />
            <div className="portrait__cheek" />
            <div className="portrait__nose" />
            <div className="portrait__brow" />
            <div className="portrait__eye portrait__eye--left" />
            <div className="portrait__eye portrait__eye--right" />
            <div className="portrait__lip" />
            <div className="portrait__neck" />
            <div className="portrait__shirt" />
          </div>
          <div className="hero__flare" aria-hidden="true" />
        </div>
        <div className="hero__content">
          <span className="hero__tag">Golden Hour Muse</span>
          <h1>
            Retrato hiperrealista de una mujer joven segura y sofisticada
          </h1>
          <p>
            Perfil visual creado para representar a una influencer digital con
            estilo contemporáneo. Cabello corto castaño rojizo con volumen
            natural, mirada expresiva y luz cálida que resalta rasgos delicados
            frente a un parque urbano suavemente difuminado.
          </p>
          <dl className="hero__highlights">
            {highlights.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero__mood">
            <h2>Moodboard instantáneo</h2>
            <ul>
              {moodBoard.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
