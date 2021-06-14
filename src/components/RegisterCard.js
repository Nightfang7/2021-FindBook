import React, {useContext} from 'react'
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Checkbox, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase } from '../action'
import { StoreContext } from "../store"


const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  };

function RegisterCard() {
    const { state:{ userRegister: { loading, error } }, dispatch } = useContext(StoreContext);
    const [form] = Form.useForm();
    const history = useHistory();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const user = await registerToFirebase(dispatch, values);
        user && history.push("/profile");
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            className="register-form"
            scrollToFirstError
            >
            <Form.Item
                name="name"
                label="姓名"
                tooltip="What do you want others to call you?"
                rules={[
                {
                    required: true,
                    message: "Please input your name!",
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: "email",
                    message: "The input is not valid E-mail!",
                },
                {
                    required: true,
                    message: "Please input your E-mail!",
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="密碼"
                rules={[
                {
                    required: true,
                    message: "Please input your password!",
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="rePassword"
                label="再確認密碼"
                dependencies={["password"]}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: "Please re-enter your password!",
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(
                        new Error("The two passwords that you entered do not match!")
                    );
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                {
                    validator: (_, value) =>
                    value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                我以閱讀 <Link to="">協議書</Link>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button
                type="primary"
                className="login-form__button"
                htmlType="submit"
                >
                創建會員
                </Button>
                已有會員?{" "}
                <Link to={"/login?redirect=shipping"}>登入</Link>
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
    )
}

export default RegisterCard