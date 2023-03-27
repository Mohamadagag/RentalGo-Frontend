import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminCarList.css";
import Pagination from "../../Components/Pagination";
import Swal from "sweetalert2";
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar";
import Button from "@mui/material/Button";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    const res = await axios.get("http://localhost:4000/api/car/");
    try {
      setCars(res.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/car/${id}`);
      getAllCars();
      Swal.fire({
        title: "Car deleted",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <AdminSideBar />
      </div>
      <div className="car-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Owner</TableCell>
              <TableCell>Car name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars &&
              currentPosts.map((car, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      {car.users.firstName} {car.users.lastName}{" "}
                    </TableCell>
                    <TableCell>{car.name}</TableCell>
                    <TableCell>{car.categories.name}</TableCell>
                    <TableCell>{car.price}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(car._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <div className="user-paginate">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={cars.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
