import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Use more than 5 Characters");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegEx.test(email)) {
      console.log("Invalid email");
      return;
    }

    const password = form.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registered Successfully!");

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => alert(error.code));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success("Logged in with Google");
        setUser(user);
        navigate("/");
      })
      .catch((error) => alert(error.code));
  };

  return (
    <div>
      <title>Register</title>

      <div className="hero py-10 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-2xl text-center pt-5 font-semibold">
            Register Now
          </h1>

          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label text-lg">Name</label>
                <input type="text" name="name" className="input" required />
                {nameError && (
                  <p className="text-xs text-red-500">{nameError}</p>
                )}

                <label className="label text-lg">Photo URL</label>
                <input type="text" name="photo" className="input" required />

                <label className="label text-lg">Email</label>
                <input type="email" name="email" className="input" required />

                <label className="label text-lg">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  required
                />
                {passwordError && (
                  <p className="text-xs text-red-500">{passwordError}</p>
                )}

                <button
                  className="btn bg-pink-500 text-white mt-4"
                  type="submit"
                >
                  Register
                </button>

                <button onClick={handleGoogle} className="btn bg-base-200 mt-4">
                  <FcGoogle size={30} /> Login with Google
                </button>
              </fieldset>
            </form>

            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-pink-500" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
