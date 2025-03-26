import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

// Define interface to type our project data
interface ProjectInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  icon: string;
  text: string;
  features: { title: string; description: string }[];
  iconClass?: string; // Changed from iconStyle to iconClass for Tailwind
}

// Project data extracted into an array of objects
const projectInfos: ProjectInfo[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    subtitle:
      "Full-Stack Web Design & Development With HTML, CSS, and TypeScript",
    description:
      "A personal website to showcase my projects, skills, and experiences.",
    features: [
      {
        title:
          "Built and hosted a full-stack website using HTML5, Sass, Three.js, and WebGL for 3D graphics.",
        description:
          "The website is designed to showcase my projects, skills, and experiences in a visually appealing and interactive way. The frontend is built with HTML5, Bootstrap, Sass, TypeScript, and Three.js. The website is designed in a responsive manner to ensure compatibility with different devices and screen sizes.",
      },
      {
        title:
          "Hosted on an AWS Linux EC2 instance with a Node.js backend and Express framework.",
        description:
          "The backend is constructed with Node.js and Express framework. It is hosted on an AWS Linux EC2 instance on my personal domain. The backend is responsible for serving the frontend resources, handling API requests, and managing user data. The website is designed to be scalable and maintainable, with a focus on performance and security.",
      },
      {
        title: "Currently integrating a MySQL database for user data storage.",
        description:
          "I'm currently working on integrating a MySQL database to the back end to store some data and handle API requests. A rough idea was to create a postboard where visitors can leave comments along with their names and emails.",
      },
    ],
    url: "https://github.com/Perry2004/PerryZ-Website",
    icon: "bi bi-github",
    text: "Check GitHub",
  },
  {
    id: "airbnb-ml",
    title: "NYC Airbnb Reviews ML Prediction",
    subtitle:
      "Supervised Machine Learning Project Using Python and Multiple Models",
    description: "Machine learning project to predict Airbnb review counts.",
    features: [
      {
        title:
          "Developed machine learning pipelines using Python to predict the number of Airbnb reviews per month.",
        description:
          "Using Python, NumPy, Pandas, Scikit-learn, and MatPlotLib, I developed several machine learning pipelines and visualized and evaluated their performance on the NYC Airbnb dataset. The goal was to predict the number of reviews per month based on various features like price, location, and room type.",
      },
      {
        title:
          "Performed extensive preprocessing and feature engineering to improve model performance.",
        description:
          "To achieve higher performance and interpretability, multiple preprocessing and feature engineering techniques were applied to the dataset including imputation, standardization, categorical encoding, text encoding, and discretization.",
      },
      {
        title:
          "Achieved interpretability using SHAP and reduced overfitting with feature selection.",
        description:
          "To explain the model predictions and reduce overfitting, the SHAP library was used to generate a additive plot to show the impact of each feature on the model prediction. After checking if they make sense, performed feature selection using SelectFromModel to reduce the number of features and improve the model's generalization.",
      },
    ],
    url: "https://github.com/Perry2004/NYC-Airbnb-Reviews-ML-Prediction",
    icon: "bi bi-github",
    text: "Check GitHub",
  },
  {
    id: "uno-game",
    title: "UNO Game Management System",
    subtitle: "Full-Stack Data Management Project with MySQL Database",
    description: "A data management system for UNO card game.",
    features: [
      {
        title:
          "Designed a full-stack system for managing UNO game data with a RESTful API.",
        description:
          "This is project is a full-stack data management system using Node.js, Express, and MySQL. The system is designed to store information about the players, games, and cards, providing features such as player registration, game management, card management, and inventory management.",
      },
      {
        title:
          "Built a dynamic front-end interface with JavaScript and asynchronous fetch requests.",
        description:
          "Constructed a front-end interface with comprehensive form validation, clear visual notifications, animations, and smooth interaction by avoiding extra refresh using asynchronous fetches to replace the default form submission behavior using HTML, CSS, and JavaScript.",
      },
      {
        title:
          "Implemented SQL queries with sanitization to prevent injection and ensure data security.",
        description:
          "Tailored SQL DDLs and DML templates in the backend model with sanitization to prevent injection for functionalities, including nested group-by aggregation, division, and view creations to handle user request actions triggered by front-end event listeners.",
      },
    ],
    url: "https://github.com/Perry2004/UNO-Game-Management-System",
    icon: "bi bi-github",
    text: "Check GitHub",
  },
  {
    id: "snake-game",
    title: "Two Player Snake Game",
    subtitle: "Real-Time Interactive Game With Java/MatLab",
    description: "A two-player version of the classic Snake game.",
    features: [
      {
        title:
          "Developed a real-time game of two versions using Java and MatLab.",
        description:
          "Constructed a video game that allows two players to play the traditional Snake game on the same computer. Developed the game firstly in MatLab and later migrated to Java with Swing and Lanterna libraries.",
      },
      {
        title:
          "Applied design patterns like MVC and Observer for scalability and maintainability.",
        description:
          "The Java version is empowered with singleton, observer, and MVC design patterns to divide the project into separate components and hierarchies with well-specified interfaces for better maintainability and scalability.",
      },
      {
        title: "Achieved 100% unit test coverage with JUnit.",
        description:
          "While migrating to Java, the program was tested with JUnit to ensure the correctness of the game logic and the robustness of the game engine. During the entire development process, the game maintained a 100% unit test coverage.",
      },
    ],
    url: "https://github.com/Perry2004/Two-Player-Snake-Game-Java",
    icon: "bi external-icon",
    text: "Check Java version",
    iconClass:
      "bg-[url('/src/assets/icons/java-svgrepo-com.svg')] bg-contain bg-no-repeat bg-center w-6 h-6 inline-block",
  },
];

// Component to render a single project
function ProjectCard({ project }: { project: ProjectInfo }) {
  return (
    <Col lg={5}>
      <Card className="project-card">
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Subtitle>{project.subtitle}</Card.Subtitle>

          <Accordion flush>
            {project.features.map((feature, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header className="accordion-header">
                  {feature.title}
                </Accordion.Header>
                <Accordion.Body>{feature.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="card-link d-flex justify-content-evenly w-100 fs-5">
            <a
              href={project.url}
              target="_blank"
              className="icon-link icon-link-hover d-flex align-items-start"
              rel="noopener noreferrer"
            >
              <i className={`${project.icon} ${project.iconClass || ""}`}></i>{" "}
              {project.text}
            </a>
            {project.id === "snake-game" && (
              <a
                href="https://github.com/Perry2004/Two-Player-Snake-Game-Matlab"
                target="_blank"
                className="icon-link icon-link-hover d-flex align-items-start"
                rel="noopener noreferrer"
              >
                <i className="bi external-icon bg-[url('/src/assets/icons/matlab-svgrepo-com.svg')] bg-contain bg-no-repeat bg-center w-6 h-6 inline-block"></i>{" "}
                Check MatLab version
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function Projects() {
  return (
    <Container className="d-flex justify-content-center" id="projects">
      <section className="pb-3 mx-auto w-100">
        <Row className="my-5">
          <h2>Projects</h2>
        </Row>

        <Row
          className="justify-content-evenly row-gap-5"
          id="project-cards-row"
        >
          {projectInfos.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </section>
    </Container>
  );
}
