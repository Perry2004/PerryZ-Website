import { Container, Stack } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

// Create a dedicated component for the attribution links
function AttributionLinks() {
  const iconCredits = [
    {
      url: "https://www.flaticon.com/free-icons/html",
      title: "html icons",
      creator: "Freepik",
    },
    {
      url: "https://www.flaticon.com/free-icons/website-layout",
      title: "website layout icons",
      creator: "Sofia Cos",
    },
    {
      url: "https://www.flaticon.com/free-icons/webgl",
      title: "webgl icons",
      creator: "Muhammad Ali",
    },
    {
      url: "https://www.flaticon.com/free-icons/process",
      title: "process icons",
      creator: "Maan Icons",
    },
    {
      url: "https://www.flaticon.com/free-icons/search-bar",
      title: "search bar icons",
      creator: "Anggara",
    },
    {
      url: "https://www.flaticon.com/free-icons/recommendation",
      title: "recommendation icons",
      creator: "orvipixel",
    },
    {
      url: "https://www.flaticon.com/free-icons/series",
      title: "series icons",
      creator: "Reion",
    },
    {
      url: "https://www.flaticon.com/free-icons/machine-learning",
      title: "machine learning icons",
      creator: "Reddie",
    },
    {
      url: "https://www.flaticon.com/free-icons/candlestick",
      title: "candlestick icons",
      creator: "Handicon",
    },
    {
      url: "https://www.flaticon.com/free-icons/analysis",
      title: "analysis icons",
      creator: "Andrean Prabowo",
    },
    {
      url: "https://www.flaticon.com/free-icons/hierarchy",
      title: "hierarchy icons",
      creator: "ultimatearm",
    },
    {
      url: "https://www.flaticon.com/free-icons/crm",
      title: "CRM icons",
      creator: "gravisio",
    },
    {
      url: "https://www.flaticon.com/free-icons/standardize",
      title: "standardize icons",
      creator: "Uniconlabs",
    },
    {
      url: "https://www.flaticon.com/free-icons/sql-server",
      title: "sql server icons",
      creator: "Nadiinko",
    },
    {
      url: "https://www.flaticon.com/free-icons/oracle",
      title: "oracle icons",
      creator: "ZFreet",
    },
    {
      url: "https://www.flaticon.com/free-icons/data-warehouse",
      title: "data warehouse icons",
      creator: "monkik",
    },
    {
      url: "https://www.flaticon.com/free-icons/matrix",
      title: "matrix icons",
      creator: "Vitaly Gorbachev",
    },
    {
      url: "https://www.flaticon.com/free-icons/inference",
      title: "inference icons",
      creator: "Vectors Tank",
    },
    {
      url: "https://www.flaticon.com/free-icons/proof",
      title: "proof icons",
      creator: "juicy_fish",
    },
    {
      url: "https://www.flaticon.com/free-icons/probability",
      title: "probability icons",
      creator: "Smashicons",
    },
    {
      url: "https://www.flaticon.com/free-icons/chinese",
      title: "chinese icons",
      creator: "berkahicon",
    },
    {
      url: "https://www.flaticon.com/free-icons/commit-git",
      title: "commit git icons",
      creator: "Afian Rochmah Afif",
    },
    {
      url: "https://www.flaticon.com/free-icons/github",
      title: "github icons",
      creator: "riajulislam",
    },
    {
      url: "https://www.flaticon.com/free-icons/vim",
      title: "vim icons",
      creator: "JunGSa",
    },
    {
      url: "https://www.flaticon.com/free-icons/bash",
      title: "bash icons",
      creator: "Ylivdesign",
    },
    {
      url: "https://icons8.com/icon/WNoJgbzDr3i2/express-js",
      title: "express js icons",
      creator: "Icons8",
    },
  ];

  return (
    <div className="attribution-content">
      <p>I'm using icons from:</p>
      <p>
        {iconCredits.map((credit, index) => (
          <>
            <a
              key={`credit-${index}`}
              href={credit.url}
              title={credit.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {credit.creator}
            </a>
            {index < iconCredits.length - 1 ? ", " : "."}
          </>
        ))}
      </p>
      <p>Some icons are from Bootstrap Icons.</p>
      <p>
        The fonts used on this page are from{" "}
        <a
          href="https://fonts.google.com/"
          title="google fonts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Fonts
        </a>
        .
      </p>
      <p>
        The Blue Marble texture is from{" "}
        <a
          href="https://visibleearth.nasa.gov/collection/1484/blue-marble"
          target="_blank"
          rel="noopener noreferrer"
        >
          NASA
        </a>{" "}
        and processed with Blender.
      </p>
    </div>
  );
}

export default function Footer() {
  const attributionPopover = (
    <Popover id="popover-attribution">
      <Popover.Header as="h3">Attribution</Popover.Header>
      <Popover.Body>
        <AttributionLinks />
      </Popover.Body>
    </Popover>
  );

  return (
    <Container fluid className="footer">
      <Container>
        <Stack direction="horizontal" gap={0}>
          <div className="p-4 footer-col gap-1">
            <h5>Contact Me</h5>
            <div>Perry Zhu</div>
            <div>Location: Vancouver, BC, Canada / Harbin, China</div>
            <div>
              Email:
              <a href="mailto:perryzhu2004@outlook.com">
                {" "}
                perryzhu2004@outlook.com
              </a>
            </div>
            <div className="icon-group">
              <a
                href="https://github.com/Perry2004"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/perry-z/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/perryzhu2004/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.pexels.com/@perry-z-1662054943/"
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-images"></i>
              </a>
            </div>
          </div>

          <div className="vr"></div>

          <div className="p-4 footer-col">
            <div>
              The frontend page is built with Bootstrap, Sass, TypeScript, and
              Three.js. <br />
              Code licensed under{" "}
              <a
                href="https://github.com/Perry2004/PerryZ-Website/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT
              </a>
              .
            </div>
            <div>
              Spot an issue? Open an issue on{" "}
              <a
                href="https://github.com/Perry2004/PerryZ-Website/issues/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              or send me an <a href="mailto:perryzhu2004@outlook.com">email</a>.
            </div>
          </div>

          <div className="vr"></div>

          <div className="p-4 footer-col">
            <div>This page is designed and developed by Perry Zhu.</div>
            <div>&copy; 2024-2025, Perry Zhu. All rights reserved.</div>
            <div>
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={attributionPopover}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Click
                </a>
              </OverlayTrigger>{" "}
              to check the attribution of the icons used on this page.
            </div>
          </div>
        </Stack>
      </Container>
    </Container>
  );
}
