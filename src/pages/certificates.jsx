import { Card, List } from "antd";

const Certificates = () => (
  <div id="certificates" style={{ marginTop: 40, marginBottom: 40 }}>
    <Card title="Certificates" bordered={false}>
      <List
        dataSource={[
          "React JS – Great Learning",
          "Kanaka Hackathon Runner-up – 2021",
        ]}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>
  </div>
);

export default Certificates;
