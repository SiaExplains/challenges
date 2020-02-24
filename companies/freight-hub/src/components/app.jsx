import React, { Suspense, lazy } from "react";
import "./app.css";

import Footer from "./footer/footer";
import Header from "./header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import ShipmentItem from "./shipment-item/shipment-item";
import Home from "./home/home";
const ShipmentItem = React.lazy(() => import("./shipment-item/shipment-item"));
const ShipmentList = React.lazy(() => import("./shipment-list/shipment-list"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-image">
          <Header />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col" />
              <div className="col-10">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/list" component={ShipmentList} />
                  <Route path="/detail/:id" component={ShipmentItem} />
                  <Route path="/detail/" component={ShipmentItem} />
                </Switch>
              </div>
              <div className="col" />
            </div>
          </div>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
