import React from "react";
import { useScrollNavigation } from "../hooks/useScrollNavigation";
import ScrollIndicator from "./ScrollIndicator";

const ScrollNavigationWrapper = ({ children }) => {
  // Initialize scroll navigation within Router context
  useScrollNavigation();

  return (
    <>
      {children}
      <ScrollIndicator />
    </>
  );
};

export default ScrollNavigationWrapper; 