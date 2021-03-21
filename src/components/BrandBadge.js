import React from "react";
import { Badge } from "react-bootstrap";

const BrandBadge = ({ brand }) => {
  return (
    <Badge
      className="Productbadges"
      style={{ padding: "10px" }}
      href="/coupons"
    >
      <img src={brand.image} alt="thumbnail" height="150px" />
      <span style={{ fontSize: "1.5rem", padding: "10px" }}>{brand.title}</span>
    </Badge>
  );
};

export default BrandBadge;
