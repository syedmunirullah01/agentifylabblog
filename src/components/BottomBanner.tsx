import React from "react";
import Image from "next/image";

const BottomBanner: React.FC = () => {
  return (
    <div className="my-8">
      <div className="relative w-full h-32">
        <Image
          src="/images/bannerImgThree.jpg" 
          alt="Small Banner"
          width={1200} 
          height={150}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-xl font-bold pl-4 sm:pl-8">
          Special Offer: Check out our latest updates!
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
