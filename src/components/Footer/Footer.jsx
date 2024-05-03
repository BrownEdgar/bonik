import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__content-block">
          <img src="./image/logo.png" alt="" />
          <p>10/B, House# 32, Dhaka Uddan Mohammadpur, Dhaka, Bangladesh</p>
          <div className="Footer__content-logo">
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-linkedin"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-pinterest-alt"></i>
            <i class="bx bxl-instagram"></i>
          </div>
        </div>
        <ul>
          <li>Important links</li>
          <li>FAQs</li>
          <li>Blogs</li>
          <li>Privacy Policy</li>
          <li>Trims & Conditions</li>
        </ul>
        <ul>
          <li>Policy</li>
          <li>Learner</li>
          <li>Partners</li>
          <li>Developers</li>
          <li>Teaching Centre</li>
        </ul>
      </div>
      <div className="Footer__line">Copyright @2024 Bonik Delivery</div>
    </div>
  );
}
