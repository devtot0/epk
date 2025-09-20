'use client';

import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Desktop: Background image covers full screen */}
      <div className="hidden lg:block absolute inset-0 w-full h-full">
        <Image
          src="/img_1.png" // Replace with your actual background image
          alt="Background"
          fill
          className="object-cover object-[center_27%]"
          priority
        />
      </div>
      
      {/* Mobile/Tablet: Background image fills full screen */}
      <div className="lg:hidden absolute inset-0 w-full h-full">
        <Image
          src="/img_1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
