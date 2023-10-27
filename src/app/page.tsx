import React from "react";
import Main from "@/app/Main/page";
import BlogPage from "@/app/Main/page";
import ProjectPage from "@/app/Main/page";
import { BackToTop } from "../components";
import ScrollToTop from "../utils/ScrollToTop";

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Main />
      <BlogPage />
      <ProjectPage />
      <BackToTop />
    </div>
  );
};

export default App;
