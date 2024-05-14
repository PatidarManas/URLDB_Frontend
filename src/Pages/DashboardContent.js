// Dashboard.js

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function DashboardContent({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  function copyhandler() {
    document.getElementById("copyButton").innerHTML = "Copied!";
    document.getElementById("copyButton").style.backgroundColor = "#4b5563";
    setTimeout(() => {
      document.getElementById("copyButton").innerHTML = "Copy";
    document.getElementById("copyButton").style.backgroundColor = "#3b82f6";
    }, 2000);
  }

  return (
    <div className="bg-slate-100 min-h-screen lg:px-40">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  mt-20">
          {/* Box 1: Welcome Message */}
          <div
            style={{ fontFamily: "Poppins" }}
            className="bg-slate-800 text-white rounded-lg shadow-lg p-6 md:col-span-5 lg:col-span-3"
          >
            <h2 className="text-3xl text-slate-200 font-semibold mb-4">
              Welcome Back, {user.Name}!
            </h2>
            <p className="text-lg mb-2 ">
              Have you discovered this most helpull page on URLDB:{" "}
              <a className="text-sm text-gray-400">
                Take advantage of our well-written documentation to make the
                most out of our APIs.
              </a>
            </p>
            <a href="/docs" className="text-xl font-mono underline text-blue-500 cursor-pointer">
              Read Docs
            </a>
          </div>

          {/* Box 2: API Key */}
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-5 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Your API Key</h2>
            <div className="flex items-center mb-4">
              <input
                type="text"
                id="apikeyfield"
                value={user.API_SECRET_KEY}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md w-full mr-2 focus:outline-none"
                readOnly
              />
              <CopyToClipboard text={user.API_SECRET_KEY} onCopy={() => {copyhandler()}}>
                <button id="copyButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Copy
                </button>
              </CopyToClipboard>
            </div>
            <p className="text-sm text-gray-600">
              Copy this API key and use it in your requests.
            </p>
          </div>

          {/* Box 3: Premium Upgrade */}
          {user.isPrimeUser?"":<div  id="premiumBanner" className="bg-gradient-to-br from-slate-300 to-slate-500 rounded-lg shadow-md p-6 md:col-span-5 lg:col-span-2 relative overflow-hidden pb-20">
            <button onClick={()=>{document.getElementById("premiumBanner").style.display="none"}} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* <h2 style={{fontFamily:"Varela Round"}} className="text-3xl font-bold mb-4">Upgrade to Premium</h2> */}
            <h1
              style={{ fontFamily: "Varela Round" }}
              class="text-3xl font-bold mb-4 bg-gradient-to-br from-black via-slate-900 to-slate-400 inline-block text-transparent bg-clip-text"
            >
              Upgrade to Premium
            </h1>

            <p
              style={{ fontFamily: "Poppins" }}
              className="ml-2  mb-2 list-none"
            >
              <li>✔️ No more ERROR 429</li>
              <li>✔️ Unlimited Requests at any time</li>
              <li>✔️ Prioterized Customer Support</li>
            </p>
            <a href="/premium" className="bg-white mr-10 mt-5 self-end absolute right-0 text-light-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded transition duration-300">
              Upgrade Now
            </a>
          </div>}
        </div>

        <div className="bg-slate-600 rounded-lg p-6 mt-10">
          <div
            className="cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            <h2 className="text-white text-xl font-bold mb-4 flex gap-2">
              Database Details
            </h2>
          </div>
          <div
            className={` transition-all delay-1000 duration-500 ${
              showDetails ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {user.Databases_names?.map((value) => {
                return(<div className="bg-white rounded-md p-4 flex items-center justify-between hover:bg-gray-100 transition duration-300">
                  <div>
                    <h3 className="text-gray-800 font-semibold">{value}</h3>
                    <p className="text-gray-600">Space Occupied: calculating..</p>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Visualize Database
                  </button>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
