import React, { useState } from 'react'
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductNav from '../components/ProductNav';
import ProductDetail from "../components/ProductDetail"
import products from "../json/products.json";

const { Header, Content, Footer, Sider } = Layout;

// 單項商品頁
function Product({ match }) {
    const product = products.find(
        (x) => x.id === match.params.productId
     );
    const [collapsed, setcollapsed] = useState(false);
    const onCollapse = collapsed => setcollapsed( collapsed );

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
                        <ProductDetail product={product} />
                    </Content>
                </Layout>
            </Layout>
            <Footer className="layout-footer">
                <AppFooter/>  
            </Footer>      
        </Layout>
    )
}

export default Product
