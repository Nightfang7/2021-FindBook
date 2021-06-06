import React, { useState, useContext } from 'react'
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductNav from '../components/ProductNav';
import ProductList from '../components/ProductList';
import { StoreContext } from "../store"


const { Header, Content, Footer, Sider } = Layout;

// 商品集頁
function Store() {
    const { state: { page: {title, products} } } = useContext(StoreContext);
    const [collapsed, setcollapsed] = useState(false);
    const onCollapse = collapsed => setcollapsed( collapsed );
    console.log(products)
    console.log(title)
    return (
        <Layout>
            <Header className="layout-header">
                <AppHeader />
            </Header>
            <Layout className="layout">
                <Layout className="storelayout">
                    <Sider
                        collapsible collapsed={collapsed} onCollapse={onCollapse}
                    >
                        <ProductNav />
                    </Sider>
                    <Content className="layout-content">
                        <ProductList products={products} title={title} />
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
