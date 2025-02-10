"use client";
import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="relative flex flex-col items-center justify-center min-h-[50vh] w-full px-4 text-center">
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

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What we do.
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
            A unique landscape that captures the magic of eternal love. For an
            unforgettable ceremony.
          </p>
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap ">
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg text-center relative">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-4">
                <Image
                  src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/coffee.jpg"
                  alt="Pre-Wedding"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h2 className="tracking-widest text-xs sm:text-sm font-medium text-gray-400 mb-3">
                Pre-Wedding Consultation:
              </h2>
              <h1 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Meets with the couple to discuss their vision & key moments.
              </h1>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Plans the shoot locations, lighting, and timing for the best
                results.
              </p>
              <a
                href="#"
                className="text-indigo-500 text-sm sm:text-base hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg text-center relative">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-4">
                <Image
                  src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/coffee.jpg"
                  alt="Engagement Shoot"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h2 className="tracking-widest text-xs sm:text-sm font-medium text-gray-400 mb-3">
                Engagement & Pre-Wedding Shoots:
              </h2>
              <h1 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Captures candid and posed shots before the wedding.
              </h1>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Helps the couple get comfortable in front of the camera.
              </p>
              <a
                href="#"
                className="text-indigo-500 text-sm sm:text-base hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg text-center relative">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-4">
                <Image
                  src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003354/samples/coffee.jpg"
                  alt="Wedding Day"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h2 className="tracking-widest text-xs sm:text-sm font-medium text-gray-400 mb-3">
                Wedding Day Photography:
              </h2>
              <h1 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">
                Captures everything from bridal prep to final send-off.
              </h1>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Uses creative angles and lighting for the best storytelling.
              </p>
              <a
                href="#"
                className="text-indigo-500 text-sm sm:text-base hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
