import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar";
import { NavContext } from "./context/navcontext";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import "./assets/styles/gloablestyles.css";
import Users from "./pages/users/users";
import CustomerDashboard from "./pages/customer-dashboard/customerdashboard";
import Delivery from "./pages/delivery";
import Payments from "./pages/payments";
import Verification from "./pages/verifications";
import Reports from "./pages/reports/reports";

function App() {
  const [navSelected, setNavSelected] = React.useState("dashboard");
  return (
    <div className="App bg-light">
      <div className="container-fluid">
        <div className="row">
          <NavContext.Provider value={{ navSelected, setNavSelected }}>
            <div className="col-2 bg-white position-fixed z-3">
              <SideBar />
            </div>
            <div className="col-2"></div>
            <div className="col w-100">
              <div className="overflow-x-auto overflow-y-hidden">
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/dashboard" element={<Dashboard />}></Route>
                  <Route path="/user" element={<Users />}></Route>
                  <Route
                    path="/user/id"
                    element={<CustomerDashboard />}
                  ></Route>
                  <Route path="/delivery" element={<Delivery />}></Route>
                  <Route path="/payment" element={<Payments />}></Route>
                  <Route
                    path="/verification"
                    element={<Verification />}
                  ></Route>
                  <Route path="/report" element={<Reports />} />
                </Routes>
              </div>
            </div>
          </NavContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
