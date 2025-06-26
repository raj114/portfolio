import { HeartFilled } from "@ant-design/icons";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterBar = () => (
  <Footer style={{ textAlign: "center" }}>
    © Love From <HeartFilled style={{ color: "red" }} /> Rajendra Garade.
  </Footer>
);

export default FooterBar;
