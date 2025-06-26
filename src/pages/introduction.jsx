import { Button, Space, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Introduction = () => (
  <div style={{ padding: "80px 0", textAlign: "center" }}>
    <Title>Rajendra Garade</Title>
    <Paragraph>Senior Software Engineer | React & Angular Expert</Paragraph>
    <Space>
      <Button type="primary" href="mailto:rajendragarade@gmail.com">
        Contact Me
      </Button>
      <Button href="/Rajendra_Garade_Resume.pdf" target="_blank">
        Download Resume
      </Button>
    </Space>
  </div>
);

export default Introduction;
