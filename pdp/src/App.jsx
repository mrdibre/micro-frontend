import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./index.scss";

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Header app={{ name: "Product Detail" }} />
        </Suspense>
      <div className="my-10 ">
        <Switch>
          <Route path="/product/:id">
            <PDPContent />
          </Route>
          <Route path="*">
            <p>Not Found</p>
          </Route>
        </Switch>
      </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
