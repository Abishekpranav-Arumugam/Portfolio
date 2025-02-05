import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import c from "../../images/c.jpg";
import iq from "../../images/IQ_Test.jpg";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={c} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={iq} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={iq}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}