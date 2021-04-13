import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { listCoupons } from "../../redux/actions/coupons.actions";

const FilterForm = ({ listCoupons }) => {
  const [formData, setFormData] = useState({
    searchText: "",
    category: "All",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    listCoupons(formData);
  };

  return (
    <div className="center-content search-form">
      <legend className="searchBoxText">🧙 filters</legend>

      <Form className="my-4 search-form-inside" onSubmit={handleSubmit} inline>
        <Form.Group className="search-form-inside">
          <Form.Label className="my-1 mr-2">▶️ Search</Form.Label>
          <Form.Control
            className="my-1 mr-2"
            type="text"
            placeholder="Search by platform name"
            as="input"
            name="searchText"
            value={formData.searchText}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="search-form-inside">
          <Form.Label className="my-1 mr-2">💠 Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            onChange={handleChange}
            custom
            className="my-1 mr-2"
          >
            {[
              "All",
              "Food",
              "Fashion",
              "Education",
              "Tech",
              "Healthcare",
              "Lifestyle",
              "Finance",
              "Shopping",
              "Streaming",
              "Gaming",
              "Travel",
              "Utilities",
              "Other",
            ].map((cat, i) => (
              <option value={cat} key={i}>
                {cat}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <hr />
        <Button type="submit" className="form_button">
          🖖 Apply Filters
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  listCoupons: (filters = {}) => dispatch(listCoupons(filters)),
});

export default connect(null, mapDispatchToProps)(FilterForm);
