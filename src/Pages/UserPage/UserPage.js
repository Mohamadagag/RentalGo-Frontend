import React, { useState, useEffect } from "react";
import "./UserPage.css";
import UserSideBar from "../../Components/UserSideBar/UserSideBar";
import axios from "axios";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { Table, TableHead, TableRow, TableCell } from "@mui/material";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function UserPage() {
  const [open, setOpen] = React.useState(false);
  const [category, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    price: "",
    licensePlate: "",
    pickupLocation: "",
    id: "",
  });

  const HandelEdit = (e) => {
    e.preventDefault();
    const id1 = edit.id;
    axios
      .put("http://localhost:4000/api/car/" + id1, {
        name: edit.name,
        description: edit.description,
        price: edit.price,
        licensePlate: edit.licensePlate,
        pickupLocation: edit.pickupLocation,
      })
      .then((res) => {
        getCars();
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCars();
    getTypes();
  }, []);

  const getTypes = async () => {
    const res = await axios.get("http://localhost:4000/api/category");
    try {
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCars = async () => {
    const id = localStorage.getItem("id");
    const res = await axios.get(`http://localhost:4000/api/car/usercars/${id}`);
    try {
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/car/${id}`);
      getCars();
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

  const handleClickOpen = (
    id,
    name,
    description,
    price,
    pickupLocation,
    licensePlate
  ) => {
    setOpen(true);
    setEdit({ id, name, description, price, pickupLocation, licensePlate });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="user-page-container">
        <div>
          <UserSideBar />
        </div>
        <div className="user-page-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Preview</TableCell>
                <TableCell>Car Name</TableCell>
                <TableCell>Car Price</TableCell>
                <TableCell>Pickup Location</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            {data &&
              data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <img src={item.image[0]} className="thumbnail" />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.pickupLocation}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div>
                        <Button
                          variant="outlined"
                          onClick={() =>
                            handleClickOpen(
                              item._id,
                              item.name,
                              item.description,
                              item.price,
                              item.licensePlate,
                              item.pickupLocation
                            )
                          }
                        >
                          Edit
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="responsive-dialog-title"
                        >
                          <form
                            className="user-form"
                            onSubmit={HandelEdit}
                            encType="multipart/form-data"
                          >
                            <DialogContent>
                              <div className="user-page-popup">
                                <TextField
                                  label="Car name"
                                  variant="outlined"
                                  className="new-car-input-popup popup"
                                  value={edit.name}
                                  onChange={(e) =>
                                    setEdit({ ...edit, name: e.target.value })
                                  }
                                />
                              </div>
                              <div className="user-page-popup">
                                <TextField
                                  className="new-car-input-popup popup"
                                  select
                                  label="Type"
                                  helperText="Please select car type"
                                  value={edit.categories}
                                  onChange={(e) =>
                                    setEdit({
                                      ...edit,
                                      category: e.target.value,
                                    })
                                  }
                                >
                                  {category &&
                                    category.map((item) => {
                                      return (
                                        <MenuItem
                                          value={item._id}
                                          key={item._id}
                                        >
                                          {item.name}
                                        </MenuItem>
                                      );
                                    })}
                                </TextField>
                              </div>

                              <div className="user-page-popup">
                                <TextField
                                  label="Description"
                                  multiline
                                  maxRows={4}
                                  className="new-car-input-popup input-description"
                                  value={edit.description}
                                  onChange={(e) =>
                                    setEdit({
                                      ...edit,
                                      description: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="user-page-popup">
                                <TextField
                                  label="License plate"
                                  variant="outlined"
                                  className="new-car-input-popup popup"
                                  value={edit.pickupLocation}
                                  onChange={(e) =>
                                    setEdit({
                                      ...edit,
                                      pickupLocation: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="user-page-popup">
                                <InputLabel htmlFor="outlined-adornment-amount">
                                  Price
                                </InputLabel>
                                <OutlinedInput
                                  value={edit.price}
                                  onChange={(e) =>
                                    setEdit({ ...edit, price: e.target.value })
                                  }
                                  nt={
                                    <InputAdornment position="start">
                                      $
                                    </InputAdornment>
                                  }
                                  label="Price"
                                  className="new-car-input-popup popup"
                                />
                              </div>

                              <div className="user-page-popup">
                                <TextField
                                  label="Pickup location"
                                  variant="outlined"
                                  className="new-car-input-popup popup"
                                  value={edit.licensePlate}
                                  onChange={(e) =>
                                    setEdit({
                                      ...edit,
                                      licensePlate: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </DialogContent>
                            <DialogActions>
                              <Button autoFocus onClick={handleClose}>
                                Cancel
                              </Button>
                              <Button type="submit" autoFocus>
                                Save
                              </Button>
                            </DialogActions>
                          </form>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserPage;
