import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutAbout from "./pages/LayoutAbout";
import LayoutHome from "./pages/LayoutHome";
import { ParallaxProvider } from "react-scroll-parallax";
import Project from "./components/Project";
import LayoutPortfolio from "./pages/LayoutPortfolio";

const App = () => {
    return (
        <ParallaxProvider scrollAxis={"vertical"}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LayoutHome} />
                    <Route path="/about" component={LayoutAbout} exact />
                    <Route path="/portfolio" component={LayoutPortfolio} exact />
                    <Route path="/portfolio/:id" component={Project} exact />
                </Switch>
            </Router>
        </ParallaxProvider>
    );
};

export default App;
