import React from 'react'
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"

const { Header, Content, Footer } = Layout;

function Product() {
    return (
        <Layout>
            <Header className="layout-header">
                <AppHeader />
            </Header>
            <Content className="layout-content">
                
            </Content>
            <Footer className="layout-footer">
                <AppFooter/>  
            </Footer>      
        </Layout>
    )
}

export default Product
