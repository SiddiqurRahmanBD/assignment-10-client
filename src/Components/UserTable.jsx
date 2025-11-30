import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UserTable = ({ food, index, onDelete }) => {
  const { user } = useContext(AuthContext);

  const { donatorName, donatorEmail, foodName, foodImage } = food;

  const handleFoodDelete = (id) => {
    axios
      .delete(
        `https://assignment-10-server-beta-lime.vercel.app/delete-food?id=${id}`
      )
      .then((res) => {
        console.log(res);

        onDelete(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-15 w-15">
                <img src={foodImage} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{foodName}</div>
            </div>
          </div>
        </td>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user.photoURL} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{donatorName}</div>
          </div>
        </div>
      </td>

      <td>{donatorEmail}</td>
      <td>
        <div className="flex items-center gap-2">
          {" "}
          <Link to={`/update-food/${food?._id}`}>
            <button className="btn btn-outline btn-success">Update</button>
          </Link>
          <button
            onClick={() => handleFoodDelete(food?._id)}
            className="btn btn-outline btn-error"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserTable;
