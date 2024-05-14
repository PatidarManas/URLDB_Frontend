import React from "react";
import docs1 from "../Docs1.png";
const Documentation = () => {
  const URL = "https://urldb-backend.onrender.com";

  return (
    <div className="flex flex-col m-0 p-0 ">
      
      <div className="bg-white flex lg:pl-24 mt-20">
        <div className="hidden sticky top-0 md:flex flex-col gap-2 px-5 py-10 max-w-80 max-h-[90vh] overflow-y-auto">
          <a href="#main-1"  className="text-xl font-semibold ">Get Api Secret Key</a>
          <div className="flex flex-col gap-2 pl-5">
            <a href="#1-sub-1" className=" cursor-pointer">Create account</a>
            <a href="#1-sub-2" className=" cursor-pointer">Copy code</a>
            <a href="#1-sub-3" className="flex gap-1 cursor-pointer">
              Get Premium{" "}
              <h2 className="bg-blue-900 rounded-lg px-2  h-4 text-blue-300 text-xs">
                Optional
              </h2>
            </a>
          </div>
          <a href="#main-2" className="text-xl font-semibold mt-5">
            Using URL Parameters for Database Operations
          </a>
          <div className="flex flex-col gap-2 pl-5">
            <a href="#2-sub-1" className="flex gap-1 cursor-pointer">
              General Instruction
              <h2 className="bg-yellow-400 rounded-lg px-2  h-4 text-black font-semibold text-xs">
                Must Read
              </h2>
            </a>
            <a href="#2-sub-2" className=" cursor-pointer">Create Database</a>
            <a href="#2-sub-3" className=" cursor-pointer">Create Modal</a>
            <a href="#2-sub-4" className=" cursor-pointer">Insert Data</a>
            <a href="#2-sub-5" className=" cursor-pointer">Get Data</a>
            <a href="#2-sub-6" className=" cursor-pointer">Get All Data</a>
            <a href="#2-sub-7" className=" cursor-pointer">Get All Modal Names</a>
            <a href="#2-sub-8" className=" cursor-pointer">Delete Data</a>
            <a href="#2-sub-9" className=" cursor-pointer">Delete Modal</a>
          </div>
          <a href="#main-3"  className="text-xl font-semibold ">
            Troubleshooting and Error Handling
          </a>
          <div className="flex flex-col gap-2 pl-5">
            <a href="#3-sub-1"  className=" cursor-pointer">Safe Practices</a>
            <a href="#3-sub-2"  className="flex gap-1 cursor-pointer">
              Errors{" "}
              <h2 className="bg-yellow-400 rounded-lg px-2  h-4 text-black font-semibold text-xs">
                Must Read
              </h2>
            </a>
          </div>
        </div>
        <div className="w-full px-2 md:px-10 py-10 md:pr-20">
          <div>
            <h1 id="main-1" className="text-3xl font-semibold font-sans mb-5 ">
              Get API Secret key
            </h1>
            <h2 id="1-sub-1" className="text-xl font-medium font-mono mt-5 ml-5 text-slate-800">
              Create Account
            </h2>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              To start using URLDB and access its features, you'll need to
              obtain an API key. If you're new to URLDB, begin by creating an
              account. Simply visit the{" "}
              <a href="registration.html" className="text-blue-600 underline">
                Sign up
              </a>{" "}
              page. Fill out the required fields with your information.
              <br />
              If you already have a URLDB account, you can directly{" "}
              <a href="login.html" className="text-blue-600 underline">
                Log in
              </a>
              . Upon successful authentication, you'll be directed to your
              account dashboard. From there, you can access your API key and
              start using URLDB for your needs.
              <br /> If you have any questions or encounter any issues during
              the registration or login process, feel free to reach out to our
              support team for assistance.
            </p>
            <h2 id="1-sub-2" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
              Copy Code
            </h2>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              Once you're logged in and on your dashboard page, you can copy the
              code from the top right corner box. This code contains your API
              key and is essential for accessing URLDB's features. Below is a
              GIF illustrating the process:
            </p>
            <img alt="" src={docs1}
              className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
            ></img>
            <h2 id="1-sub-3" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
              Get Premium (Optional)
            </h2>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              Upgrading to premium is an optional step, but it comes with
              significant benefits. With premium access, you won't encounter the
              error code 429, which indicates too many requests. This means you
              can use URLDB at its maximum capability without worrying about
              request limits. To get premium access, visit the{" "}
              <a className="text-blue-500 underline cursor-pointer">
                premium page
              </a>{" "}
              on the URLDB website and follow the instructions to upgrade your
              account. If you have any questions about premium features or need
              assistance with the upgrade process, don't hesitate to contact our
              support team.
            </p>
          </div>
          <div>
            <h1 id="main-2" className="text-3xl font-semibold font-sans mb-5 mt-10">
              Using URL Parameters for Database Operations{" "}
            </h1>
            <h2 id="2-sub-1" className="text-xl font-medium font-mono mt-5 ml-5 text-slate-800">
              General Instruction
            </h2>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              When performing database operations via URL parameters, ensure to
              use the{" "}
              <a className="text-yellow-400 font-semibold">GET method</a>.
              Additionally, specify the{" "}
              <a className="text-yellow-400 font-semibold">version as "1"</a> in
              the URL. For authentication, include your API secret key in the
              URL. These parameters are crucial for securely accessing and
              manipulating your URLDB database. <br />
              You will receive the data as an JSON object
            </p>
            <div
              style={{ fontFamily: "Roboto" }}
              className="flex flex-col bg-slate-300 w-fit mt-4 mx-auto text-lg font-normal"
            >
              <div className="flex ">
                <h4 className="border border-black w-36 md:w-48 text-center py-2 ">
                  Parameter
                </h4>
                <h4 className="border border-black border-l-0 w-36 md:w-48 text-center py-2">
                  Value
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-36 md:w-48 border-t-0 text-center py-2 ">
                  Version
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-36 md:w-48 text-center py-2">
                  1
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-36 md:w-48 text-center py-2 border-t-0">
                  Method
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-36 md:w-48 text-center py-2">
                  Get
                </h4>
              </div>
            </div>

            <h1 className="ml-10 text-xl font-mono font-medium mt-5">
              Sample Parameter Link:
            </h1>
            <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg    text-slate-200 px-3 py-1 text-lg font-mono my-2">
              <h3 className=" overflow-x-auto">
                {URL +
                  "/{version}/{API_SECRET_KEY}/create_modal/{database_name}/{new_modal_name}"}
              </h3>
              {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
            </div>
            <h1 className="ml-10 text-xl font-mono font-medium mt-5">
              Example with values:
            </h1>
            <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
              <h3 className=" overflow-x-auto">
                {URL +
                  "/1/m1715181391598/create_modal/{database_name}/{new_modal_name}"}
              </h3>
              {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
            </div>
            <div>
              <h2 id="2-sub-2" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Create Database
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                You can use this API to create a new database for any of your
                new projects. Replace "database_name" with your desired database
                name. Ensure that you use a unique name for your database.{" "}
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/create_db/{database_name}"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">{URL + "/1/m1715181391598/create_db/myproject"}</h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-3" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Create Modal
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                You can use this API to create a new model in an already
                existing database. Replace "database_name" with your desired
                database name and "modal_name" with your desired model name.
                Ensure that you use a unique name for your model.{" "}
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/create_modal/{database_name}/{modal_name}"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL + "/1/m1715181391598/create_modal/myproject/usermodal"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-4" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Insert Data
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                You can use this API to insert a new data object into the data
                array of the model. Replace "database_name" with your desired
                database name and "modal_name" with your desired model name.
                Pass field names and values as query parameters in the URL,
                adding additional fields using "&". Ensure that one field is
                unique for each object to facilitate easy retrieval and deletion
                operations.{" "}
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/add_data/{database_name}/{modal_name}?feild1:value1&field2:value2"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/1/m1715181391598/add_data/myproject/usermodal?id=1&name=Manas&username=manaspatidar170&location=Indore"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-5" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Get Data
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                This API allows you to retrieve a data array with filters that
                match the parameters provided in the URL query.
                <br />
                Replace "database_name" with your desired database name and
                "modal_name" with your desired model name. Pass field names and
                values as query parameters in the URL, adding additional fields
                using "&".
                <br /> Please note that the response is an array of objects.
                Even if you target only one object, you will receive an array
                containing that single object.
                <br />
                Furthermore, only objects that match all the parameters provided
                in the URL link will be returned.
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/get_data/{database_name}/{modal_name}?field1=value1&field2=value2"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/1/m1715181391598/get_data/myproject/usermodal?location=Indore"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-6" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Get All Data
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                This API allows you to retrieve data array without filters of an
                particular modal.
                <br /> Please note that the response is an array of objects.
                <br />
                Replace "database_name" with your desired database name and
                "modal_name" with your desired model name.
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/get_all_data/{database_name}/{modal_name}"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL + "/1/m1715181391598/get_all_data/myproject/usermodal"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-7" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Get All Modal Names
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                This API allows you to retrieve Modal names array of an
                particular database. Please note that the response is an array
                of Strings(Modal names).
                <br />
                Replace "database_name" with your desired database name.
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/get_all_modal/{database_name}"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">{URL + "/1/m1715181391598/get_all_modal/myproject"}</h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-8" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Delete Data
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                This API allows you to delete data object(s) of an particular
                modal. Please note that all the data in database that matches
                all the query field get deleted.
                <br />
                Response is an object with success and message(msg): Replace
                "database_name" with your desired database name and "modal_name"
                with your desired model name. Pass field names and values as
                query parameters in the URL, adding additional fields using "&".
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className="
 overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/delete_data/{database_name}/{modal_name}?field1=value1&field2=value2"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className="
 overflow-x-auto">
                  {URL +
                    "/1/m1715181391598/delete_data/myproject/usermodal?location=Indore"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
            <div>
              <h2 id="2-sub-9" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
                Delete Modal
              </h2>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
              >
                This API allows you to delete data object(s) of an particular
                database. Please note that all the data in database that matches
                all the query field get deleted.
                <br />
                Response is an object with success and message(msg): Replace
                "database_name" with your desired database name and "modal_name"
                with your desired model name.
              </p>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Sample Parameter Link:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className="
 overflow-x-auto">
                  {URL +
                    "/{version}/{API_SECRET_KEY}/delete_modal/{database_name}/{modal_name}"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Example with values:
              </h1>
              <div className="ml-10 h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer  border-gray-200 rounded-lg   text-slate-200 px-3 py-1 text-lg font-mono my-2">
                <h3 className=" overflow-x-auto">
                  {URL + "/1/m1715181391598/delete_modal/myproject/usermodal"}
                </h3>
                {/* <h2 className="text-slate-600 ">//Just for Example</h2> */}
              </div>
              <h1 className="ml-10 text-xl font-mono font-medium mt-5">
                Response :
              </h1>
              <img alt=""                 src={docs1}
                className="w-[90%] self-center mx-auto border border-black mt-5 rounded-lg"
              ></img>
            </div>
          </div>
          <div>
            <h1 id="main-3" className="text-3xl font-semibold font-sans mb-5 mt-10">
              Troubleshooting and Error Handling
            </h1>
            <h2 id="3-sub-1" className="text-xl font-medium font-mono mt-5 ml-5 text-slate-800">
              Safe Practices
            </h2>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              <li>
                Use valid and correct API Secret Key, do not share it with
                anyone and while using it in a project or application encode it
                in environment variable file for safety{" "}
              </li>
              <li>
                Use correct version number and with time keep checking for
                version number on the web documents if it gets updated{" "}
              </li>
              <li>
                Url parameters and queries are Case-Sensitive so be specific
                while typing. "Name" and "name" are two different strings and
                are treated seprately. And all the predefined parameters are in
                LowerCase.
              </li>
              <li>
                Provide correct database name,modal name and data provided and
                double check it, as you are interacting directly with database
                one single mistake may cause big issues like data loss.
              </li>
              <li>
                When performing database operations via URL parameters, ensure
                that fields do not have the same name. Only if you want to
                create an object value, then having fields with the same name is
                acceptable. This ensures proper data handling and prevents
                ambiguity in your database operations.
              </li>
            </p>
            <h2 id="3-sub-2" className="text-xl font-medium font-mono ml-5 text-slate-800 mt-5">
              Errors
            </h2>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              During retrieval and deletion operations on the database, you
              might encounter various errors. Below is a list of common error
              codes, their meanings, and potential solutions:
            </p>
            <div
              style={{ fontFamily: "Roboto" }}
              className="flex flex-col bg-slate-300 w-fit mt-4 mx-auto text-lg font-normal"
            >
              <div className="flex ">
                <h4 className="border border-black w-16 md:w-48 text-center py-2 ">
                  Error-code
                </h4>
                <h4 className="border border-black border-l-0 w-20 md:w-48 text-center py-2">
                  Meaning
                </h4>
                <h4 className="border border-black border-l-0 w-32  md:w-48 text-center py-2">
                  Solution
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-16 md:w-48 border-t-0 text-center py-2 ">
                  202
                </h4>
                <h4 className="border border-black border-l-0 border-t-0  w-20 md:w-48 text-center py-2">
                  Wrong Url
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-32  md:w-48 text-center py-2">
                  Recheck with Docs
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-16 md:w-48 text-center py-2 border-t-0">
                  401
                </h4>
                <h4 className="border border-black border-l-0 border-t-0  w-20 md:w-48 text-center py-2">
                  Invalid API Secret Key
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-32  md:w-48 text-center py-2">
                  Correctly copy API key
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-16 md:w-48 text-center py-2 border-t-0">
                  404
                </h4>
                <h4 className="border border-black border-l-0 border-t-0  w-20 md:w-48 text-center py-2">
                  Not Found
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-32  md:w-48 text-center py-2">
                  Database / Modal name incorrct or doesn't exists
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-16 md:w-48 text-center py-2 border-t-0">
                  409
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-20 md:w-48 text-center py-2">
                  Already exists
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-32  md:w-48 text-center py-2">
                use unused Database / Modal name 
                </h4>
              </div>
              <div className="flex ">
                <h4 className="border border-black w-16 md:w-48 text-center py-2 border-t-0">
                  429
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-20 md:w-48 text-center py-2">
                  Too many requests
                </h4>
                <h4 className="border border-black border-l-0 border-t-0 w-32  md:w-48 text-center py-2">
                  <a className="text-blue-500 underline cursor-pointer">Get Premium</a>
                </h4>
              </div>
            </div>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-5"
            >
              When integrating URLDB into your applications, it's crucial to
              implement robust error handling mechanisms. Here are some best
              practices:
            </p>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-lg font-light tracking-wide ml-10 text-justify mt-3"
            >
              <li>
                <strong>Check for Expected Responses:</strong> Verify that the
                response from URLEDB matches the expected format and data.
              </li>
              <li>
                <strong>Handle Errors Gracefully:</strong> Anticipate potential
                errors such as network issues or server errors and provide
                appropriate feedback to the user.
              </li>
              <li>
                <strong>Log Errors:</strong> Record any errors encountered
                during API calls for debugging purposes.
              </li>
              <li>
                <strong>Retry Mechanism:</strong> Implement a retry mechanism
                for transient errors to improve reliability.
              </li>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
