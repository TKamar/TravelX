import React, { Component, useState, useEffect, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import Img from "../assets/images/logo-background.jpg";
import { fetchUser, fetchInstanceByName } from "../data/data";
import { LoginContext } from "../App";
import {
  useNavigate,
  Navigate,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";

const Login = (props) => {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("loginState") === "true") navigate("/");
  }, []);

  useEffect(() => {
    console.log(user, extra);

    if (user && extra && extra.status !== 404) {
      console.log(user);
      console.log(extra);
      setLoggedInState({ user: user, extra: extra });
      localStorage.setItem("loginState", true);

      navigate("/myProfile");
    }
  }, [user, extra]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // mail: manager@google.com

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      await fetchUser(email)
        .then((jsonData) => {
          console.log(jsonData);
          setUser(jsonData);
          return jsonData;
        })
        .then((userJsonData) => {
          console.log(userJsonData);
          fetchInstanceByName(email).then((jsonData) => {
            // console.log(jsonData);
            setExtra(jsonData);
          });
        });
    }

    setValidated(true);
  };
  const myStyle = {
    backgroundColor: "#417D7A",
    position: "relative",
    display: "flex",
    paddingTop: "150px",
    margin: "0",
    textAlign: "center",
    height: "100vh",
    paddingBottom: "10px",
    color: "#000"
  };
  const imgStyle = {
    height: "100%",
  };
  return (
    <div>
      <div style={myStyle}>
        <Container>
          <h1>Travel X</h1>
          <hr></hr>
          <div className="color-overlay d-flex justify-content-center">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="rounded p-4 p-md-3 "
            >
              <Form.Group className="mb-2" md="4" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-dark">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  required
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="rounded-5"
                variant="outline-dark"
                style={{ borderRadius: "500px" }}
              >
                LOGIN
              </Button>
            </Form>
          </div>
          <br />
          <br />
          <hr style={{ width: "70%", display: "inline-block" }}></hr>
          <h5>
            <strong>Don't have an account?</strong>
          </h5>
          <NavLink to="/signup">
            <Button

              onClick={(e) => <NavLink to="/signup" />}
              className="rounded-5"
              variant="outline-dark"
              style={{ borderRadius: "500px" }}
            >
              SIGN UP FOR TravelX
            </Button>
          </NavLink>
        </Container>
        <Container className="d-none d-xl-block">
          <img
            className="d-block w-100 opacity-75"
            src={Img}
            style={imgStyle}
            alt="team promo"
          />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export { Login };
