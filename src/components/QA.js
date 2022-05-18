import React from "react";
import { Container, Accordion } from "react-bootstrap";

function QA() {
  const QA = {
    backgroundColor: "#417D7A",
    paddingBottom: "80px",
    padding: "10px",
    fontFamily: "Roboto",
  };
  return (
    <div id="question" className="p-7" style={QA}>
      <Container>
        <h2 className="text-center mb-4">
          <br />
          Questions and Answers
        </h2>
        {/* Item 1 */}
        <Accordion defaultActiveKey="" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How Do I sign up?</Accordion.Header>
            <Accordion.Body>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Q1?</Accordion.Header>
            <Accordion.Body>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Q2?</Accordion.Header>
            <Accordion.Body>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header> Q3</Accordion.Header>
            <Accordion.Body>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  );
}
export { QA };

