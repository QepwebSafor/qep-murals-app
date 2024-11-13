"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const MovieSwiper = ({ relatedMovies }: any) => {
  console.log("relatedMovies", relatedMovies);
  return (
    <>
      {Array.isArray(relatedMovies) && relatedMovies ? (
        <Swiper
          scrollbar={{
            hide: true
          }}
          watchSlidesProgress={true}
          slidesPerView={6} // Ajusta este valor según sea necesario
          spaceBetween={2}
          pagination={{
            dynamicBullets: true,
            el: ".swiper-pagination",
            clickable: true
          }}
          className="mySwiper swiper-slide"
        >
          {relatedMovies?.map(
            (movie, index) =>
              movie && (
                <li key={movie.id}>
                  <SwiperSlide key={movie.id} className="swiper-slide ">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width="160"
                      height="200"
                      key={movie.id}
                      className="w-auto height-auto  overflow-x-hidden border border-solid border-white "
                    />
                  </SwiperSlide>
                </li>
              )
          )}
        </Swiper>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};

export default MovieSwiper;
