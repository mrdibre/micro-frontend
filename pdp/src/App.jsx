import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Suspense fallback={<div>Loading...</div>}>
        <Header app={{ name: "Product Detail" }} />
      </Suspense>
    </SafeComponent>
    <div className="my-10 ">
      Home Page Content
    </div>
    <SafeComponent>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </SafeComponent>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
