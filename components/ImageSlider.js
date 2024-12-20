"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  { src: "/images/logistics-slide-01.jpg", alt: "Image-1" },
  { src: "/images/logistics-slide-02.jpg", alt: "Image-2" },
  { src: "/images/logistics-slide-03.jpg", alt: "Image-3" },
  { src: "/images/logistics-slide-04.jpg", alt: "Image-4" },
  { src: "/images/logistics-slide-05.jpg", alt: "Image-5" },
  { src: "/images/logistics-slide-06.jpg", alt: "Image-6" },
  { src: "/images/logistics-slide-01.jpg", alt: "Image-7" },
  { src: "/images/logistics-slide-02.jpg", alt: "Image-8" },
  { src: "/images/logistics-slide-03.jpg", alt: "Image-9" },
  { src: "/images/logistics-slide-04.jpg", alt: "Image-10" },
  { src: "/images/logistics-slide-05.jpg", alt: "Image-11" },
  { src: "/images/logistics-slide-06.jpg", alt: "Image-12" },
];

const ImageSlider = () => (
  <Swiper
    spaceBetween={10}
    slidesPerView={3}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Autoplay]}
  >
    {images.map((image) => (
      <SwiperSlide key={image.alt}>
        <Image src={image.src} alt={image.alt} width={324} height={1000} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ImageSlider;
