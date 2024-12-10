"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const images = [
  { src: "/images/logistics-01.jpg", alt: "Logistics 1" },
  { src: "/images/logistics-02.jpg", alt: "Logistics 2" },
];

const Slideshow = () => {
  const options = {
    type: "fade", // Set transition type to fade
    autoplay: true,
    interval: 5000, // Interval in milliseconds
    rewind: true,
    arrows: false,
  };

  return (
    <Splide options={options}>
      {images.map((image) => (
        <SplideSlide key={image.src}>
          <Image src={image.src} alt={image.alt} width={600} height={828} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slideshow;
