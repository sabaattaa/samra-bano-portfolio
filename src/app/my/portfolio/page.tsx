import React from "react";
import img1 from "../../../../public/1.jpeg";
import img2 from "../../../../public/2.jpeg";
import img3 from "../../../../public/3.jpeg";
import img4 from "../../../../public/4.jpeg";

const MyPortfolio = () => {
  const images = [
    { img: img1, name: "Bano", desc: "Elegant brand identity designs" },
    { img: img2, name: "Style", desc: "Modern and minimal posters" },
    { img: img3, name: "Wedding", desc: "Custom wedding invitation cards" },
    { img: img4, name: "Cards", desc: "Creative event & business cards" },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">🎨 My Portfolio</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          A curated collection of my graphic design projects — crafted with precision, creativity, and a deep sense of visual storytelling.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <img
                src={`${item.img.src}`}
                alt={item.name}
                style={{objectFit:"contain"}}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
