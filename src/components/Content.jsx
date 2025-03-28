import React from 'react'
import { theme } from "antd"

const Content = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: "80vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
        }}>Content in here</div>
    )
}

export default Content