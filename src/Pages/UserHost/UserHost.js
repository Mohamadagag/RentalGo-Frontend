import React, { useState, useEffect } from "react";
import "./UserHost.css";
import UserSideBar from "../../Components/UserSideBar/UserSideBar";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import axios from "axios";
import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function UserHost() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [pickupLocation, setPickupLocation] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [categories, setCategory] = useState("");
  const [image, setImage] = useState([]);
  const [category, setCategories] = useState([]);
  const [users, setUsers] = useState("");

  useEffect(() => {
    getTypes();
  }, []);

  const handleSubmit = (e) => { 
    e.preventDefault();

    let id = localStorage.getItem("id");
    const response = axios
      .get(`http://localhost:4000/api/user/${id}`)
      .then((response) => {
        setUsers(response.data._id);
      });
    console.log(response);

    const image_array = Object.values(image.image);
    const formData = new FormData();
    image_array.forEach((file) => {
      formData.append("image", file);
    });
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("pickupLocation", pickupLocation);
    formData.append("licensePlate", licensePlate);
    formData.append("categories", categories);
    formData.append("users", id);
    console.log("users", users);
    axios
      .post("http://localhost:4000/api/car", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res ", res.data);
        setImage({
          image: "",
        });
        Swal.fire({
          title: "Car added successfully",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "An Error occurred",
          text: "Please try again",
          icon: "error",
          confirmButtonText: "Ok",
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        // console.log(err);
      });
  };

  const handleImage = (e) => {
    setImage({ image: e.target.files });
  };

  const getTypes = async () => {
    const res = await axios.get("http://localhost:4000/api/category");
    try {
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="user-page-container">
        <div>
          <UserSideBar />
        </div>
        <div className="user-page-right">
          <div>
            <h1>List your car</h1>
          </div>
          <form
            className="user-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="name-type">
              <TextField
                label="Car name"
                variant="outlined"
                className="new-car-input"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                className="new-car-input input-type"
                select
                label="Type"
                helperText="Please select car type"
                value={categories}
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                {category &&
                  category.map((item) => {
                    return (
                      <MenuItem value={item._id} key={item._id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </div>

            <div className="name-type">
              <TextField
                label="Description"
                multiline
                maxRows={4}
                className="new-car-input input-description"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="name-type plate-price">
              <div>
                <TextField
                  label="License plate"
                  variant="outlined"
                  className="new-car-input"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  required
                />
              </div>
              <div>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <OutlinedInput
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  nt={<InputAdornment position="start">$</InputAdornment>}
                  label="Price"
                  className="new-car-input"
                  required
                />
              </div>
            </div>
            <div className="pick-image">
              <TextField
                label="Pickup location"
                variant="outlined"
                className="new-car-input"
                required
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
              <Button
                variant="contained"
                component="label"
                className="images image-upload"
              >
                Upload Images
                <input type="file" hidden multiple onChange={handleImage} />
              </Button>
            </div>
            <div className="add-button">
              <button type="submit" className="save">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHost;
