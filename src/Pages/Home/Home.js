import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarImage from "../../Images/image 1.png";
import Suv from "../../Images/suv.jpg";
import Convertable from "../../Images/convertable.jpg";
import Luxury from "../../Images/luxury.jpg";
import Truck from "../../Images/truck.jpg";
import Sport from "../../Images/sport.jpg";
import axios from "axios";
import Car from "../../Components/Car/Car";
export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getLastSix();
  }, []);
  const getLastSix = async () => {
    const res = await axios.get("http://localhost:4000/api/car/getFirstEight");
    try {
      setCars(res.data.response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Header />
      <div className="home-conatianer">
        <div className="intro">
          <div className="left">
            <div>
              <h1>Invite our cars to your life</h1>
            </div>
            <div>
              <span>100+</span>
              <p>cars</p>
              <span>100+</span>
              <p>locations</p>
            </div>
          </div>
          <div className="right">
            <img src={CarImage} alt="Car" />
          </div>
        </div>
        <h1 className="browse-text car-types-text">Browse cars by type</h1>

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
        <h1 className="browse-text">Latest cars</h1>
        <div className="last-added-section">
          {cars &&
            cars.map((e, id) => {
              return (
                <Car
                  key={e._id}
                  id={e._id}
                  carImage={e.image[0]}
                  name={e.name}
                  rating={e.rating}
                  price={e.price}
                />
              );
            })}
        </div>
      </div>

      <Footer />
    </>
  );
}
