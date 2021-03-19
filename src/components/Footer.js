import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="center-content">
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved by
          CouponHub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
