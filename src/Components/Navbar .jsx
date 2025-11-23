import React, { useContext } from "react";
import foodShare from "../assets/food_share.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        toast.success("Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-500 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/available-foods">Available Foods</NavLink>
            </li>
            <li>
              <NavLink to="/add-food">Add Food</NavLink>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>

        <img src={foodShare} className="h-20 w-20" alt="" />
        <a className=" text-green-700 text-xl font-bold">Food Share</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/available-foods">Available Foods</NavLink>
          </li>
            {
              user && ( <li>
            <NavLink to="/add-food">Add Food</NavLink>
          </li>)
            }
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* {!user && (
          <NavLink to="/auth/login" className="btn">
            Login
          </NavLink>
        )} */}
        {user ? (
          <div className="flex justify-center items-center">
            <img
              className="w-15 h-15 rounded-full"
              src={user.photoURL}
              alt=""
            />

            <div>
              <button
                onClick={handleLogout}
                className="btn bg-green-700 text-white hover:bg-yellow-300 hover:text-black"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex">
            <NavLink to="/auth/login" className="btn">Login</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
