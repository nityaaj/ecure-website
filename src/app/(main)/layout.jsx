import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
