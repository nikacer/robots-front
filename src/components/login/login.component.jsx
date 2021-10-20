import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom"
import axios from 'axios'
import md5 from 'js-md5'
import './login.style.scss'

export default () => {
    let history = useHistory()

    const onFinish = async (values) => {
        try {
            const { data: { response: { token } } } = await axios.post('http://localhost:3001/api/users', { ...values, password: md5(values.password) })
            localStorage.setItem('token', token)
            history.push("/site")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="login">
            <Form name="basic" onFinish={onFinish}
                autoComplete="off">
                <Form.Item
                    label="Username"
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
