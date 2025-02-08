import React from "react";

function Upper() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-400 flex flex-col items-center justify-center">
        
        <section className="text-center px-4 lg:px-6 md:flex-row md:text-start md:gap-8">
          <div className="flex flex-col md:flex-row items-center">
          <div className="max-w-xl px-4 sm:px-6 md:px-8 py-10 flex flex-col items-start text-start z-10 ">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Interior Design
              </h1>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 py-4 sm:py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
              </p>
              <button className="bg-black text-white py-2 sm:py-3 px-5 sm:px-8 text-lg rounded-full outline-none hover:bg-gray-800 transition duration-300">
              Explore
              </button>
          </div>

          <div 
  className="w-full h-[250px] sm:h-[300px] md:h-[400px] md:w-[400px] bg-center bg-cover  mt-6 md:mt-0 -mx-40" 
  style={{
    backgroundImage: "url('/src/assets/image/NDT pic 2.jpg')",
  }}
></div>

          </div>
        </section>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 p-4 md:p-6 w-full max-w-7xl">
          <div
            className="w-full h-[200px] md:w-[400px] md:h-[300px] bg-center bg-cover z-0"
            style={{
              backgroundImage: "url('/src/assets/image/NDT pic 1.jpg')",
            }}
          ></div>
          <div className="bg-transparent md:bg-white/40 rounded-full p-4 md:p-6 w-full md:w-[700px] md:h-[250px] z-10 -mx-20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6">
              <div className="w-full md:w-[150px] text-start p-2">
                <h3 className="text-xl md:text-2xl font-bold">5.8</h3>
                <p className="my-2">---</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                </p>
              </div>
              <div className="w-full md:w-[150px] text-start p-2">
                <h3 className="text-xl md:text-2xl font-bold">99+</h3>
                <p className="my-2">---</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                </p>
              </div>
              <div className="w-full md:w-[150px] text-start p-2">
                <h3 className="text-xl md:text-2xl font-bold">110K</h3>
                <p className="my-2">---</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Upper;