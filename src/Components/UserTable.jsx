import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserTable = ({ food, index }) => {
  const { user } = useContext(AuthContext);

  const { donatorName, donatorEmail } = food;

  return (
    <tr>
      <th>{index + 1}</th>
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
      <td>Purple</td>

      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default UserTable;
