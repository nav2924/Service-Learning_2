import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 bg-gradient-to-b from-slate-50 via-blue-100 to-blue-300 border-gray-200">
      <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Nurturing the Future: Bethel Child Care Mission
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8">
                  Our mission is to provide a loving, educational environment
                  where children can grow, learn, and thrive. Through our
                  activities and programs, we strive to empower the next
                  generation with the tools they need to succeed.
                </p>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    2943
                  </p>
                  <p className="ml-3 text-sm text-gray-900">
                    Children
                    <br />
                    Cared For
                  </p>
                </div>
                <div className="flex items-center jusitfy-center">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Donate{" "}
                  </button>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                  >
                    <line x1="0.7" y1="10.5" x2="15.7" y2="0.5"></line>
                    <line x1="0.7" y1="17.5" x2="15.7" y2="7.5"></line>
                    <line x1="0.7" y1="24.5" x2="15.7" y2="14.5"></line>
                    <line x1="0.7" y1="31.5" x2="15.7" y2="21.5"></line>
                    <line x1="0.7" y1="38.5" x2="15.7" y2="28.5"></line>
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl">
                    Rs1000+
                  </p>
                  <p className="ml-3 text-sm text-gray-900">
                    Donations
                    <br />
                    Received
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="/stock.png"
                alt="Bethel Child Care Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
