import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <RouterRoutes>
          <Route path="/" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Router>
    </>
  );
};

export default Routes;
