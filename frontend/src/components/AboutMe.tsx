import { Container, Row, Col, Button } from "react-bootstrap";

export default function AboutMe() {
  const headerContent = {
    title: "About Me",
    subtitle: "- One of the Billions on the Blue Marble",
  };

  const paragraphs = [
    "I'm currently pursuing a combined major in Computer Science and Statistics at UBC. My academic journey and personal projects reflect my passion for problem-solving, innovation, and continuous learning.",
    "I specialize in areas like machine learning, full-stack web development, computer graphics, and algorithm optimization. I have created several projects that demonstrate my skills and experiences in these areas.",
    "My major, as a combination of computer programming and math/statistical analysis, has equipped me with a solid foundation in all these areas.",
    "I'm always eager to explore new technologies and take on challenging projects that allow me to grow as a developer.",
  ];

  const resumeButton = {
    href: "/assets/coop_resume_sw.pdf",
    downloadName: "Perry-Z_resume.pdf",
    text: "Check my resume",
    icon: "bi bi-file-earmark-person",
  };

  return (
    <div className="container-fluid dark-portion">
      <Container className="about-me-section" id="about-me">
        <Row className="my-5 px-5">
          <Col sm={6} md={4} lg={6} className="d-flex flex-column">
            <h2>{headerContent.title}</h2>
            <h3>{headerContent.subtitle}</h3>

            <div
              className="h-100 d-flex justify-content-center align-items-center d-none d-sm-block"
              id="about-me-canvas-container"
            >
              <canvas id="about-me-canvas"></canvas>
            </div>
          </Col>

          <Col sm={6} md={8} lg={6} className="about-me-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <Button
              href={resumeButton.href}
              as="a"
              download={resumeButton.downloadName}
              variant="primary"
            >
              <i className={resumeButton.icon}></i> {resumeButton.text}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
