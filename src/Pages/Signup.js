import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./Navbar";
const Signup = () => {
  const URL = "https://urldb-backend.vercel.app";

  const [name, setName] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  async function registerHandler(e) {
    e.preventDefault()
    // console.log(password.length)
    if (!name) {
      document.getElementById("fullName").classList.add("border-red-500");
      document.getElementById("warningname").style.display="block";
    }
    else if(!emailPattern.test(email)){
      document.getElementById("email").classList.add("border-red-500");
      document.getElementById("warningemail").style.display="block";

    }
    else if(password.length<8){
      document.getElementById("password").classList.add("border-red-500");
      document.getElementById("warningpassword").style.display="block";
    }else if(confirmPassword!=password){
      document.getElementById("confirm").classList.add("border-red-500");
      document.getElementById("warningconfirm").style.display="block";
    }else{
      try {
        await axios.post(`${URL}/api/signup`,{
          name,password,email
        }).then((res)=>{
          if(res.status==205){
            document.getElementById("email").classList.add("border-red-500");
      document.getElementById("erroremail").style.display="block";
          }else if(res.status==200){
            toast.success('🦄 Register Success! Please Login', {
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
          }
        }).catch((err)=>{
          console.log(err);
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="bg-slate-400">
      {/* Container */}
      <NavBar user={{}} isPrimeUser={false} islogin={false}/>

      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen px-6">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-6/12 bg-white p-5 rounded-lg lg:rounded-l-none mt-20">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex flex-col md:justify-between">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                      document.getElementById("fullName").classList.remove("border-red-500");
                      document.getElementById("warningname").style.display="none";

                    }}
                    className="w-full px-3 py-2 border   text-sm leading-tight text-gray-700  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                  />
                  <p id="warningname" className=" hidden text-xs italic text-red-500">
                    Please enter a name.
                  </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                      document.getElementById("email").classList.remove("border-red-500");
                      document.getElementById("warningemail").style.display="none";
                      document.getElementById("erroremail").style.display="none";

                    }}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <p id="warningemail" className="hidden text-xs italic text-red-500">
                    Please enter a valid email.
                  </p>
                  <p id="erroremail" className="hidden text-xs italic text-red-500">
                    Email already registered! Please Login.
                  </p>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                        document.getElementById("password").classList.remove("border-red-500");
                      document.getElementById("warningpassword").style.display="none";
                      }}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p id="warningpassword" className="hidden text-xs italic text-red-500">Please enter a 8 length password.</p>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        document.getElementById("confirm").classList.remove("border-red-500");
                      document.getElementById("warningconfirm").style.display="none";
                      }}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="confirm"
                      type="password"
                      placeholder="******************"
                    />
                    <p id="warningconfirm" className="hidden text-xs italic text-red-500">
                    Does not match to Password
                  </p>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    onClick={(e)=>{registerHandler(e)}}
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="/login"
                  >
                    Already have an account? Login!
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

export default Signup;
