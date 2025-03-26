import { Container, Row, Col, Button } from "react-bootstrap";

export default function FrontPage() {
  return (
    <div className="container-fluid bg-dark text-white mb-0">
      <section id="front-page" className="mb-0">
        <Container
          fluid
          className="d-flex align-items-center mb-5 mb-sm-0"
          id="front-page-content"
        >
          <Row>
            <Col lg={{ span: 7, offset: 1 }}>
              <h1 className="my-lg-4" id="hello-world">
                Hello World!
              </h1>
              <p className="text-xl">
                Hi, I'm <em>Perry Zhu</em>, an international undergraduate
                majoring in Computer Science and Statistics at the University of
                British (UBC). <br />
                <br />
                I'm passionate about software development, machine learning,
                computer graphics, and photography. Explore my projects, photos,
                and experiences here!
              </p>
              <div className="hidden sm:block">
                <Button
                  variant="primary"
                  href="https://github.com/Perry2004"
                  target="_blank"
                  className="mr-2"
                >
                  <i className="bi bi-github"></i> GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/perry-z/"
                  target="_blank"
                  className="mr-2"
                >
                  <i className="bi bi-linkedin"></i> LinkedIn
                </Button>
                <Button
                  variant="primary"
                  href="https://www.instagram.com/perryzhu2004/"
                  target="_blank"
                  className="mr-2"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </Button>
                <Button
                  variant="primary"
                  href="https://www.pexels.com/@perry-z-1662054943/"
                  target="_blank"
                >
                  <i className="bi bi-images"></i> Pexels
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          fluid
          className="h-1/4 overflow-hidden rounded-lg"
          id="pexels-img-container"
        >
          <div
            className="inline-flex h-full rounded-lg"
            id="pexels-img-group"
          ></div>
        </Container>
      </section>
    </div>
  );
}
