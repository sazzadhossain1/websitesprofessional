import React from "react";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const Analytics = () => {
  useEffect(() => {
    // ReactGA.initialize("G-ZMWGW69G3E");
    // ReactGA.initialize("G-Z73B4TCWNP");
    ReactGA.initialize("G-G6LDB4E5QW");
  }, []);
  return null;
};

export default Analytics;
