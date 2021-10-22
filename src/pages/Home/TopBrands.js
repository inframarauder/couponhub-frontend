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
    title: "Pinterest",
    image: "https://media.giphy.com/media/XeMGfdq5LMc2naVQcN/giphy.gif",
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
    title: "Zomato",
    image: "https://media.giphy.com/media/dVnewBNxCk0qWRmuU8/giphy.gif",
  },
];

const TopBrands = () => {
  return (
    <Container>
      <h4 className="text-center display-4">
        <b
          style={{
            color: "rgb(255, 255, 255)",
            fontFamily: "'Dela Gothic One', cursive",
            transform: "translate3d(-10px, -10px, 0px)",
            textShadow:
              "1px 1px #0063db, 2px 2px #0063db, 3px 3px #0063db, 4px 4px #0063db, 5px 5px #0063db, 6px 6px #0063db, 7px 7px #0063db, 8px 8px #0063db, 9px 9px #0063db, 10px 10px #0063db",
          }}
        >
          top brands
        </b>
      </h4>
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
