import { Modal, Button, Form, Input } from "antd";
const loginForm = () => {
  return (
    <>
      // A MODAL WITH A LOGIN FORM
      <Modal title="Login Form" visible={} onOk={} confirmLoading={} onCancel={}>
        <Form className="login-form">
          <Form.Item name="username">
            <Input placeholder="username" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Button type="">Log in</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default loginForm;
