import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="OraiDEX"
              description="OraiDEX is a decentralized exchange (DEX) platform that operates within the Oraichain ecosystem. It provides users with the ability to trade, stake, and provide liquidity for various cryptocurrency assets."
              ghLink="https://github.com/oraichain/oraiswap-frontend"
              demoLink="https://oraidex.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OraiScan"
              description="OraiScan is a comprehensive blockchain explorer for the Oraichain network. It enables users to track and analyze transactions, view block details, and monitor wallet activities."
              ghLink="https://github.com/oraichain/oraiscan-frontend"
              demoLink="https://scan.orai.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Owallet"
              description="It is a digital wallet developed for the Oraichain ecosystem, allowing users to securely store, manage, and interact with ORAI tokens and other supported cryptocurrencies. OWallet provides features such as transaction management, staking, and integration with Oraichain’s decentralized applications (dApps), making it a versatile tool for users within the Oraichain network."
              ghLink="https://github.com/oraichain/owallet"
              demoLink="https://owallet.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="OraiDEX"
              description="OraiDEX is a decentralized exchange (DEX) platform that operates within the Oraichain ecosystem. It provides users with the ability to trade, stake, and provide liquidity for various cryptocurrency assets."
              ghLink="https://github.com/oraichain/oraiswap-frontend"
              demoLink="https://oraidex.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OraiScan"
              description="OraiScan is a comprehensive blockchain explorer for the Oraichain network. It enables users to track and analyze transactions, view block details, and monitor wallet activities."
              ghLink="https://github.com/oraichain/oraiscan-frontend"
              demoLink="https://scan.orai.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Owallet"
              description="It is a digital wallet developed for the Oraichain ecosystem, allowing users to securely store, manage, and interact with ORAI tokens and other supported cryptocurrencies. OWallet provides features such as transaction management, staking, and integration with Oraichain’s decentralized applications (dApps), making it a versatile tool for users within the Oraichain network."
              ghLink="https://github.com/oraichain/owallet"
              demoLink="https://owallet.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
