import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";



const slides = [
  {
    image: "/images/i2.webp",
    title: "Welcome To Meraki",
    subtitle: "Culinary Arts Society",
    description: "Where passion meets flavor – crafting unforgettable dining experiences",
  },
  {
    image: "/images/i1.webp",
    title: "Workshops",
    subtitle: "Learn the Art of Cooking",
    description: "From knife skills to plating — discover your inner chef at our interactive events.",
  },
  {
    image: "/images/i3.webp",
    title: "Events & Competitions",
    subtitle: "Showcase Your Culinary Talent",
    description: "Engage in thrilling cook-offs, food hunts, and gourmet challenges across campus.",
  },
  {
    image: "/images/i4.webp",
    title: "Flavors of Community",
    subtitle: "Food, Fun & Fellowship",
    description: "Experience the joy of food with friends — cooking memories that last.",
  },
];

const HomeSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-screen"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />
              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 py-12 h-full justify-center">
                {/* Text */}
                <div className="text-center lg:text-left">
                  <div className="mb-8 space-y-2">
                    <p className="text-xl sm:text-2xl text-orange-300 font-light tracking-wider">
                     
                    </p>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.9]">
                      <span className="italic text-orange-500">{slide.title}</span>
                    </h1>
                    <p className="text-2xl sm:text-3xl text-orange-100/80 mt-4">
                      {slide.subtitle}
                    </p>
                  </div>
                  <p className="text-lg sm:text-xl text-orange-100/90 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="#about"
                      className="px-10 py-4 bg-transparent border-2 border-orange-400 text-orange-300 rounded-full hover:bg-orange-900/30 transition-all duration-300 text-lg font-medium"
                    >
                      Discover Our Story →
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSection;
