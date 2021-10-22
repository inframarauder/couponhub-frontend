import React from "react";

const Footer = () => {
  return (
    <footer className="bigfoot">
      <br />
      <div className="center-content">
        <span className="foot_float_left">
          Made with <i class="fas fa-heart"></i> by{" "}
          <a href="https://twitter.com/shuvam360" target="blank">
            <b>@shuvam360</b>
          </a>{" "}
          &#38;{" "}
          <a href="https://twitter.com/geram_er_chhele" target="blank">
            <b>@geram_er_chhele</b>
          </a>{" "}
        </span>
        <br />
        <span className="foot_float_left">
          Not a &nbsp;
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png"
            width="20px"
            alt="Y Combinator Logo"
          />{" "}
          <span style={{ color: "rgb(255, 167, 109)" }}>Combinator</span>{" "}
          company
        </span>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
