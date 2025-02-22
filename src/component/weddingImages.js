"use client";

import React, { useState } from "react";
import Image from "next/image";
import { weddingGallery } from "../app/data/weddingGallery";

const WeddingImages = () => {
  const [selectedWedding, setSelectedWedding] = useState(null);
  const [selectedTab, setSelectedTab] = useState("haldi");

  return (
    <div className="container mx-auto px-4">
      {!selectedWedding ? (
        <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddingGallery.map((wedding) => (
            <div
              key={wedding.id}
              className="cursor-pointer border bg-gray-100 p-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
              onClick={() => setSelectedWedding(wedding)}
            >
              <Image
                src={wedding.bannerImage}
                alt={wedding.title}
                width={500}
                height={300}
                className="w-full aspect-[16/9] object-cover rounded-md"
              />
              <p className="text-center mt-2 text-sm sm:text-lg font-semibold">
                {wedding.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button
            className="mb-4 p-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            onClick={() => setSelectedWedding(null)}
          >
            ⬅ Back
          </button>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {["haldi", "mehandi", "sangeet"].map((tab) => (
              <button
                key={tab}
                className={`p-2 border rounded-lg ${
                  selectedTab === tab
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                } transition`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {selectedWedding.events[selectedTab]?.length > 0 ? (
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedWedding.events[selectedTab].map((imgSrc, index) => (
                <div key={index} className="w-full">
                  <Image
                    src={imgSrc}
                    alt={`${selectedWedding.title} ${selectedTab}`}
                    layout="responsive"
                    width={500}
                    height={400}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No images available for this category.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default WeddingImages;
