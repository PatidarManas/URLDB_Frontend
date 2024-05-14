import React from "react";
import landimg1 from "../Land1.jpeg"
import NavBar from "./Navbar";
import Footer from "./Footer";
const Home = ({user,isPrimeUser,islogin}) => {
  const URL = "https://urldb-backend.onrender.com";
  return (
    <div>
      {/* Section 1 */}
      
      <NavBar user={user} isPrimeUser={isPrimeUser} islogin={islogin}/>

      {/* Section 2 */}
      <section className="px-2 py-20 pt-10 bg-slate-100 md:px-0 ">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5 mt-20">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Database-on-Demand: </span>
                  <span className="block text-indigo-600 xl:inline">
                    Just a URL Away!
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Streamline Your Development: Instantly Create Databases with a
                  Simple URL, Simplifying Website Building from Start to Finish!
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="/docs"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Documentation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a
                    href="/docs"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src={landimg1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 lg:pl-52 lg:pr-20 min-h-screen">
        <div className="py-10 -px-5 text-gray-400 text-4xl">
          <h1 className="text-3xl font-semibold leading-tight">How to Use</h1>
        </div>
        <ol class="relative border-s border-gray-700 pt-7 pb-7 md:pt-20 md:pb-24 max-w-7xl lg:px-16 mx-5">
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                class="w-2.5 h-2.5  text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold  text-white">
              Generate Your Database URL{" "}
            </h3>
            <div className="h-auto bg-slate-900 border-2 flex flex-wrap justify-between cursor-pointer hover:opacity-45 border-gray-200 rounded-lg w-full   text-slate-200 px-3 py-1 text-lg font-mono my-2">
              <h3>
                {URL +
                  "/ {version}/create_modal/ {database_name}/ {new_modal_name}"}
              </h3>
              <h2 className="text-slate-600 ">//Just for Example</h2>
            </div>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Use our comprehensive documentation to generate a unique URL
              tailored to your database parameters
            </p>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                class="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Read Documentation
            </a>
          </li>
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Create an Account and Generate Your API Secret Key
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Sign up to instantly receive your API secret key for secure
              database access.
            </p>
            <a
              href="#"
              class="my-2 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-300 bg-blue-900 border-0 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
            >
              Get Api Secret Key
            </a>
          </li>
          <li class="ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              You're All Set! 🎉
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Congratulations! You're now ready to deploy your applications and
              scale effortlessly.
            </p>
          </li>
        </ol>
      </section>

      {/* Section 3 */}
      <section className="w-full bg-slate-100 pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>
          {/* Content */}
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Effortless Database Management
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Simplify your database tasks with ease.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Instant Database Creation
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Seamless Scalability
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Intuitive Interface
              </li>
            </ul>
          </div>
          {/* End  Content */}
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          {/* Content */}
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Streamlined Development Workflow
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Accelerate website development with streamlined workflows.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                URL-Based Operations
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Integration Capabilities
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Robust APIs
              </li>
            </ul>
          </div>
          {/* End  Content */}
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="py-20 bg-slate-100">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Embracing Tomorrow
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  Prepare for transformative advancements! Elevate analytics,
                  seamlessly integrate, and empower users with sophisticated
                  management capabilities:
                </p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <span className="font-medium text-gray-500">
                      Advanced Analytics
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span className="font-medium text-gray-500">
                      Seamless Integration
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="font-medium text-gray-500">
                      Empowered User Management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 */}
      <section className="flex items-center justify-center px-32 py-20 bg-slate-100 min-w-screen">
        <div className="px-16">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
              Don't just take our word for it
            </p>
            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              See what others are saying
            </h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full" />
            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className=" flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center ">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">John Doe</h4>
                    <p className="text-gray-600">CEO of Something</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "This is a no-brainer if you want to take your business to the
                  next level. If you are looking for the ultimate toolset, this
                  is it!"
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">Jane Doe</h4>
                    <p className="text-gray-600">CTO of Business</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "Thanks for creating this service. My life is so much easier.
                  Thanks for making such a great product."
                </blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">John Smith</h4>
                    <p className="text-gray-600">Creator of Stuff</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">
                  "Packed with awesome content and exactly what I was looking
                  for. I would highly recommend this to anyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 6 */}
      <section className="box-border py-8 leading-7 text-gray-900 bg-slate-100 border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24 lg:px-52">
        <h1 className="text-3xl mb-10 font-semibold">Pricings</h1>
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          {/* Pricing tab 1 */}
          <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white  border border-slate-200shadow shadow-slate-950/5">
              <div className="mb-5">
                <div className="text-slate-900  font-semibold mb-1">
                  Basic
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span
                    className="text-slate-900  font-bold text-4xl"
                    x-text="isAnnual ? '29' : '35'"
                  >
                    Free
                  </span>
                </div>
                <div className="text-sm text-slate-500 mb-5">
                  Explore the platform at no cost.
                </div>
                <a
                  href="/signup"
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300  transition-colors duration-150"
                  
                >
                  Continue
                </a>
              </div>
              <div className="text-slate-900  font-medium mb-3">
                Includes:
              </div>
              <ul className="text-slate-600  text-sm space-y-3 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Limited Requests</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Moderate response time</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Customer Support</span>
                </li>
                
              </ul>
            </div>
          </div>
          {/* Pricing tab 2 */}
          <div className="dark h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
              <div className="absolute top-0 right-0 mr-6 -mt-4">
                <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                  Most Popular
                </div>
              </div>
              <div className="mb-5">
                <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                  Perform
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                    Rs
                  </span>
                  <span
                    className="text-slate-900 dark:text-slate-200 font-bold text-4xl"
                    x-text="isAnnual ? '49' : '55'"
                  >
                    499
                  </span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                
                <a
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                  href="/premium"
                >
                  Purchase Plan
                </a>
              </div>
              <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
                Includes:
              </div>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited Requests</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Faster Response time</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Prefered customer support</span>
                </li>
                
                
              </ul>
            </div>
          </div>
          {/* Pricing tab 3 */}
          <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white  border border-slate-200  shadow shadow-slate-950/5">
              <div className="mb-5">
                <div className="text-slate-900  font-semibold mb-1">
                  Enterprise
                </div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-slate-900  font-bold text-3xl">
                    Rs
                  </span>
                  <span
                    className="text-slate-900  font-bold text-4xl"
                    x-text="isAnnual ? '79' : '85'"
                  >
                    4599
                  </span>
                  <span className="text-slate-500 font-medium">/year</span>
                </div>
                <div className="text-sm text-slate-500 mb-5">
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                  href="/premium"
                >
                  Purchase Plan
                </a>
              </div>
              <div className="text-slate-900 font-medium mb-3">
                Includes:
              </div>
              <ul className="text-slate-600 text-sm space-y-3 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited Requests</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Faster Response time</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Prefered customer support</span>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section 7 */}
      <Footer/>
    </div>
  );
};

export default Home;
