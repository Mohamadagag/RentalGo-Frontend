import React from "react";
import "./HowItWorks.css";
import Header from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Howitworks from "../../Images/howitworks.png";
import Lines from "../../Images/lines.png";
import Suv from "../../Images/suv.jpg";
import Convertable from "../../Images/convertable.jpg";
import Luxury from "../../Images/luxury.jpg";
import Truck from "../../Images/truck.jpg";
import Sport from "../../Images/sport.jpg";

export default function HowItWorks() {
  return (
    <>
      <Header />
      <div className="howitworks-container">
        <div className="title">
          <h1>How RentalGo Works</h1>
        </div>
        <div className="flex-container">
          <div className="handOver">
            <img src={Howitworks} alt="How it works"></img>
          </div>
          <div className="steps">
            <div className="step1 step">
              <div>
                <span className="number">1</span>
              </div>
              <div>
                <h3 className="text">Find the perfect car</h3>
                <p className="text info">
                  Enter a location and date and browse thousands of cars shared
                  by local hosts.
                </p>
              </div>
            </div>

            <div className="step1 step">
              <div>
                <span className="number">2</span>
              </div>
              <div>
                <h3 className="text">Contact the owner</h3>
                <p className="text info">
                  After you choose a car that suits you, contact the owner for
                  more information.
                </p>
              </div>
            </div>

            <div className="step1 step">
              <div>
                <span className="number">3</span>
              </div>
              <div>
                <h3 className="text">Hit the road</h3>
                <p className="text info">
                  Have the car delivered or pick it up from your host , grab the
                  keys, and hit the road!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lines">
          <img src={Lines} alt="Lines" />
        </div>
        <div className="options">
          <h1>Endless options</h1>
          <h3>Browse the largest car sharing marketplace</h3>
          <p>
            Whether it's an SUV for a family road trip, a pickup truck for some
            errands, or a classic sports car for a special night out, find the
            perfect car for all kinds of occasions and budgets on RentalGo.
          </p>
        </div>
        <div className="browseByMake">
          <p className="browseByMake-p">Browse by type</p>
          <div className="types-container">
            <div className="type-card">
              <div>
                <img src={Suv} alt="Suv" className="suv" />
              </div>
              <p>Suv</p>
            </div>
            <div className="type-card">
              <div>
                <img src={Convertable} alt="Convertable" className="suv" />
              </div>
              <p>Convertable</p>
            </div>
            <div className="type-card">
              <div>
                <img src={Luxury} alt="Suv" className="suv" />
              </div>
              <p>Luxury</p>
            </div>
            <div className="type-card">
              <div>
                <img src={Truck} alt="Suv" className="suv" />
              </div>
              <p>Trucks</p>
            </div>
            <div className="type-card">
              <div>
                <img src={Sport} alt="Suv" className="suv" />
              </div>
              <p>Sport</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
