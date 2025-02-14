import React from 'react';

function Lower() {
  const items = [
    {
      number: "01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/pic3.jpg",
    },
    {
      number: "02",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/pic4.jpg",
    },
    {
      number: "03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/pic5.jpg",
    },
    {
      number: "04",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/pic6.jpg",
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-7xl mx-auto">
          <div className="mb-12 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl  leading-tight">
              Design is the way how you express the feelings
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col space-y-4 group cursor-pointer">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-gray-800">{item.number}</p>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>

                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg transition-transform transform group-hover:scale-105 group-hover:shadow-2xl">
                  <img 
                    src={item.imageUrl}
                    alt={`Design ${item.number}`}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
                    <h2 className="font-semibold mb-1 text-lg">Title {item.number}</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Lower;
