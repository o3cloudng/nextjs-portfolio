import React from "react";
import BtnInverse from "./formComponents/BtnInverse";
import Image from "next/image";

const Analytics = () => {
  return (
    <div className="max-w-full mx-auto w-full bg-white py-16 text-black">
      <div className="w-[80%] mx-auto grid md:grid-cols-6">
        <div className="flex flex-col justify-center w-full md:w-full mx-0 col-span-3">
          <Image
            className="col-span-3 mx-auto w-full md:w-[90%] justify-center my-4 rounded-lg"
            src="/assets/analytics.jpg"
            alt="Me"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-full mx-0 col-span-3">
          <p className="text-[#00df9a] font-bold my-2 border-b border-[#00df9a] pb-2">
            My stats
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold my-2 mx-auto md:mx-1">
            Analytics
          </h1>
          <p className="my-2 mx-auto md:mx-1">
            The quickest way to start using Tailwind CSS in your Next.js project
            is to use the Next.js + Tailwind CSS Example. This will
            automatically configure your Tailwind setup based on the official
            Next.js example. If you&lsquo;d like to configure Tailwind manually,
            continue with the rest of this guide.
          </p>
          <BtnInverse value="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
