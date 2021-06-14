import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { loginToFirebase } from '../action'
import { StoreContext } from "../store"

const LoginCard = () => {
  const { state:{ userSignin: { loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo.errorFields[0].errors[0])
  };
  
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const auth = await loginToFirebase(dispatch, values);
    auth && history.push("/profile")
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFihishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "E-mail格式不對喔!",
          },
          {
            required: true,
            message: "請輸入E-mail",
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "請輸入密碼!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密碼"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>記住我</Checkbox>
        </Form.Item>

        <Link className="login-form__forgot" to={"/"}>
          忘記密碼
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form__button">
          登入
        </Button>
        或 <Link to={"/register?redirect=shipping"}>創建會員!</Link>
        {error === "" ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              <WarningOutlined className="site-form-item-icon" />
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default LoginCard;
