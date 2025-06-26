import { Card, Descriptions } from "antd";

const Education = () => (
  <div id="education" style={{ marginTop: 40 }}>
    <Card title="Education" bordered={false}>
      <Descriptions column={1} bordered>
        <Descriptions.Item label="MCA (2016–2019)">GPA: 6.7</Descriptions.Item>
        <Descriptions.Item label="BCA (2013–2016)">73.41%</Descriptions.Item>
        <Descriptions.Item label="12th (2012–2013)">68.50%</Descriptions.Item>
        <Descriptions.Item label="10th (2010–2011)">88.91%</Descriptions.Item>
      </Descriptions>
    </Card>
  </div>
);

export default Education;
