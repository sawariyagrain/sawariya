import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay  } from 'swiper/modules';
import './testimonials.css';
import data from './data';


const Testimonials = () => {


  return (
    <div className="testimonials-container" data-aos="fade-up">
      <h2 className="testimonials-title">The Sawariya Way</h2>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination,Autoplay]}
         autoplay={{
          delay: 10000, 
          disableOnInteraction: false, 
        }}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
        //   768: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        }}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card" data-aos="fade-up">
                <div >
            <img src={data.avatar} alt="" />
        </div>
              <p className="testimonial-message">“{data.quote}”</p>
              <h4 className="testimonial-name">{data.name}</h4>
              <p className="testimonial-role">{data.profession}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
