import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();

    axios
      .get("https://assignment-10-server-beta-lime.vercel.app/foods-home")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mx-auto">
      <div className="text-center my-5 md:my-10">
        <h1 data-aos="fade-up" className="font-bold text-4xl text-center">
          Choose Your <span className="text-green-700">Foods</span>
        </h1>

        <p data-aos="fade-up" className="text-gray-400">
          Here has that types of foods which are decorated per quantity.
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        data-aos="fade-up"
      >
        {foods.map((food) => (
          <Card key={food._id} food={food} />
        ))}
      </div>

      <div data-aos="fade-left" className="flex justify-end">
        <Link
          to="/available-foods"
          className="btn bg-green-700 text-white my-5"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
