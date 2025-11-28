import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const UserTable = ({ food, index }) => {
  const { user } = useContext(AuthContext);

  const { donatorName, donatorEmail, foodName, foodImage } = food;

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
      <td >
        <div className="flex items-center gap-2">
          {" "}
          <Link to={`/update-food/${food._id}`}>
            <button className="btn btn-outline btn-success">Update</button>
          </Link>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </td>

      {/* <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th> */}
    </tr>
  );
};

export default UserTable;
