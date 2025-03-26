import { Container, Row, Col, Card } from "react-bootstrap";

// Define interfaces to type our skill data
interface Skill {
  name: string;
  url: string;
  iconPath: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

// Skill categories data
const skillCategories: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        url: "https://en.wikipedia.org/wiki/JavaScript",
        iconPath: "src/assets/icons/js.png",
      },
      {
        name: "Java",
        url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        iconPath: "src/assets/icons/java.png",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        iconPath: "src/assets/icons/typescript.png",
      },
      {
        name: "Python",
        url: "https://www.python.org/",
        iconPath: "src/assets/icons/python.png",
      },
      {
        name: "R",
        url: "https://www.r-project.org/",
        iconPath: "src/assets/icons/r.png",
      },
      {
        name: "C",
        url: "https://en.wikipedia.org/wiki/C_(programming_language)",
        iconPath: "src/assets/icons/c.png",
      },
      {
        name: "C++",
        url: "https://en.wikipedia.org/wiki/C%2B%2B",
        iconPath: "src/assets/icons/c-.png",
      },
      {
        name: "MatLab",
        url: "https://www.mathworks.com/products/matlab.html",
        iconPath: "src/assets/icons/matlab-svgrepo-com.svg",
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    skills: [
      {
        name: "HTML 5",
        url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        iconPath: "src/assets/icons/html-5.png",
      },
      {
        name: "CSS 3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        iconPath: "src/assets/icons/css-3.png",
      },
      {
        name: "ECMAScript 6",
        url: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
        iconPath: "src/assets/icons/js.png",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        iconPath: "src/assets/icons/typescript.png",
      },
      {
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
        iconPath: "src/assets/icons/bootstrap.png",
      },
      {
        name: "React",
        url: "https://reactjs.org/",
        iconPath: "src/assets/icons/react.png",
      },
      {
        name: "Responsive design",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        iconPath: "src/assets/icons/responsive-design.png",
      },
      {
        name: "WebGL",
        url: "https://www.khronos.org/webgl/",
        iconPath: "src/assets/icons/webgl.png",
      },
      {
        name: "Three.js",
        url: "https://threejs.org/",
        iconPath: "src/assets/icons/3d.png",
      },
      {
        name: "Express.js",
        url: "https://expressjs.com/",
        iconPath: "src/assets/icons/express-js.png",
      },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning & Data Science",
    skills: [
      {
        name: "Python",
        url: "https://www.python.org/",
        iconPath: "src/assets/icons/python.png",
      },
      {
        name: "R",
        url: "https://www.r-project.org/",
        iconPath: "src/assets/icons/r.png",
      },
      {
        name: "Statistical inference",
        url: "https://en.wikipedia.org/wiki/Statistical_inference",
        iconPath: "src/assets/icons/statistical-inference.png",
      },
      {
        name: "Data preprocessing",
        url: "https://en.wikipedia.org/wiki/Data_preprocessing",
        iconPath: "src/assets/icons/preprocessing.png",
      },
      {
        name: "Feature engineering",
        url: "https://en.wikipedia.org/wiki/Feature_engineering",
        iconPath: "src/assets/icons/feature-engineering.png",
      },
      {
        name: "Recommender systems",
        url: "https://en.wikipedia.org/wiki/Recommender_system",
        iconPath: "src/assets/icons/recommender-system.png",
      },
      {
        name: "Time series prediction",
        url: "https://en.wikipedia.org/wiki/Time_series",
        iconPath: "src/assets/icons/time-series.png",
      },
      {
        name: "Interpretation",
        url: "https://en.wikipedia.org/wiki/Explainable_artificial_intelligence",
        iconPath: "src/assets/icons/interpretation.png",
      },
      {
        name: "Visualization",
        url: "https://en.wikipedia.org/wiki/Data_visualization",
        iconPath: "src/assets/icons/visualization.png",
      },
      {
        name: "Tableau",
        url: "https://www.tableau.com/",
        iconPath: "src/assets/icons/tableau.png",
      },
    ],
  },
  {
    id: "database",
    title: "Database Design and Management",
    skills: [
      {
        name: "Relational DB design",
        url: "https://en.wikipedia.org/wiki/Database_design",
        iconPath: "src/assets/icons/relational-db.png",
      },
      {
        name: "ER model",
        url: "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model",
        iconPath: "src/assets/icons/er-model.png",
      },
      {
        name: "DB normalization",
        url: "https://en.wikipedia.org/wiki/Database_normalization",
        iconPath: "src/assets/icons/normalization.png",
      },
      {
        name: "Relational algebra",
        url: "https://en.wikipedia.org/wiki/Relational_algebra",
        iconPath: "src/assets/icons/relational-algebra.png",
      },
      {
        name: "SQL",
        url: "https://en.wikipedia.org/wiki/SQL",
        iconPath: "src/assets/icons/sql.png",
      },
      {
        name: "MySQL DB",
        url: "https://www.mysql.com/",
        iconPath: "src/assets/icons/mysql.png",
      },
      {
        name: "OracleDB",
        url: "https://www.oracle.com/database/",
        iconPath: "src/assets/icons/oracle.png",
      },
      {
        name: "Data warehousing",
        url: "https://en.wikipedia.org/wiki/Data_warehouse",
        iconPath: "src/assets/icons/warehousing.png",
      },
    ],
  },
  {
    id: "math-statistics",
    title: "Math & Statistics",
    skills: [
      {
        name: "Differential & Integral calculus",
        url: "https://en.wikipedia.org/wiki/Differential_calculus",
        iconPath: "src/assets/icons/calculus.png",
      },
      {
        name: "Matrix and linear algebra",
        url: "https://en.wikipedia.org/wiki/Linear_algebra",
        iconPath: "src/assets/icons/matrix.png",
      },
      {
        name: "Statistical inference",
        url: "https://en.wikipedia.org/wiki/Statistical_inference",
        iconPath: "src/assets/icons/statistical-inference.png",
      },
      {
        name: "Mathematical proof",
        url: "https://en.wikipedia.org/wiki/Mathematical_proof",
        iconPath: "src/assets/icons/proof.png",
      },
      {
        name: "Probability theory",
        url: "https://en.wikipedia.org/wiki/Probability_theory",
        iconPath: "src/assets/icons/probability.png",
      },
    ],
  },
  {
    id: "human-languages",
    title: "(Human) Languages",
    skills: [
      {
        name: "Chinese - native",
        url: "https://en.wikipedia.org/wiki/Chinese_language",
        iconPath: "src/assets/icons/chinese.png",
      },
      {
        name: "English - fluent",
        url: "https://en.wikipedia.org/wiki/English_language",
        iconPath: "src/assets/icons/english.png",
      },
    ],
  },
  {
    id: "tools-technologies",
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        url: "https://git-scm.com/",
        iconPath: "src/assets/icons/git.png",
      },
      {
        name: "GitHub",
        url: "https://github.com/",
        iconPath: "src/assets/icons/github.png",
      },
      {
        name: "Docker",
        url: "https://www.docker.com/",
        iconPath: "src/assets/icons/docker.png",
      },
      {
        name: "Vim/nvim",
        url: "https://www.vim.org/",
        iconPath: "src/assets/icons/vim.png",
      },
      {
        name: "zsh",
        url: "https://www.zsh.org/",
        iconPath: "src/assets/icons/zsh.png",
      },
      {
        name: "AWS",
        url: "https://aws.amazon.com/",
        iconPath: "src/assets/icons/aws.png",
      },
      {
        name: "Linux",
        url: "https://www.linux.org/",
        iconPath: "src/assets/icons/linux.png",
      },
      {
        name: "Blender",
        url: "https://www.blender.org/",
        iconPath: "src/assets/icons/blender.svg",
      },
    ],
  },
];

// Component to render a single skill card
function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <Col xs={12} lg={6} xl={4} className="mb-4">
      <Card className="h-100 border-0">
        <Card.Body>
          <Card.Title className="text-center">{category.title}</Card.Title>
          <div className="d-flex flex-wrap gap-2 h-100">
            {category.skills.map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success"
              >
                <i
                  className="external-icon d-inline-block"
                  style={{
                    backgroundImage: `url(${skill.iconPath})`,
                    backgroundSize: skill.iconPath.includes(".svg")
                      ? "contain"
                      : "auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></i>
                {skill.name}
              </a>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function Skills() {
  return (
    <Container id="skills">
      <section className="skills-section">
        <Row className="my-3">
          <Col>
            <h2 className="text-center">Skills</h2>
          </Col>
        </Row>

        <Row>
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </Row>
      </section>
    </Container>
  );
}
