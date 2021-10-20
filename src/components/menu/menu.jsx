import React, { useState } from 'react'
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default () => {


    return (
        <>
            <Menu
                theme="dark"
                mode="horizontal"

            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Solutions</Menu.Item>
                <Menu.Item key="3">Industries</Menu.Item>
                <Menu.Item key="4">Contactus</Menu.Item>
            </Menu>
        </>
    );
}
