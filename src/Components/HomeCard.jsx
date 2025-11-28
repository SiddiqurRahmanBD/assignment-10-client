import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router";

const HomeCard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/foods-home")

      .then((res) => {
        setFoods(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-auto">
      <div className="text-center my-5 md:my-10">
        <h1 className="font-bold text-4xl text-center">Choose Your <span className="text-green-700">Foods</span></h1>
        <p className="text-gray-400">
         Here has that types of foods which are decorated ae per quantity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <Card key={food._id} food={food}></Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Link to="/available-foods" className="btn bg-green-700 text-white my-5">
          {" "}
          Show All{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
