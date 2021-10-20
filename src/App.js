import './App.css';
import React, { useLayoutEffect } from "react";
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout } from 'antd';



import Login from './components/login/login.component'
import Error404 from './components/error404/error404.component'
import Menu from './components/menu/menu'
import Benefits from './components/benefits/benefits'

function App() {
  const { Header, Footer, Content } = Layout;

  useLayoutEffect(() => {
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token')
      return token ? { ...config, headers: { ...config.headers, authorization: `Bearer ${token}` } } : config;
    }, function (error) {
      return Promise.reject(error);
    });
  }, [axios])

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/site">
          <Layout>
            <Header><Menu /></Header>
            <Layout>
              <Content>
                <Switch>
                  <Route path="/site" exact>
                    <Benefits />
                  </Route>
                </Switch>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Route>
        <Route path="**">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
