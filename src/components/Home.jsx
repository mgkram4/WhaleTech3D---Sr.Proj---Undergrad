import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoSM from "./assets/logoSM.png";
// import Particles from "react-particles";
// import Particlesbg from "./Particlesbg";

function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const containerRef = useRef(null);

  const handleClick4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScrollToTop2 = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Hero */}
      <div
        ref={ref4}
        className="flex justify-center items-center bg-banner-bg-hero2 bg-center bg-cover min-h-screen "
      >
        {/* <Particles /> */}
        <div
          id="Hero"
          className="text-center flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold text-white text-shadow-sm">
            From File to Physical
          </h1>
          <p className="mt-4 text-[rgba(51,158,173,255)]">
            Bring your 3D objects to life
          </p>
          <div className="flex flex-col justify-center mt-4 w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
            <button
              onClick={handleClick}
              className="flex-grow flex items-center text-white justify-center py-3 px-5 space-x-3 border-2 rounded-lg shadow-sm hover:bg-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-white hover:text-[rgba(5,33,40,255)] w-full"
            >
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3v18h18V3H3zm16.5 16.5H4.5v-15h15v15zm-7-11.25h-1.5v3h1.5v-3zm3 0h-1.5v3h1.5v-3zm-6 0H9v3h1.5v-3z"
                  fill="#FFFFFF"
                />
              </svg>

              <span>About</span>
            </button>
            <Link to="/Form">
              <button className="flex-grow flex items-center justify-center py-3 px-11 space-x-3 rounded-lg shadow-sm hover:bg-[rgba(41,128,143,255)] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-[rgba(51,158,173,255)] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-9 14H4v-2h8v2zm5-4H4v-2h13v2zm0-4H4V8h13v2z"
                  />
                </svg>
                <span>Quote</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About the Company */}
      <div
        ref={ref}
        className="bg-banner-bg-about bg-cover bg-center min-h-screen flex items-center justify-center "
      >
        <div class="flex flex-col mx-auto text-center items-center lg:flex-row lg:h-auto max-w-screen-xl">
          <div class=" items-center justify-center  lg:flex-1">
            <img
              src={logoSM}
              class="rounded-3xl hover:-translate-y-2 transition-all duration-200 flex-shrink-0 m-auto max-w-full lg:max-w-sm max-h-48"
              alt="logoNoName"
            />
          </div>

          <div class="flex flex-col items-center justify-center lg:flex-1 p-6 lg:p-20">
            {/* Right */}
            <h1 className="text-3xl font-bold bg-white rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all mb-2 p-4">
              What is WhaleTech3D?
            </h1>
            <p className=" font-bold p-4 flex-grow shadow-xl rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all text-md lg:text-xl">
              We are a 3D printing manufacturer that leverages the latest 3D
              printing technology to create customized, unique products for
              consumers, offering a truly personalized experience. We also pride
              ourselves in delivering one-on-one customer service with every
              purchase or requested quote.
            </p>{" "}
            <button
              onClick={handleClick2}
              className="flex-grow flex items-center text-black mt-4 justify-center py-3 px-5 space-x-3 border-2 rounded-lg shadow-sm hover:bg-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-white hover:text-[rgba(5,33,40,255)] w-full"
            >
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3 3v18h18V3H3zm16.5 16.5H4.5v-15h15v15zm-7-11.25h-1.5v3h1.5v-3zm3 0h-1.5v3h1.5v-3zm-6 0H9v3h1.5v-3z" />
              </svg>
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* How to get started */}
      <div
        ref={ref2}
        className="bg-banner-bg-howto bg-cover min-h-screen flex flex-col justify-center items-center "
      >
        <div className="flex flex-col mx-auto text-center items-center lg:flex-row lg:h-auto max-w-screen-xl">
          <div className="flex flex-col  text-white items-center justify-center">
            <div className="bg-[rgba(5,33,40,255)] rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all">
              <div className="text-3xl  ">How to Get Started?</div>
              <div className="flex flex-col  text-xl m-6 shadow-2xl">
                Add products directly to your cart.{" "}
              </div>
              <Link to="/Products">
                <button
                  onClick={handleScrollToTop}
                  className="flex items-center text-xl justify-center mt-2 py-3 px-5 border-2 rounded-lg shadow-sm hover:bg-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-white hover:text-[rgba(5,33,40,255)] w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3h-4.18a2 2 0 0 0-1.65.85l-1.3 1.95a1 1 0 0 1-1.6 0l-1.3-1.95A2 2 0 0 0 9.18 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-3.76 10.65a1 1 0 1 1-1.41 1.41l-2.5-2.5a1 1 0 0 1 0-1.41l2.5-2.5a1 1 0 1 1 1.41 1.41L13.42 10H17a1 1 0 0 1 0 2h-3.58l1.24 1.65z"
                    />
                  </svg>
                  <span>Products</span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col text-white items-center justify-center mt-5 ">
              <div className="bg-[rgba(51,158,173,255)]  rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all">
                <div className="text-3xl font-bold">Custom Products?</div>
                <div class="flex-col text-lg m-6  ">
                  Fill Out a Form to recive a Quote.
                </div>
                <Link to="/Form">
                  <button
                    onClick={handleScrollToTop2}
                    class="flex-grow flex items-center text-xl justify-center py-3 px-6 rounded-lg shadow-sm hover:bg-[rgba(41,128,143,255)] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-[rgba(51,158,173,255)] border-white border-2 w-full
                  mt-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-9 14H4v-2h8v2zm5-4H4v-2h13v2zm0-4H4V8h13v2z"
                      />
                    </svg>
                    <span>Quote</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-[rgba(5,33,40,255)] rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all">
            <div class="flex-col text-2xl text-white text-center p-2 mt-7 justify-center">
              Mission Statement & Values
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                onClick={handleClick3}
                className="flex-grow flex items-center text-white justify-center py-3 px-5 space-x-3 border-2 rounded-lg shadow-sm hover:bg-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-white hover:text-[rgba(5,33,40,255)] w-full"
              >
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 3v18h18V3H3zm16.5 16.5H4.5v-15h15v15zm-7-11.25h-1.5v3h1.5v-3zm3 0h-1.5v3h1.5v-3zm-6 0H9v3h1.5v-3z"
                    fill="#FFFFFF"
                  />
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mission  */}
      <div
        ref={ref3}
        className="bg-banner-bg-about bg-cover bg-center min-h-screen flex items-center justify-center"
      >
        <div class="flex flex-col mx-auto text-center items-center lg:flex-row lg:h-auto max-w-screen-xl w-11/12 md:w-10/12">
          <div class="flex flex-col items-center justify-center lg:flex-1 p-6 lg:p-10 md:p-20">
            <h1 className="text-4xl lg:text-4xl font-bold bg-white rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all mb-4 p-4">
              Mission Statment
            </h1>
            <p className="text-2xl md:text-sm lg:text-2xl p-4 flex-grow shadow-xl rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all">
              Our Mission: Deliver sustainable, personalized, and high-quality
              products using 3D printing technology.
            </p>
            <div className="flex-col mt-4">
              <h1 className="text-4xl md:text-2xl lg:text-4xl mt-4 font-bold bg-white rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all mb-4 p-4">
                Values
              </h1>

              <ul className="text-2xl md:text-2xl space-y-2 lg:text-2xl w-80 p-4 flex-grow shadow-xl rounded-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all m-4">
                <li>Innovation</li>

                <li>Creativity</li>
                <li>Growth</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                onClick={handleClick4}
                className="flex-grow flex items-center text-black justify-center py-3 px-5 space-x-3 border-2 rounded-lg shadow-sm hover:bg-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center bg-transparent hover:bg-white hover:text-[rgba(5,33,40,255)] w-full"
              >
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3v18h18V3H3zm16.5 16.5H4.5v-15h15v15zm-7-11.25h-1.5v3h1.5v-3zm3 0h-1.5v3h1.5v-3zm-6 0H9v3h1.5v-3z" />
                </svg>

                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
