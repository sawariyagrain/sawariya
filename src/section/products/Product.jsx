import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./products.css";
import Products from "../../assets/Products.png";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Product = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }),
        [];

    return (
        <div>
            <ScrollToHashElement />
            <Navbar></Navbar>
            <div  className="about_head" data-aos="fade-up">
                <div>
                    <div className="about__image">
                        <img src={Products} alt="Product_image" />
                    </div>
                    <div>
                        <h1>Our Products</h1>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Product;
