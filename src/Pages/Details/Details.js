import React, { useEffect, useState } from "react";
import "./Details.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Details() {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [images, setImages] = useState([]);
  const [users, setUsers] = useState({});
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getCar();
  }, []);

  const getCar = async () => {
    const res = await axios.get(`http://localhost:4000/api/car/${id}`);
    try {
      setCar(res.data.response);
      setImages(res.data.response.image);
      setUsers(res.data.response.users);
      setCategories(res.data.response.categories);
      console.log(res.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="details-container">
        <div className="details-left-side">
          <div>
            <h1>{car.name}</h1>
          </div>
          <div className="details-left-side-price">$ {car.price} /day</div>
          <div className="details-swiper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {images &&
                images.map((img, i) => {
                  return (
                    <SwiperSlide key={i} className="swiper-slide">
                      <img src={img} alt="img1" />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="details-right-side">
          <div className="details-right-side-container">
            <div>
              <h4>Description :</h4>
              <p>{car.description}</p>
            </div>
            <div className="additional-info">
              <div>
                <h4>Type :</h4>
                <p>{categories.name}</p>
              </div>
              <div>
                <h4>Location :</h4>
                <p> {car.pickupLocation}</p>
              </div>
              <div className="">
                <h4>Availablity :</h4>
                <p> {car.isRented ? "Rented" : "Not Rented"}</p>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <div className="sum">
              <div>
                <h4>Owner Name :</h4>
                <p>
                  {users.firstName} {users.lastName}
                </p>
              </div>
              <div className="">
                <h4>Phone :</h4>
                <p> {users.phone}</p>
              </div>
            </div>
            <div>
              <h4>Email :</h4>
              <p> {users.email}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
