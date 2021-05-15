import { useContext } from "react"; 
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import Carousel from "../components/Carousel"

const { Header, Content, Footer } = Layout;

function Home() {
    // const { state: { page: {title, products} } } = useContext(StoreContext);
    return (
      <Layout>
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <Content className="layout-content">
          <Carousel />
        </Content>
        <Footer className="layout-footer">
          <AppFooter/>  
        </Footer>      
      </Layout>
    );
  }

  export default Home;
