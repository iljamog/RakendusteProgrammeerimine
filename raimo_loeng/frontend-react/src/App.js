import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import Register from './pages/Register';
import Login from './pages/Login';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout style={{height:"100vh"}}>
      <Header>
        <Route path="/" component={HeaderComponent} />
      </Header>

        <Content style={{padding: '35px'}}>
          <Switch>
            <Route exact path="/" component={ShowMagic} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Content>
        
        <Footer>
          <Route path="/" component={FooterComponent} />
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}

export default App;