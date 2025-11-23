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
      {/* <h1 className="p-10 font-bold text-3xl text-center">
        Is there any available foods here?
      </h1> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {foods.map((food) => (
          <Card key={food._id} food={food}></Card>
        ))}
      </div>
      <div className="flex justify-end">
        <Link to="/available-foods" className="btn my-5">
          {" "}
          Show All{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
