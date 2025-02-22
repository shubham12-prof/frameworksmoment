"use client";
import Image from "next/image";
import WeddingGallery from "../data/weddingGallery";
import WeddingImages from "../../component/weddingImages";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100">
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

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center">Wedding Gallery</h1>
        <WeddingImages />
      </div>
    </div>
  );
};

export default Portfolio;
