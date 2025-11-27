import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Card from "../Components/Card";
import UserTable from "../Components/UserTable";

const ManageFood = () => {
    const {user} = useContext(AuthContext)
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/manage-foods?email=${user.email}`)

      .then((res) => {
        setFoods(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Food</th>
            <th>Donated by</th>
            <th>Donator Email</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food, index) => (
            <UserTable key={food._id} food={food} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;
