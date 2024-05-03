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
            <a href="https://www.facebook.com/?locale=ru_RU" target="_blank">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/home" target="_blank">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://twitter.com/?lang=ru" target="_blank">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
              <i class="bx bxl-pinterest-alt"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="bx bxl-instagram"></i>
            </a>
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
      {/* <div className="copyright">Copyright @2021 Bonik Delivery</div> */}
    </div>
  );
}
