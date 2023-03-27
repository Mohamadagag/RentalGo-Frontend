import React from "react";
import "./Cars.css";
import CarList from "../../Components/Carlist/Carlist";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Cars() {
  return (
    <>
      <Navbar />
      <CarList />
      <Footer />
    </>
  );
}

export default Cars;
