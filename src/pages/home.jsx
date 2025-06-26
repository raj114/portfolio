import { Layout } from "antd";
import About from "./about";
import Certificates from "./certificates";
import Education from "./education";
import Experience from "./experience";
import FooterBar from "./footer";
import HeaderBar from "./header";
import Introduction from "./introduction";
import Skills from "./skills";

export default function Home() {
  return (
    <>
      <Layout>
        <HeaderBar />
        <Layout.Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Introduction />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
        </Layout.Content>
        <FooterBar />
      </Layout>
    </>
  );
}
