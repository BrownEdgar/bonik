import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-left">
          <img src="./images/logo.png" alt="logo" />
          <p>10/B, House# 32, Dhaka Uddan Mohammadpur, Dhaka, Bangladesh</p>
          <div className="logo">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-pinterest-alt"></i>
            <i className="bx bxl-instagram"></i>
          </div>
        </div>
        <div className="Footer__content-center">
          <h2>Important links</h2>
          <p>FAQs</p>
          <p>Blogs</p>
          <p>Privacy Policy</p>
          <p>Trims & Conditions</p>
        </div>
        <div className="Footer__content-right">
          <h2>Policy</h2>
          <p>Learner</p>
          <p>Partners</p>
          <p>Developers</p>
          <p>Teaching Centre</p>
        </div>
      </div>
      <div className="copyright">Copyright @2021 Bonik Delivery</div>
    </div>
  );
}
