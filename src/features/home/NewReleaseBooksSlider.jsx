import React from "react";
import useBooks from "./useBooks";
import "swiper/css";
import "swiper/css/pagination";
import { booksImages } from "../../data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";

function NewReleaseBooksSlider() {
  const { books, isPending, error } = useBooks({limit:20});
  console.log(books);
  
  // Loading State
  if (isPending) {
    return (
      <section className="py-10 px-10 md:px-24 bg-section">
        <div className="heading mb-10 flex items-center gap-4">
          <span className="flex-1 h-0.5 bg-gray-200"></span>
          <h2 className="text-2xl md:text-5xl text-secoundry-deepBlue font-bold">
            New Release Books
          </h2>
          <span className="flex-1 h-0.5 bg-gray-200"></span>
        </div>
        <div className="text-center py-20">
          <div className="animate-spin w-12 h-12 border-4 border-main-orange border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading amazing books...</p>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="py-10 px-10 md:px-24 bg-section">
        <div className="heading mb-10 flex items-center gap-4">
          <span className="flex-1 h-0.5 bg-gray-200"></span>
          <h2 className="text-2xl md:text-5xl text-secoundry-deepBlue font-bold">
            New Release Books
          </h2>
          <span className="flex-1 h-0.5 bg-gray-200"></span>
        </div>
        <div className="text-center py-20">
          <div className="text-red-500 text-lg">
            <p className="font-semibold mb-2">Oops! Something went wrong</p>
            <p className="text-sm text-gray-600">{error.message}</p>
          </div>
        </div>
      </section>
    );
  }

  // Empty State
  if (!books?.length) {
    return (
      <section className="py-10 px-10 md:px-24 bg-section">
        <div className="heading mb-10 flex items-center gap-4">
          <span className="flex-1 h-0.5 bg-gray-200"></span>
          <h2 className="text-2xl md:text-5xl text-secoundry-deepBlue font-bold">
            New Release Books
          </h2>
          <span className="flex-1 h-0.5 bg-gray-200"></span>
        </div>
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No books available at the moment</p>
          <p className="text-sm text-gray-400 mt-2">Check back soon for new releases!</p>
        </div>
      </section>
    );
  }

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
        loop={books.length > 5}
        pagination={{
          clickable: true,
          bulletClass: "books-bullet",
          bulletActiveClass: "books-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="books-slider pb-32"
      >
        {books.map((book, index) => (
          <SwiperSlide key={book._id || index}>
            <div className="flex flex-col gap-3">
              {/* Card with Hover Effect */}
              <div className="p-5 relative flex justify-center bg-white rounded-lg shadow-sm group overflow-hidden">
                <img
                  src={book.image || booksImages[index % booksImages.length]}
                  alt={book.name}
                  className="w-full h-64 object-cover "
                  onError={(e) => {
                    e.target.src = booksImages[index % booksImages.length];
                  }}
                />

                {/* Overlay with Buttons */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center p-5">
                  <div className="flex flex-col gap-3 w-full">
                    <Link
                      to={`/app/books/${book._id}`}
                      className="bg-secoundry-deepBlue text-white text-center px-4 py-2.5 rounded-lg 
                                hover:bg-opacity-90 transform translate-y-4 group-hover:translate-y-0 
                                transition-all duration-300"
                    >
                      View Details
                    </Link>

                    <button
                      className="bg-main-orange text-white px-4 py-2.5 rounded-lg flex items-center 
                                justify-center gap-2 hover:bg-opacity-90 transform translate-y-4 
                                group-hover:translate-y-0 transition-all duration-300 delay-75"
                    >
                      <SlBasketLoaded size={18} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="flex flex-col items-center gap-1.5">
                <h3 className="text-lg text-center text-secoundry-deepBlue font-semibold line-clamp-1">
                  {book.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {book.author || "Unknown Author"}
                </p>
                <p className="text-main-orange font-bold">
                  ${book.price?.toFixed(2) || "0.00"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View All Link */}
      <div className="text-center mt-5 md:text-end">
        <Link
          to={"/app/books"}
          className="text-lg text-main-orange font-semibold hover:text-orange-600 transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            View All Books <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default NewReleaseBooksSlider;