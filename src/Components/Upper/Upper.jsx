import React from "react";

function Upper() {
  return (
    <div className="">
      <section className="bg-gray-400 flex flex-col items-center justify-center">
        
        <section className="text-center px-4 lg:px-6 md:flex-row md:text-start md:gap-8">
          <div className="flex flex-col md:flex-row items-center">
          <div className="max-w-xl px-4 sm:px-6 md:px-8 py-10 flex flex-col items-start text-start z-10 ">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Interior Design
              </h1>
              <p className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 pt-4 sm:pt-6">
              Create a space that reflects your style with ABC (pvt) Ltd. We turn your vision into reality, crafting rooms that are both beautiful and functional.
              </p>
              <button className="bg-black text-white py-2 sm:py-3 px-5 sm:px-8 text-lg rounded-full outline-none transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300">
              Explore
              </button>
          </div>

          <div className="w-full h-[500px] md:h-[350px]  md:w-[400px] bg-center bg-cover mt-0 md:mt-0 md:-ml-40 lg:h-[400px]" 
            style={{
              backgroundImage: "url('/src/assets/image/pic2.jpg')",
            }}
          ></div>

          </div>
        </section>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6  w-full max-w-7xl">
          <div
            className="w-full  md:w-[350px] md:h-[350px] bg-center bg-cover z-0 ml-6 mr-6 sm:w-[600px]"
            style={{
              backgroundImage: "url('/src/assets/image/pic1.jpg')",
            }}
          ></div>
          <div className="bg-transparent md:bg-white/40 md:rounded-full p-4 md:p-6 w-full md:w-[768px] md:h-[250px] z-10 md:-ml-20 sm:rounded-xl sm:bg-white/40 ">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6">
              <div className="w-full md:w-[150px] text-start p-2">
                <h3 className="text-xl md:text-2xl font-bold">5.8</h3>
                <p className="my-2">---</p>
                <p className="md:text-sm text-lg">
                Get expert design tips to enhance your home. From colors to layouts, we provide practical advice for every space.
                </p>
              </div>
              <div className="w-full md:w-[150px] text-start p-2">
                <h3 className="text-xl md:text-2xl font-bold">99+</h3>
                <p className="my-2">---</p>
                <p className="text-sm">
                View our portfolio of stunning projects. See how we’ve transformed spaces with creativity and precision.
                </p>
              </div>
              <div className="w-full md:w-[150px] text-start p-2 mb-6">
                <h3 className="text-xl md:text-2xl font-bold">110K</h3>
                <p className="my-2">---</p>
                <p className="text-sm">
                Join our design community. Share ideas, get inspired, and stay updated on the latest trends.
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