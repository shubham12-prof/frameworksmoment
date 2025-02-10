"use client";
import Image from "next/image";

const ImageGallery = ({ folder, images }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 capitalize">
        {folder.split("/").join(" → ")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <Image
              src={`./images/${folder}/${img}`}
              alt={`Image ${index + 1}`}
              width={400}
              height={400}
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
