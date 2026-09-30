import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./WineShopHeader.css";

function WineShopHeader() {

  const [itemsAmount, setItemsAmount] = useState(0);

  const itemsInCart = useSelector(state => state.wines.cart);

  const amount = itemsInCart.reduce( (r, v) => r + v.amount, 0);
  if (itemsAmount !== amount) {
    setItemsAmount(amount);
  };

  const memoizeedRenderResult = useMemo( () => {

    return (
      <header>
        <NavLink to="/" className="header-title"><span>20e</span> Saint-Paul</NavLink>
        <nav className="header-nav">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/vins">Vins</NavLink>
          <NavLink to="/saumons">Saumons</NavLink>
          <NavLink to="/sapins">Sapins</NavLink>
        </nav>
        <NavLink to="/cart" className="header-cart-link">
          <div className="header-cart-block">
            <div className="header-cart-text">Panier</div>
            <div className="header-cart-line"></div>
            <div className="header-cart-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.7L21 8H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1" fill="white"/><circle cx="18" cy="20" r="1" fill="white"/></svg>
              <div className={itemsAmount ? "header-cart-sticker" : "header-cart-sticker_hidden"}>{itemsAmount}</div>
            </div>
          </div>
        </NavLink>
      </header>
    );
  }, [itemsAmount]
  );

  return memoizeedRenderResult;
}

export default WineShopHeader;
