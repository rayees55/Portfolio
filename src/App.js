import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import RecommendationSection from "./components/RecommendationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
//import WriteRecommendation from "./components/WriteaRecommendation";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Title />
          <RecommendationSection />
          <SkillsSection />
          <ProjectSection />
          <AboutMe />
          <BlogSection />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* <Route path="/write-a-recommendation">
          <WriteRecommendation /></Route> */}
        
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
