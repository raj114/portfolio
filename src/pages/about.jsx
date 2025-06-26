import { Card } from "antd";

const About = () => (
  <div id="about" style={{ marginTop: 40 }}>
    <Card title="About Me" bordered={false}>
      <p>
        Highly skilled and motivated Software Engineer with 5+ years of
        experience specializing in Angular and React development.
      </p>
      <p>
        Proficient in building scalable, performant web applications using
        modern JavaScript frameworks and libraries.
      </p>
      <p>Location: Pune, Maharashtra</p>
      <p>Email: rajendragarade@gmail.com</p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/rajendra-garade-8a3866b5/"
          target="_blank"
        >
          Profile
        </a>
      </p>
    </Card>
  </div>
);

export default About;
