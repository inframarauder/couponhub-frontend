import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import api from "../../utils/api";
import { Spinner } from "../../components/";

const MyCoupons = ({ auth }) => {
  const [state, setState] = useState({
    coupons: [],
    loading: false,
  });

  const loadMyCoupons = useCallback(async () => {
    setState((state) => ({ ...state, loading: true }));
    try {
      const { data } = await api.listCoupons({
        status: "sold",
        soldTo: auth.user._id,
      });
      setState((state) => ({ ...state, coupons: data, loading: false }));
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.error);
      }
      setState((state) => ({ ...state, loading: false }));
    }
  }, []);

  useEffect(() => loadMyCoupons(), [loadMyCoupons]);

  return state.loading ? (
    <Spinner />
  ) : (
    <Container className="h-100">
      <legend className="text-center my-4">
        Your Coupons <hr />
      </legend>
      <Row>
        {state.coupons.map((coupon) => (
          <Col key={coupon._id} sm="4">
            <Card className="my-4" key={coupon._id} bg="dark" text="white">
              <Card.Header>
                <Card.Text>
                  <h5>{coupon.title}</h5>
                </Card.Text>
                <small>{coupon.type.toUpperCase()}</small>
              </Card.Header>
              <Card.Body>
                <Card.Title>{coupon.code}</Card.Title>
                <Card.Text>{coupon.description}</Card.Text>
                <Card.Text>
                  Expires On - {new Date(coupon.expiryDate).toDateString()}
                </Card.Text>
                <Card.Text>
                  Posted By -{" "}
                  {coupon.postedBy ? coupon.postedBy.name : "Deleted User"}
                </Card.Text>
              </Card.Body>{" "}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, null)(MyCoupons);
