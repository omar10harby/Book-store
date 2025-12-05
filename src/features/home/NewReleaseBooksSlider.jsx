import React from "react";
import useBooks from "./useBooks";
import "swiper/css";
import "swiper/css/navigation";
import { booksImages } from "../../data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function NewReleaseBooksSlider() {
  const { books, isPending, error } = useBooks();
  console.log(books);

  return (
    <section className="py-10 px-10 md:px-24 bg-section">
      <div className="heading mb-10 flex items-center gap-4">
        <span className="flex-1 h-0.5 bg-gray-200"></span>
        <h2 className="text-5xl text-secoundry-deepBlue font-bold">
          New Release Books
        </h2>
        <span className="flex-1 h-0.5 bg-gray-200"></span>
      </div>
      <Swiper
        spaceBetween={20}
        modules={[Pagination]}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {books.map((book,index)=>(
          <SwiperSlide>
              <div className="p-3 flex justify-center bg-white">
                <img src={booksImages[index % booksImages.length]} alt={book.name} className="w-52 h-60" />
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NewReleaseBooksSlider;
