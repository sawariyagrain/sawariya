// OurProducts.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Wheat from "../../../assets/Main.jpg"
import "./ourProducts.css";

// Example product data
const products = [
  { id: 1, name: "Wheat", image: Wheat , buttonText: "Know More",
    link: "/current"},
  { id: 2, name: "Barley", image: Wheat , buttonText: "Know More",
    link: "/current" },
  { id: 3, name: "Corn", image: Wheat , buttonText: "Know More",
    link: "/current"},
  { id: 4, name: "Soybean", image: Wheat , buttonText: "Know More",
    link: "/current"},
  { id: 5, name: "Rice", image: Wheat , buttonText: "Know More",
    link: "/current" },
];

const OurProducts = () => {
  return (
    <section className="our-products">
      <h2>Our Products</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 10000, 
          disableOnInteraction: false, 
        }}
        spaceBetween={20}
        slidesPerView={5}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        //   1024: {
        //     slidesPerView: 5,
        //   },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="products-button-container">
        <a href="/products" className="btn btn-primary">Know More</a>
      </div>
              </div>
              
          </SwiperSlide>
        ))}
      </Swiper>
        
    </section>
  );
};

export default OurProducts;
