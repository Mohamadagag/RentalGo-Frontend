import React from "react";
import "./NotFound.css";
import Header from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="notFound-container">
        <div>
          4<span>0</span>4
        </div>
        <div>
          <p>THE PAGE YOU REQUESTED COULD NOT BE FOUND</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
