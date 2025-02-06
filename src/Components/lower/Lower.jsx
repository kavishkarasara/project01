import React from 'react';

function Lower() {
  const items = [
    {
      number: "01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/NDT pic 3.jpg",
    },
    {
      number: "02",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/NDT pic 4.jpg",
    },
    {
      number: "03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/NDT pic 5.jpg",
    },
    {
      number: "04",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/src/assets/image/NDT pic 6.jpg",
    }
  ];

  return (
    <div className="min-h-screen w-full">
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl leading-tight">
              Design is the way how you express the feelings
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <p className="text-2xl font-semibold">{item.number}</p>
                  <p className="text-lg text-gray-600">
                    {item.description}
                  </p>
                </div>

                <div className="relative h-64 w-full rounded-lg overflow-hidden group">
                  <img 
                    src={item.imageUrl}
                    alt={`Design ${item.number}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
                    <h2 className="font-semibold mb-1">Title</h2>
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