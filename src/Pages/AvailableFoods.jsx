import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import LoadingSpinner from "./LoadingSpinner";

const AvailableFoods = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:3000/foods")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // <-- FIXED
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="mx-auto mb-10">
      <div className="text-center my-5 md:my-10">
        <h1 className="font-bold text-4xl text-center">Available foods here</h1>
        <p className="text-gray-400">
          View and request all foods with only one click.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((food) => (
          <Card key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
