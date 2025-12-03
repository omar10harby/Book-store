import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function HeroSlider() {
  const slides = [
    {
      title: "Great Travel at Desert",
      description:
        "A breathtaking journey through the heart of the desert—where adventure meets silence, and every dune holds a new story.",
      image:
        "/src/assets/books/book-1.webp",
    },
    {
      title: "Simple Way of Peace Life",
      description:
        "A gentle guide to slowing down and finding calm. Simple steps that lead to a peaceful, balanced, and uncluttered life.",
      image: "/src/assets/books/book-3.webp",
    },
    {
      title: "Brides Gonna Be Happy",
      description:
        "An inspiring companion for every bride. Heartwarming tips and joyful energy for a beautiful new beginning.",
      image:
        "/src/assets/books/book-10.webp",
    },
  ];

  return (
    <section className="w-full h-[70vh] bg-linear-to-r from-[#FFE5E5] to-white relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="hero-slider h-full"
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full grid md:grid-cols-2 items-center px-10 md:px-24 py-10 gap-10">
              {/* Text Section */}
              <div className="flex flex-col text-secoundry-deepBlue gap-5 relative pb-16">
                <h1 className="text-4xl font-bold">{slide.title}</h1>
                <p className="text-lg leading-relaxed">{slide.description}</p>
                <button className="w-fit bg-secoundry-deepBlue text-white px-6 py-3 rounded-lg hover:bg-[#173f5fd5] transition-all">
                  View Books
                </button>
              </div>

              {/* Image Section */}
              <div className="hidden md:flex w-full h-full justify-center items-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-52 h-74 object-cover rounded-md shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/40 hover:bg-main-orange text-main-orange hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group">
        <IoChevronBack className="w-6 h-6" />
      </button>

      <button className="custom-next hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/40 hover:bg-main-orange text-main-orange hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group">
        <IoChevronForward className="w-6 h-6" />
      </button>
    </section>
  );
}
