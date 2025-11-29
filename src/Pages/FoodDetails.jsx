import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodDetailsCard from "../Components/FoodDetailsCard";
import { useParams } from "react-router";
import FoodRequestTable from "../Components/FoodRequestTable";

const FoodDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/food-details/${id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
       
        {details && <FoodDetailsCard detail={details} />}

        {details && <FoodRequestTable details={details} />}
      </div>
    </div>
  );
};

export default FoodDetails;
