import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/global.css";

import AddBlog from "./components/AddBlog";
import Blog from "./components/Blog";
import BlogsList from "./components/BlogsList";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return ( 
	   <div>		
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/blogs"]} component={BlogsList} />
            <Route exact path="/add" component={AddBlog} />
            <Route path="/blogs/:id" component={Blog} />
          </Switch>
        </div>
		 <Footer />		
      </div>
    );
  }
}

export default App;
