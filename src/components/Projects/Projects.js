import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oraiscan from "../../Assets/Projects/oraiscan.png";
import oraidex from "../../Assets/Projects/oraidex.png";
import orderbook from "../../Assets/Projects/orderbook.png";
import owallet from "../../Assets/Projects/owallet.png";
import homebase from "../../Assets/Projects/homebase.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oraidex}
              isBlog={false}
              title="OraiDEX"
              description=""
              ghLink="https://github.com/oraichain/oraiswap-frontend"
              demoLink="https://oraidex.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={owallet}
              isBlog={false}
              title="Owallet"
              description=""
              ghLink="https://github.com/oraichain/owallet"
              demoLink="https://owallet.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orderbook}
              isBlog={false}
              title="Orderbook"
              description=""
              ghLink="https://github.com/oraichain/orderbook-frontend"
              demoLink="https://orderbook.oraidex.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oraiscan}
              isBlog={false}
              title="Oraiscan"
              description=""
              ghLink="https://github.com/oraichain/oraiscan-frontend"
              demoLink="https://scan.orai.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homebase}
              isBlog={false}
              title="Homebase"
              description=""
              ghLink="https://github.com/oraichain/"
              demoLink="https://hub.orai.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oraiscan}
              isBlog={false}
              title="OraiScan"
              description=""
              ghLink="https://github.com/oraichain/oraiscan-frontend"
              demoLink="https://scan.orai.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
