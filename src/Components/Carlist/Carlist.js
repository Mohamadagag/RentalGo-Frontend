import React, { useState, useEffect } from "react";
import "./Carlist.css";
import Car from "../Car/Car";
import axios from "axios";
import Pagination from "../../Components/Pagination";
import SkeletonList from "../Skeleton/SkeletonList";
import { FiSearch } from "react-icons/fi";

export default function Carlist() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    const res = await axios.get("http://localhost:4000/api/car");
    try {
      setLoading(false);
      setList(res.data.response);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  if (loading || list.length === 0) {
    return <SkeletonList />;
  } else {
    return (
      <>
        <div id="search-container">
          <div className="search-wrapper">
            <input
              type="search"
              placeholder="Search...."
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        <div className="list">
          {list &&
            currentPosts
              .filter((val) => {
                if (searchValue === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchValue.toLowerCase())
                )
                  return val;
              })
              .map((e, id) => {
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
        <div className="home-paginate">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={list.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </>
    );
  }
}
