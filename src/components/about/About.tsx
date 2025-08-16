import { bg4 } from "@/assets";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-green-600 text-white py-6 shadow-md">
        <h1 className="text-2xl font-bold text-center">
          Advance Smart Irrigator
        </h1>
      </header>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl w-full px-6 py-12 gap-10">
        {/* Left - Text */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            About
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Smart Irrigation Project leverages modern IoT devices, weather
            forecasts, and real-time soil data to determine the exact amount of
            water needed for crops. This approach ensures efficient water usage
            and reduces wastage, contributing to sustainable agriculture.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By integrating weather predictions and soil moisture sensors, the
            system calculates the optimal irrigation schedule, delivering water
            precisely when and where it is needed. This saves water, reduces
            operational costs, and boosts crop yield.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>IoT-based soil moisture sensors</li>
            <li>Weather data integration</li>
            <li>Automated water scheduling</li>
            <li>Water conservation and sustainability</li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bg4.src}
            alt="Smart Irrigation"
            className="rounded-2xl shadow-lg max-h-[400px] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
