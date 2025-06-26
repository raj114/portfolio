import { Card, Tag } from "antd";

const skillGroups = {
  Frontend: [
    "React",
    "Redux",
    "Angular",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ],
  Backend: ["Node.js", "Django", "Python"],
  Database: ["PostgreSQL", "SQL"],
  "Tools & Libraries": ["React Query", "Bootstrap", "Ant Design"],
};

const Skills = () => (
  <div id="skills" style={{ marginTop: 40 }}>
    <Card title="Skills" bordered={false}>
      {Object.entries(skillGroups).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: 16 }}>
          <strong>{category}:</strong>
          <div style={{ marginTop: 8 }}>
            {skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      ))}
    </Card>
  </div>
);

export default Skills;
