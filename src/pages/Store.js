import React from 'react'
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductNav from '../components/ProductNav';
import ProductList from '../components/ProductList';
import products from '../json/products.json'

const { Header, Content, Footer, Sider } = Layout;

function Store() {
    return (
        <Layout>
            <Header className="layout-header">
                <AppHeader />
            </Header>
            <Layout className="layout">
                <Layout className="storelayout">
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                        console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                        }}
                    >
                        <ProductNav />
                    </Sider>
                    <Content className="layout-content">
                        <div className="productlist">
                            <ProductList products={products}/>
                        </div>
                        
                    </Content>
                </Layout>
                
            </Layout>
            <Footer className="layout-footer">
                <AppFooter/>  
            </Footer>      
        </Layout>
    )
}

export default Store
