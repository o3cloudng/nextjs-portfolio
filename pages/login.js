import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Link from "next/link";

const login = () => {
  return (
    <>
      <Navbar />
      <Card className="panel mt-5 col-md-6 offset-md-3">
        <Card.Header>
          <h3>Login</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <p>Please, use your provided credentials</p>
          </Card.Title>
          <Card.Text>
            <Row className="my-3">
              <Col>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  //   onChange={handleChange("email")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  //   onChange={handleChange("password")}
                />
              </Col>
            </Row>
          </Card.Text>
          <Col className="d-block">
            <Link to="/signup" className="btn btn-secondary float-start">
              {" "}
              Register
            </Link>
            <Button variant="primary" className="float-end">
              {" "}
              Login
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export default login;
