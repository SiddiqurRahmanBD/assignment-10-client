import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const AvailableFoods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/foods")

      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-auto mb-10">
      <h1 className="p-10 font-bold text-3xl text-center">Is there any available foods here?</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((food) => (
          <Card key={food._id} food={food}></Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
