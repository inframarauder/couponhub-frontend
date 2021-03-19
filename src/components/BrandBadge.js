import React from "react";
import { Badge } from "react-bootstrap";

const BrandBadge = ({ brand }) => {
  return (
    <Badge variant="primary" style={{ padding: "10px" }}>
      <span style={{ fontSize: "1.5rem", padding: "10px" }}>{brand}</span>
    </Badge>
  );
};

export default BrandBadge;
