import React from 'react';

function Upper() {
  return (
    <div className="w-full">
      <section className="bg-gray-400 flex flex-col items-center justify-center">
        
        <section className=" text-center mt-8 px-6 md:flex-row md:text-start md:gap-8">
          <div className="flex flex-col md:flex-row  -mx-24 items-center">
            <div className="max-w-xl p-6 pt-10 justify-center z-0">
              <h1 className="text-3xl md:text-6xl font-bold">Interior Design</h1>
              <p className="text-gray-700 text-lg md:text-xl mb-8 py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
              </p>
              <button className="bg-black text-white py-3 px-8 text-lg rounded-full outline-none">
                Explore
              </button>
            </div>
            <div
              className=" md:h-[400px] md:w-[400px] bg-center bg-cover pr-96 z-1 -mx-36 "
              style={{
                backgroundImage: "url('https://s3-alpha-sig.figma.com/img/e24c/ca4f/5525721f5fc61121a6a22feba18d1ec2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ic-KsTpZhisLWm9HaqA66zJbc6Gbt7VUKglwUy5wNN4k6wWCWpp~u8Cvwb~c64fibFjzNPRiKRyBtJ934-FnTCESE3tl85yHNdh9MRFbUeGCCXn4LQ1gLyB7ji8-KuMpEqFBzrcp3BQPXSVq~yaZ8f1kQzrqF9S1ylocBp2ifo5qx-aWSOqsgZYw4lOCNCSq8gJE1qKSpC2KjoamxvR6Mwd6vEX9eYexF6Jkzrqen06VyQve4DLapfNO01yQmebB-87aGKNOFFl-~NrOPo~0vWv0qrFd~66UsqedLhfAJyrydlRBQd7t~xTGQvjWlE4d6Jxri3EC1nLgmlJ-ai5g2w__')",
              }}
            ></div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 p-6 rounded-full ">
          <div
            className=" md:w-[400px] md:h-[300px] bg-center bg-cover z-0 block"
            style={{
              backgroundImage: "url('https://s3-alpha-sig.figma.com/img/e977/470e/ea9d8aa0bdca6515c4700e904ef8731d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjqCwOwSTheM5VFN-lU2ZiENyDFwk3xicCIhNAJyXKEJEMYijKV8N8MkDnNGATGTLKUzd0xuJB9RS54XCpEDxlTf1epFMzip6msDzgpP1OhTKFlhMzC32r69oV9m-njDLGGZyUMGHLFMYkibNUMZD8zrCfw8s-1samaqGYacfRLVM7Dx5OppMp8g5E3nRP7GIOP~0VyiHPNCWQIFh2I0n7KQnZlr50vDRxfH-aRrtnnR0PYK0HX6Z2dRzOWXS7rk0u35xBEiU9ei0sYN74bccM-VvqEA3D0tl2Wg-gi0itIFNlXAn9diHH~jfgo-jbsNSjZ2f~xo7W90adsJ6l-I4A__')",
            }}
          ></div>
          <div className="bg-white rounded-full opacity-50 p-6 w-full md:w-[700px] z-1 -mx-24">
            <div className="flex md:flex-row items-center justify-center gap-6">
              {[
                {
                  value: "5.8",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. ",
                },
                {
                  value: "99+",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. ",
                },
                {
                  value: "110K",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="h-full w-[150px] items-start text-start"
                >
                  <h3 className="text-xl md:text-2xl font-bold">{item.value}</h3>
                  <p>---</p>
                  <p className="text-sm md:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Upper; 