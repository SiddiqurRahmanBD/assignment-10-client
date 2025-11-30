import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserTable from "../Components/UserTable";
import LoadingSpinner from "./LoadingSpinner";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://assignment-10-server-beta-lime.vercel.app/manage-foods?email=${user.email}`
      )
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [user.email]);

  const handleDelete = (id) => {
    const remaining = foods.filter((item) => item._id !== id);
    setFoods(remaining);
  };
  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="text-center my-5 md:my-10">
        <title>Manage my Foods</title>
        <h1 className="font-bold text-2xl md:text-4xl">Manage My Foods</h1>
        <p className="text-gray-400 pt-2">
          View and manage all your foods easily. You can update or remove
          anytime.
        </p>
      </div>
      {foods.length === 0 ? (
        <p className="text-gray-500 text-center text-2xl font-bold mb-10">
          No Food adds yet.
        </p>
      ) : (
        <div className="overflow-x-auto md:my-10">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200">
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
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
