import React from 'react';

function Upper() {
  return (
    <div className=''>
      <section className="bg-gray-400 flex flex-col items-center justify-center p-8 max-h-screen">

        <section className="flex flex-col items-center text-center mt-8 px-6 md:flex-row md:text-start md:items-center md:gap-8">
          <div className='flex flex-col md:flex-row align-middle bg-transparent'>
          <div className="max-w-xl p-6 justify-center ">
            <h1 className="text-3xl md:text-5xl font-extrabold ">Interior Design</h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8  py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
            </p>
            <button className="bg-black text-white rounded-e-full py-3 px-8 text-lg rounded-s-full">
              Explore
            </button>
          </div>
          

          <div className="bg-[url('https://s3-alpha-sig.figma.com/img/e24c/ca4f/5525721f5fc61121a6a22feba18d1ec2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDX1ZenKd6mPbyG3wOkFzJm-zB4Cd9AvpQvcu0bSbQJ3Yfo-mZD1rjhErg0U6ICGBlPad72GXgagF8sKATsd5wjE7kDekQyCmARJIn8FElOuUHSROmfdY0BZf3e9qGZhhkVvO5x0UeMNqCb~yD-qDI0LqvXS8cp-~dka1DbFqeSEphnVXp86b9Wc1dKPBU3yReSSCZsjxoo7aPp0AtFvvnjC59cRgaTYScFHa2LZyzvCU9a6Wq2acJiPUPx-szbbLzw6dK6Gt3HWzMTG6b71hJfmjpZag5i9GUNda9NB7qr5zf43AyYZzAeMKlJb0j8qk~t6S8o6h~cMb56RIYW7Dg__')] h-[400px] w-[400px] bg-center bg-cover">
          </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 p-6 rounded-e-full rounded-s-full backdrop-blur-md">
  <div
    className=" md:w-[350px] md:h-[250px] bg-cover bg-center"
    style={{
      backgroundImage: "url('https://s3-alpha-sig.figma.com/img/e977/470e/ea9d8aa0bdca6515c4700e904ef8731d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cNm59X6hrZCAkbfIokAxoiSK3CccHXs~-VfRgxG0S08ntpQzzYzH-csSsjlVnbQeVsEXXfhUdGFK5FGo9N3ahPJWxb2AqU~1JmLN01KDj0MX9uVHaGxmYkG~F7GE3XuLo05840AErMhGV3YZY1ud5U9BzGF61Bwui2wqWQwxLVX5dfF~pQDPvXuWG3plCKiaRfjVJhL2--KBdcp9a8gu3Wv87YnBcqCQ2Qd0htxCNqSlNwT2SYULawLBvNdGWFGffbTyDgbBg4IZd4JdBO9D0ZNgtv~Ybi6H7QIX6N8JTREgjgCh6FjozevKMMjjrCl-B7sPHAwGh~Hg4OfrRXRgqg__')",
    }}
  ></div>
      <div className='bg-white rounded-full opacity-50'>
  <div className="flex  items-center justify-center gap-6 p-6  md:w-[700px]">
    {[
      {
        value: "5.8",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.",
      },
      {
        value: "99+",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.",
      },
      {
        value: "110K",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="h-[150px] w-[150px] flex flex-col items-center md:items-start justify-center text-center md:text-start"
      >
        <h3 className="text-xs md:text-xl font-bold">{item.value}</h3>
        <p className="text-xs md:text-lg">___</p>
        <p className="text-xs text-black font-semibold">{item.description}</p>
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
