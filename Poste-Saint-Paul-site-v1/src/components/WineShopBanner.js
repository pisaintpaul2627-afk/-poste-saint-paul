import React from "react";

import "./WineShopBanner.css";

function WineShopBanner() {
  return (
    <div className="banner-block">
      <div className="banner-shadow-block">
        <div className="banner-text-wrap">
          <div className="banner-title-text">
          Notre sélection de vins<br />
pour soutenir le poste
            <div className="banner-title-shadow-text">
            Notre sélection de vins<br />
pour soutenir le poste
            </div>
          </div>
          <div className="banner-slogan-shadow-block"></div>
          <div className="banner-slogan-block">
            <span className="banner-slogan-text">20e Saint-Paul</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineShopBanner;