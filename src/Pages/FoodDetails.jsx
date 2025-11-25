import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodDetailsCard from "../Components/FoodDetailsCard";
import { useParams } from "react-router";


const FoodDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/food-details/${id}`)
      .then((res) => {
        console.log("Backend Response:", res.data);
        setDetails(res.data); // this is the food object
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      {details && <FoodDetailsCard detail={details} />}
    </div>
  );
};

export default FoodDetails;
