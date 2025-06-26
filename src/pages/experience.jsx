import { Card, Timeline } from "antd";

const Experience = () => (
  <div id="experience" style={{ marginTop: 40 }}>
    <Card title="Experience" bordered={false}>
      <Timeline>
        <Timeline.Item color="green">
          <p>
            <strong>Senior Software Engineer – Lemma Technologies</strong>{" "}
            (12/2024 – Present)
          </p>
          <ul>
            <li>
              Built frontend for Integral platform using React, Redux, Ant
              Design
            </li>
            <li>Improved campaign insights by 55%</li>
            <li>Integrated async flows with React Query</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <p>
            <strong>Senior Software Engineer – Kanaka Software</strong> (06/2019
            – 11/2024)
          </p>
          <ul>
            <li>Worked on VIGILANTOPS (Angular, PrimeNG)</li>
            <li>Built reusable components and reactive forms</li>
            <li>Led frontend performance optimizations</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <p>
            <strong>Software Engineer – Quantuvos</strong>
          </p>
          <ul>
            <li>Built full-stack Angular + Django app</li>
            <li>Implemented teams integration and dynamic forms</li>
          </ul>
        </Timeline.Item>
        <Timeline.Item>
          <p>
            <strong>Associate Software Engineer – ADEPT</strong>
          </p>
          <ul>
            <li>Built UI using Angular and backend with Java Vert.x</li>
            <li>Managed entire frontend implementation</li>
          </ul>
        </Timeline.Item>
      </Timeline>
    </Card>
  </div>
);

export default Experience;
