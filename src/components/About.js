import React from "react";
import { Container } from "react-bootstrap";
import Tomer from "../assets/images/Tomer.jpg";
import Shachar from "../assets/images/Shachar.jpg";
import Yuval from "../assets/images/Yuval.jpg";
import Anet from "../assets/images/Anet.jpg";
import Gadi from "../assets/images/Gadi.jpg";
function About() {
  const myStyle = {
    backgroundColor: "#1D5C63",
    paddingBottom: "30px",
    padding: "10px",
    fontFamily: "Roboto",
  };
  return (
    <div id="about" className="p-6" style={myStyle}>
      <Container>
        <h2 className="text-center text-white">Our Team</h2>
        <p className="lead text-center text-white mb-5">
          As part of the course project, we built a system for receiving information about different destinations in the world
          <br />
          You can get information about trips, recommendations, events and more <br />
          {" "}
        </p>
        <div className="row g-3" style={{ paddingBottom: "30px" }}>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Tomer}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Tomer Kamar </h3>
                <p className="card-text ">Our DevOps & Scrum Master Team</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Shachar}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Shachar Males </h3>
                <p className="card-text">Our System Architect & DBA Team</p>

                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Yuval}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Yuval Terry</h3>
                <p className="card-text">Our Team Lead & Technical writer</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="row g-2" >

          <div className="col-md-6 col-lg-2">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Anet}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Anet Kagan </h3>
                <p className="card-text">Our UX/UI Team</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Gadi}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px" width="150px"
                />
                <h3 className="card-title mb-3">Gadi Engelsman</h3>
                <p className="card-text">
                  Our QA engineer Team
                </p>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
export { About };
