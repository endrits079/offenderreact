import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Footer from "../components/footer/Footer";
import Contact from "../pages/contact/Contact";
import { Route, Switch, withRouter } from "react-router-dom";
function Layout(props) {
  return (
    <div className="layout">
      <Header></Header>
      <Navbar mobile></Navbar>

      {props.location.pathname !== "/login" && props.location.pathname !== "/register" && props.location.pathname !== "/contact" ? (
        <Banner></Banner>
      ) : null}
      <Switch>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(Layout);
