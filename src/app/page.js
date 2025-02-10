"use client";
import React from "react";
import Image from "next/image";
import Contact from "./contact/page";

const images = [
  {
    id: "1",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003352/samples/balloons.jpg",
    alt: "Gallery 1",
    colSpan: "col-span-2 md:col-span-4 lg:col-span-5",
    rowSpan: "row-span-2",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[28rem]",
    className: "h-[10rem]",
  },
  {
    id: "2",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003347/samples/landscapes/nature-mountains.jpg",
    alt: "Gallery 2",
    colSpan: "col-span-2 lg:col-span-3",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[28rem]",
  },
  {
    id: "3",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003347/samples/ecommerce/accessories-bag.jpg",
    alt: "Gallery 3",
    colSpan: "col-span-2 md:col-span-3 lg:col-span-4",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[28rem]",
  },
  {
    id: "4",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003346/samples/bike.jpg",
    alt: "Gallery 4",
    colSpan: "col-span-1 lg:col-span-2",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem]",
  },
  {
    id: "5",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003346/samples/landscapes/girl-urban-view.jpg",
    alt: "Gallery 5",
    colSpan: "col-span-1 lg:col-span-2",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem]",
  },
  {
    id: "6",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003345/samples/food/fish-vegetables.jpg",
    alt: "Gallery 6",
    colSpan: "col-span-2 lg:col-span-3",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem]",
  },
  {
    id: "7",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003344/sample.jpg",
    alt: "Gallery 7",
    colSpan: "col-span-2 md:col-span-4 lg:col-span-5",
    aspect: "aspect-square h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem]",
  },
  {
    id: "8",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003344/sample.jpg",
    alt: "Gallery 8",
    colSpan: "col-span-2 md:col-span-6 lg:col-span-5",
    aspect: "aspect-video h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem]",
  },
  {
    id: "9",
    src: "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003346/samples/landscapes/girl-urban-view.jpg",
    alt: "Gallery 5",
    colSpan: "col-span-2 md:col-span-6 lg:col-span-7",
    aspect: "aspect-video h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem]",
  },
];
const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sticky flex items-center justify-center min-h-[50vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/coffee.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Weddings, Inspired by Nature
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            A unique landscape that captures the magic of eternal love.
          </p>
        </div>
      </div>

      <div className="max-w-7xl py-10 flex flex-col md:flex-row items-center w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-lg font-semibold mt-6 sm:mt-8">Our Events</h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
            Designed by nature, <br className="hidden sm:block" /> made for you.
          </p>
          <div className="mt-4">
            <a
              href="#book"
              className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-200 inline-block"
            >
              Book a Meeting
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative aspect-[3/4] max-w-lg mx-auto mt-6 md:mt-0">
          <Image
            src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003344/sample.jpg"
            alt="Event Image"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-3 md:gap-4">
          {images.map(({ src, alt, colSpan, aspect }, index) => (
            <div key={index} className={`${colSpan}`}>
              <div className={`relative w-full ${aspect}`}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#portfolio"
            className="bg-blue-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 inline-block"
          >
            Show Our Portfolio
          </a>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Page;
