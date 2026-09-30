import React from "react";
import { Link } from "react-router-dom";
import "./PageComingSoon.css";
export const PageComingSoon = ({title}) => <main className="coming-page"><p>Vente du poste</p><h1>{title}</h1><div className="coming-line"/><p className="coming-copy">Cette vente sera ajoutée prochainement. La page est déjà prête à accueillir les produits.</p><Link to="/" className="coming-back">← Retour à l’accueil</Link></main>;
