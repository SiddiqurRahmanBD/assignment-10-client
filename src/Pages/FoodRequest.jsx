import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const FoodRequest = () => {
  const [requests, setRequests] = useState([]);
  console.log(requests);
   const { user } = useContext(AuthContext);

  useEffect(() => {
     if (!user?.email) return;
    axios
      .get(`http://localhost:3000/request-foods?email=${user.email}`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }, [user.email]);

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Request My Foods{" "}
        </h2>

        {requests.length === 0 ? (
          <p className="text-gray-500 text-center text-2xl font-bold mb-10">
            No requests yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th>User</th>
                  <th>Location</th>
                  <th>Reason</th>
                  <th>Contact</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((req) => (
                  <tr key={req._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={req.userPhoto}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-bold">{req.userName}</p>
                          <p className="text-sm">{req.userEmail}</p>
                        </div>
                      </div>
                    </td>

                    <td>{req.location}</td>
                    <td>{req.reason}</td>
                    <td>{req.contact}</td>

                    <td>
                      <span
                        className={`badge ${
                          req.status === "pending"
                            ? "badge-warning"
                            : req.status === "accepted"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodRequest;
