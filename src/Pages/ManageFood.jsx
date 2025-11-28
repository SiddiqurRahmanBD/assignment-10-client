import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserTable from "../Components/UserTable";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/manage-foods?email=${user.email}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);

  // ✅ Handle delete from child
  const handleDelete = (id) => {
    const remaining = foods.filter((item) => item._id !== id);
    setFoods(remaining);
  };

  return (
    <div>
      <div className="text-center my-5 md:my-10">
        <h1 className="font-bold text-2xl md:text-4xl">Manage My Foods</h1>
        <p className="text-gray-400 pt-2">
          View and manage all your foods easily. You can update or remove
          anytime.
        </p>
      </div>

      <div className="overflow-x-auto md:mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Food</th>
              <th>Donated by</th>
              <th>Donator Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food, index) => (
              <UserTable
                key={food._id}
                food={food}
                index={index}
                onDelete={handleDelete} // ✅ send delete handler
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
