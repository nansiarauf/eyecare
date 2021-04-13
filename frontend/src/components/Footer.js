import { Layout } from "antd";
const { Footer } = Layout;
const footer = () => {
  return (
    <Layout className="footer-container">
      <Footer className="main-footer">
        <div>
          <p>Copyright NANSICORP &copy;2021</p>
        </div>
        <div>
          <p>Powered by NANSICORP TECH &trade;</p>
        </div>
        <div>
          <p>Contact us at info@nansicorp.com</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default footer;
