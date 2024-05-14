import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Navbar";

const Login = () => {
  const URL = "https://urldb-backend.onrender.com";
  const history = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  async function loginHandler(e) {
    e.preventDefault();
    // console.log(password.length)

    if (!emailPattern.test(email)) {
      document.getElementById("email").classList.add("border-red-500");
      document.getElementById("warningemail").style.display = "block";
    } else if (password.length < 8) {
      document.getElementById("password").classList.add("border-red-500");
      document.getElementById("warningpassword").style.display = "block";
    } else {
      document.getElementById("submitButton").innerHTML = "Wait...";
      document.getElementById("submitButton").style.backgroundColor = "#4b5563";

      try {
        await axios
          .post(`${URL}/api/login`, {
            password,
            email,
          })
          .then((res) => {
            if (res.status == 201) {
              toast.error("🦄 Incorrect Details", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: "Bounce",
              });
              document.getElementById("submitButton").innerHTML = "Login";
              document.getElementById("submitButton").style.backgroundColor =
                "#3b82f6";
            } else if (res.status == 200) {
              toast.success("🦄 Login Success!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: "Zoom",
              });

              document.cookie = "token=" + res.data.token;
              document.getElementById("submitButton").innerHTML = "Login";
              document.getElementById("submitButton").style.backgroundColor =
                "#3b82f6";
                setTimeout(() => {
                  
                  history("/dashboard");
                  window.location.reload();
                }, 600);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="bg-slate-400">
      {/* Container */}
    <NavBar user={{}} isPrimeUser={false} islogin={false}/>
      <div className="container mx-auto ">
        <div className="flex justify-center items-center h-screen px-6 ">
          {/* Row */}
            {/* Col */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-row-reverse mt-20">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-r-lg"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-5/12 bg-white p-5 rounded-lg lg:rounded-r-none">
              <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2  font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                      document
                        .getElementById("email")
                        .classList.remove("border-red-500");
                      document.getElementById("warningemail").style.display =
                        "none";
                    }}
                    className="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <p
                    id="warningemail"
                    className="hidden text-xs italic text-red-500"
                  >
                    Please enter a valid email.
                  </p>
                </div>
                <div className="mb-4  ">
                  <label
                    className="block mb-2  font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                      document
                        .getElementById("password")
                        .classList.remove("border-red-500");
                      document.getElementById("warningpassword").style.display =
                        "none";
                    }}
                    className="w-full px-3 py-3 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p
                    id="warningpassword"
                    className="hidden text-xs italic text-red-500"
                  >
                    Please enter a password.
                  </p>
                </div>
                <div className="mb-6 ">
                  <button
                    onClick={(e) => {
                      loginHandler(e);
                    }}
                    id="submitButton"
                    type="submit"
                    className=" w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    
                  >
                    Login
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/signup"
                  >
                    Doesn't have an account ? Signin!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
