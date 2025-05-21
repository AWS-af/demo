
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logoRed from "../assets/logo-red.png";

function Partners() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}

        slidesPerView={4}
        slidesPerGroup={1}
        loop={true}
        className="sm:w-[70%] 2xl:w-[50%] sm:h-[150px] h-[80px]"
      >
        <SwiperSlide>
          <img src={logoRed} className="w-full h-full bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logoRed} className="w-full h-full bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logoRed} className="w-full h-full bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logoRed} className="w-full h-full bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logoRed} className="w-full h-full bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logoRed} className="w-full h-full bg-cover bg-center" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Partners;
