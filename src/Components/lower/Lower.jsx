import React from 'react';

function Lower() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
              Design is the way how <br /> you express the feelings
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="text-4xl text-gray-400">01</p>
                <p className="text-lg text-gray-600">We begin by understanding your vision and translating it into a design that reflects your unique style.</p>
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img src="/src/assets/image/pic3.jpg" alt="Conceptualization" className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h2 className="font-semibold text-lg">Conceptualization</h2>
                  <p className="text-sm">Our collaborative approach ensures your ideas are at the heart of the project.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
              <div className="space-y-2">
                <p className="text-4xl  text-gray-400">02</p>
                <p className="text-lg text-gray-600 xxl:text-4xl 2xl:pb-2">Every detail is carefully planned to create a space that is both functional and aesthetically pleasing.</p>
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img src="/src/assets/image/pic4.jpg" alt="Planning" className="object-cover w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h2 className="font-semibold text-lg">Planning</h2>
                  <p className="text-sm">We focus on layouts, materials, and color schemes to bring your vision to life.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="text-4xl  text-gray-400">03</p>
                <p className="text-lg text-gray-600 lg:pb-7 2xl:pb-0">Our skilled team brings the design to life with precision and attention to detail.</p>
              </div>
              <div className="mt-10 relative h-64 w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl sm:bg-bottom md:bg-bottom">
                <img src="/src/assets/image/pic5.jpg" alt="Execution" className="object-cover w-full h-full " />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h2 className="font-semibold text-lg">Execution</h2>
                  <p className="text-sm">We ensure every element is crafted to perfection, delivering a space that exceeds your expectations.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="text-4xl  text-gray-400">04</p>
                <p className="text-lg text-gray-600 xl:pb-6 2xl:pb-0  ">Your dream environment is now a reality, tailored to your lifestyle and preferences.</p>
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img src="/src/assets/image/pic6.jpg" alt="Revelation" className="object-bottom w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h2 className="font-semibold text-lg">Revelation</h2>
                  <p className="text-sm">Experience the joy of stepping into a beautifully transformed space.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Lower;