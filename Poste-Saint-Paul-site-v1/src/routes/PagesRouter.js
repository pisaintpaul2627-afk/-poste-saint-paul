import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageMain } from "../pages/PageMain";
import { PageCart } from "../pages/PageCart";
import { PageHome } from "../pages/PageHome";
import { PageComingSoon } from "../pages/PageComingSoon";

function PagesRouter(props) {
  const catalogue = <PageMain {...props} />;
  return <Routes>
    <Route path="/" element={<PageHome/>}/>
    <Route path="/vins" element={catalogue}/>
    <Route path="/saumons" element={<PageComingSoon title="Saumons"/>}/>
    <Route path="/sapins" element={<PageComingSoon title="Sapins"/>}/>
    <Route path="/cart" element={<PageCart/>}/>
  </Routes>;
}
export default PagesRouter;
