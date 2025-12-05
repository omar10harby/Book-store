import React from "react";
import useBooks from "./useBooks";
import "swiper/css";
import "swiper/css/navigation";
import { booksImages } from "../../data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";

function NewReleaseBooksSlider() {
  const { books, isPending, error } = useBooks();
  console.log(books);

  return (
    <section className="py-10 px-10 md:px-24 bg-section">
      <div className="heading mb-10 flex items-center gap-4">
        <span className="flex-1 h-0.5 bg-gray-200"></span>
        <h2 className="text-2xl md:text-5xl text-secoundry-deepBlue font-bold">
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
          bulletClass: "books-bullet",
          bulletActiveClass: "books-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className="books-slider pb-32"
      >
        {books.map((book, index) => (
          <SwiperSlide>
            <div className="flex flex-col gap-3">
              <div className="p-5 relative flex justify-center bg-white group">
                <img
                  src={booksImages[index % booksImages.length]}
                  alt={book.name}
                  className="w-full"
                />
                <div
                  className="absolute inset-0  opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="flex flex-col gap-4 w-4/5">
                    <Link
                      className="bg-secoundry-deepBlue text-white text-center px-6 py-3 rounded-lg 
                                    flex items-center justify-center gap-2 hover:bg-opacity-90 transform 
                                    translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    
                    >
                      View details
                    </Link>

                    <button
                      className="bg-main-orange text-white px-6 py-3 rounded-lg flex items-center 
                                    justify-center gap-2 hover:bg-opacity-90 transform translate-y-4 
                                    group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <SlBasketLoaded size={20} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <h3 className="text-lg text-center text-secoundry-deepBlue font-semibold ">
                  {book.name}
                </h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="text-main-orange">{book.price}$</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-5 md:text-end">
        <Link
          to={"/app/books"}
          className="text-lg  text-main-orange font-semibold"
        >
          <span className="inline-flex items-center gap-2">
            view All Books <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default NewReleaseBooksSlider;
