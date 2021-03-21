import React from "react";
import { Jumbotron } from "react-bootstrap";

const NotFound = () => {
  return (
    <Jumbotron
      fluid
      className="center-content h-100 page-404"
      style={{ background: "black" }}
    >
      <img
        src="https://media.giphy.com/media/QW5Q1htLKUtBQxJ1C6/giphy.gif"
        alt="not-found-gif"
      />
      <p
        style={{
          fontSize: "25px",
          fontWeight: "700",
          textAlign: "center",
          position: "relative",
          top: "-100px",
        }}
      >
        💩 Oops! <br />
        The Page you're looking for does not exist 😥
      </p>
    </Jumbotron>
  );
};

export default NotFound;
