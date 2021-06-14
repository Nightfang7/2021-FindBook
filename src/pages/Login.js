import React from 'react'
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import LoginCard from '../components/LoginCard';


const { Header, Content, Footer } = Layout;

function Login() {
    return (
        <Layout>
            <Header className="layout-header">
             <AppHeader />
            </Header>
            <Content className="layout-content">
             <LoginCard />
            </Content>
            <Footer className="layout-footer">
             <AppFooter/>  
            </Footer>      
        </Layout>
    )
}

export default Login
