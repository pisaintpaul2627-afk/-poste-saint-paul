import React from "react";
import { Link } from "react-router-dom";
import "./PageHome.css";

export const PageHome = () => (
  <main className="home-page">
    <section className="home-hero">
      <div className="home-hero-inner">
        <p className="home-kicker">20e Saint-Paul · Ixelles</p>
        <h1>Poste Pionnier<br/>Saint-Paul</h1>
        <p className="home-intro">Soutenez notre projet pionnier en participant à nos ventes de vins, saumons et sapins.</p>
        <Link to="/vins" className="home-primary-button">Découvrir nos ventes</Link>
      </div>
    </section>

    <section className="home-sales">
      <div className="home-section-heading">
        <p>Nos ventes</p>
        <h2>Un achat qui soutient directement notre projet</h2>
      </div>
      <div className="sales-grid">
        <Link to="/vins" className="sale-card sale-card-wine">
          <span className="sale-number">01</span><div><h3>Vins</h3><p>Découvrez notre sélection de bouteilles.</p><span className="sale-link">Voir la sélection →</span></div>
        </Link>
        <Link to="/saumons" className="sale-card sale-card-salmon">
          <span className="sale-number">02</span><div><h3>Saumons</h3><p>Notre vente de saumons arrive bientôt.</p><span className="sale-link">Découvrir →</span></div>
        </Link>
        <Link to="/sapins" className="sale-card sale-card-tree">
          <span className="sale-number">03</span><div><h3>Sapins</h3><p>Préparez les fêtes tout en soutenant le poste.</p><span className="sale-link">Découvrir →</span></div>
        </Link>
      </div>
    </section>

    <section className="home-about">
      <p className="home-kicker">Notre poste</p>
      <h2>Plus qu’une vente,<br/>un projet à construire ensemble.</h2>
      <p>Nous sommes les Pionniers de la 20e Saint-Paul à Ixelles. Les bénéfices de ces ventes contribuent au financement de notre projet pionnier. Nous ajouterons prochainement ici des photos et davantage d’informations sur notre aventure.</p>
    </section>
  </main>
);
