import React from "react";
import { BrandBadge } from "../../components/";
import { Container, Row, Col } from "react-bootstrap";

const brands = [
  {
    title: "KFC",
    image: "https://media.giphy.com/media/l5JendjMEzFnvLAUqx/giphy.gif",
  },
  {
    title: "Snapchat",
    image: "https://media.giphy.com/media/ln79UJB4lQQ29WVpW3/giphy.gif",
  },
  {
    title: "McDonald's",
    image: "https://media.giphy.com/media/UnPNM1qGlirBR3PBcX/giphy.gif",
  },
  {
    title: "Google Chrome",
    image: "https://media.giphy.com/media/cb62CI2NECmKcJwjnQ/giphy.gif",
  },
  {
    title: "Tinder",
    image: "https://media.giphy.com/media/KBPsjfgqv4t5t942qP/giphy.gif",
  },
  {
    title: "Pinterest",
    image: "https://media.giphy.com/media/XeMGfdq5LMc2naVQcN/giphy.gif",
  },
  {
    title: "Natural's Ice Cream",
    image: "https://media.giphy.com/media/Vd90Szv80cIZEdsWuj/giphy.gif",
  },

  {
    title: "Audible",
    image: "https://media.giphy.com/media/o9LLSY9OXaU7jN68u5/giphy.gif",
  },
  {
    title: "Burger King",
    image: "https://media.giphy.com/media/JwSnUlETnolpHcXVnC/giphy.gif",
  },
  {
    title: "YouTube Premium",
    image: "https://media.giphy.com/media/H5BN5sx4DWHytWAhig/giphy.gif",
  },
  {
    title: "GitHub",
    image: "https://media.giphy.com/media/U2LqsKYUCXCZp5u2jP/giphy.gif",
  },
  {
    title: "Ajio",
    image: "https://media.giphy.com/media/gioYKLqOWLrcyRyMvw/giphy.gif",
  },
  {
    title: "Lenskart",
    image: "https://media.giphy.com/media/ZdrJLgl5UzTugpOiUm/giphy.gif",
  },
  {
    title: "Zerodha",
    image: "https://media.giphy.com/media/JU4XLgeZmMjibeOkUx/giphy.gif",
  },
  {
    title: "CoolWinks",
    image: "https://media.giphy.com/media/KxLGI20t75msU/giphy.gif",
  },
  {
    title: "WOW Skin Care",
    image: "https://media.giphy.com/media/Td9W6ZjYO6iVNM5sWB/giphy.gif",
  },

  {
    title: "Zomato",
    image: "https://media.giphy.com/media/dVnewBNxCk0qWRmuU8/giphy.gif",
  },
  {
    title: "Swiggy",
    image: "https://media.giphy.com/media/Y2mS9KIOV62mMXqQx6/giphy.gif",
  },
];

const TopBrands = () => {
  return (
    <Container>
      <h4 className="text-center display-4">Our Top Brands</h4>
      <h6 className="text-center">
        <small>
          Not really, we just hope that they become our top brands 😔
        </small>
      </h6>{" "}
      <hr />
      <div className="text-center">
        <Row>
          {brands.map((brand, index) => (
            <Col sm="4" className="my-4" key={index}>
              <BrandBadge brand={brand} />
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <br />
    </Container>
  );
};

export default TopBrands;
