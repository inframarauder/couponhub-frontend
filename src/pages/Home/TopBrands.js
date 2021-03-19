import React from "react";
import BrandBadge from "../../components/BrandBadge";
import { Container, Row, Col } from "react-bootstrap";

const brands = [
  "Audible",
  "YouTube Premium",
  "Ajio",
  "Lenskart",
  "Zerodha",
  "CoolWinks",
  "WOW Skin Care",
  "Zomato",
  "Swiggy",
];

const TopBrands = () => {
  return (
    <Container>
      <h4 className="text-center display-4">
        Our Top Brands <hr />
      </h4>
      <div className="text-center">
        <Row>
          {brands.map((brand, index) => (
            <Col sm="4" className="my-4" key={index}>
              <BrandBadge brand={brand} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default TopBrands;
