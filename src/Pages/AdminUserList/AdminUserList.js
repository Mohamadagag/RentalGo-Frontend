import React, { useState, useEffect } from "react";
import "./AdminUserList.css";
import axios from "axios";
import Button from "@mui/material/Button";
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar";
import Pagination from "../../Components/Pagination";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function AdminUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/user");
    try {
      setUsers(res.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/user/${id}`);
      getAllUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div>
        <AdminSideBar />
      </div>
      <div className="car-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              currentPosts.map((users, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      {users.firstName} {users.lastName}
                    </TableCell>
                    <TableCell>{users.email}</TableCell>
                    <TableCell>{users.phone}</TableCell>
                    <TableCell>{users.address}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(users._id)}
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
            totalPosts={users.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default AdminUserList;
