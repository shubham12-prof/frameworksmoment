"use client";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "../../component/ImageGallery";

const imagesData = {
  wedding1: {
    haldi: ["img1.jpg", "img2.jpg", "img3.jpg"],
    mehandi: ["img1.jpg", "img2.jpg", "img3.jpg"],
    sangeet: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
  wedding2: {
    haldi: ["img1.jpg", "img2.jpg", "img3.jpg"],
    mehandi: ["img1.jpg", "img2.jpg", "img3.jpg"],
    sangeet: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
  wedding3: {
    haldi: ["img1.jpg", "img2.jpg", "img3.jpg"],
    mehandi: ["img1.jpg", "img2.jpg", "img3.jpg"],
    sangeet: ["img1.jpg", "img2.jpg", "img3.jpg"],
  },
};

const Portfolio = () => {
  const [selectedWedding, setSelectedWedding] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState("haldi");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-[50vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="./images/wedding1/haldi/img3.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative text-center px-4 sm:px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Wedding Portfolio
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Capturing moments of love & joy.
          </p>
        </div>
      </div>

      {!selectedWedding ? (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(imagesData).map((wedding) => (
            <div
              key={wedding}
              className="cursor-pointer relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              onClick={() => setSelectedWedding(wedding)}
            >
              <Image
                src={`./images/${wedding}/img1.jpg`}
                alt={wedding}
                width={400}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-xl font-bold capitalize">
                  {wedding.replace("wedding", "Wedding ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <button
            className="mb-4 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-gray-800 transition"
            onClick={() => setSelectedWedding(null)}
          >
            ← Back to Wedding Selection
          </button>

          <div className="text-center mb-6">
            {Object.keys(imagesData[selectedWedding]).map((event) => (
              <button
                key={event}
                className={`px-4 sm:m-4 py-2 mx-2 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedEvent === event
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                {event.charAt(0).toUpperCase() + event.slice(1)}
              </button>
            ))}
          </div>

          <ImageGallery
            folder={`${selectedWedding}/${selectedEvent}`}
            images={imagesData[selectedWedding][selectedEvent]}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
