import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const FoodRequestTable = ({ details }) => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);

  const isOwner = user?.email === details?.donatorEmail;
  // console.log(user.email, details.donatorEmail);
  useEffect(() => {
    if (isOwner && details?._id) {
      axios
        .get(
          `https://assignment-10-server-beta-lime.vercel.app/food-requests/${details._id}`
        )
        .then((res) => {
          setRequests(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [details?._id, isOwner]);

  const handleAccept = async (req) => {
    try {
      await axios.patch(
        `https://assignment-10-server-beta-lime.vercel.app/accept-request/${req._id}`,
        {
          foodId: details._id,
        }
      );

      setRequests((prev) =>
        prev.map((item) =>
          item._id === req._id ? { ...item, status: "accepted" } : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (req) => {
    try {
      await axios.patch(
        `https://assignment-10-server-beta-lime.vercel.app/reject-request/${req._id}`
      );

      setRequests((prev) =>
        prev.map((item) =>
          item._id === req._id ? { ...item, status: "rejected" } : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOwner) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Food Requests</h2>

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
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className="bg-base-100">
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
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAccept(req)}
                        disabled={req.status !== "pending"}
                        className="btn btn-success btn-sm"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() => handleReject(req)}
                        disabled={req.status !== "pending"}
                        className="btn btn-error btn-sm"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoodRequestTable;
