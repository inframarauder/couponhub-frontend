import React, { useState } from "react";
import { Container, Tabs, Tab, Form } from "react-bootstrap";
import CouponList from "./CouponList";

const Coupons = () => {
  const [filters, setFilters] = useState({
    searchText: "",
    category: "All",
    type: "All",
  });

  const handleChange = (e) => {
    setFilters((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <>
    <Container className="bighead_container"
    style={{ marginTop : "0px!important",
             maxWidth : "100vw!important",
             padding : "unset!important",
      }}>
      <div className="center-content search-form"
      style={{ marginTop : "unset!important",
      maxWidth : "100vw!important",
      paddingTop : "2rem!important",
      background : "url('https://media.giphy.com/media/hVbErjjtKCIHb24j4y/giphy.gif')",}}>
        {/* <legend className="searchBoxText text-center">🧙 filters</legend> */}

        <Form className="my-4 search-form-inside" inline>
          <Form.Group className="search-form-inside inputs-form-segregate">
            <Form.Label className="my-1 mr-3">▶️ Search</Form.Label>
            <Form.Control
              className="my-1 mr-2"
              type="text"
              placeholder="Search by platform name"
              as="input"
              name="searchText"
              value={filters.searchText}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="search-form-inside inputs-form-segregate">
            <Form.Label className="my-1 mr-3">💠 Category</Form.Label>
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
        </Form>
      </div>
      </Container>
      
      <Container className="my-4 h-100">
      <legend className="searchBoxText text-center">
        🤗 available coupons
      </legend>
      <Tabs
        id="controlled-tab-example"
        activeKey={filters.type}
        onSelect={(k) => setFilters((state) => ({ ...state, type: k }))}
        variant="pills"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          margin: "20px",
        }}
      >
        <Tab eventKey="All" title="All">
          <CouponList filters={filters} />
        </Tab>
        <Tab eventKey="percentage" title="Percentage">
          <CouponList filters={filters} />
        </Tab>
        <Tab eventKey="flat" title="Flat">
          <CouponList filters={filters} />
        </Tab>
        <Tab eventKey="free" title="Free">
          <CouponList filters={filters} />
        </Tab>
      </Tabs>
    </Container>
    </>
  );
};

export default Coupons;
