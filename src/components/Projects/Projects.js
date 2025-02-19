import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import annur from "../../Assets/Projects/annur.png";
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
              imgPath={annur}
              isBlog={false}
              title="Website Masjid Raya An-Nur Provinsi Riau"
              description="This website is expected to become a useful digital information center for Muslims, especially in Riau, as well as supporting preaching and mosque services in a more modern and structured manner."
              ghLink="https://github.com/aripp666"
              demoLink="https://mr-annur-riau.or.id/dashboard"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
