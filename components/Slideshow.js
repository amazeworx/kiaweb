"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const images = [
  { src: "/images/logistics-slide-01.jpg", alt: "Logistics 1" },
  { src: "/images/logistics-slide-02.jpg", alt: "Logistics 2" },
  { src: "/images/logistics-slide-03.jpg", alt: "Logistics 3" },
  { src: "/images/logistics-slide-04.jpg", alt: "Logistics 4" },
  { src: "/images/logistics-slide-05.jpg", alt: "Logistics 5" },
  { src: "/images/logistics-slide-06.jpg", alt: "Logistics 6" },
];

const Slideshow = () => {
  // const options = {
  //   type: "fade", // Set transition type to fade
  //   autoplay: true,
  //   interval: 5000, // Interval in milliseconds
  //   rewind: true,
  //   arrows: false,
  // };

  const options = {
    type: "loop",
    perPage: 3,
    autoplay: true,
    //interval: 5000,
    //rewind: true,
    arrows: false,
    gap: 6,
    perMove: 1,
  };

  return (
    <Splide options={options}>
      {images.map((image) => (
        <SplideSlide key={image.src}>
          <Image src={image.src} alt={image.alt} width={324} height={1000} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slideshow;
