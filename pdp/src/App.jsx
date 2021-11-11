import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
    <div className="my-10 ">
      Home Page Content
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
