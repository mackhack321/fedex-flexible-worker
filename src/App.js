import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeContainer from "./components/EmployeeContainer";
import ManagerContainer from "./components/ManagerContainer";
import Dashboard from "./components/Dashboard";
import Launcher from "./components/Launcher";
import Create from "./components/Manager/Create";
import { default as ManagerOpportunityDetails } from "./components/Manager/OpportunityDetails";
import { default as EmployeeOpportunityDetails } from "./components/Employee/OpportunityDetails";
import OpportunityEdit from "./components/Manager/OpportunityEdit";
import ScrollToTop from "./components/ScrollToTop";
import ClaimConfirm from "./components/Employee/ClaimConfirm";
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";
import Profile from "./components/Employee/Profile";
import ClaimedOpportunities from "./components/Employee/ClaimedOpportunities";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index element={<Launcher />} />
          {/*  ================
                MANAGER ROUTES
               ================*/}
          <Route path="manager" element={<ManagerContainer />}>
            <Route index element={<Dashboard />} />
            <Route path="create" element={<Create />} />
            <Route
              path="opportunity/:id"
              element={<ManagerOpportunityDetails />}
            />
            <Route path="opportunity/:id/edit" element={<OpportunityEdit />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/new" element={<NewMessage />} />
          </Route>
          {/*  =================
                EMPLOYEE ROUTES
               =================*/}
          <Route path="employee" element={<EmployeeContainer />}>
            <Route index element={<Dashboard />} />
            <Route
              path="opportunity/:id"
              element={<EmployeeOpportunityDetails />}
            />
            <Route path="opportunity/:id/claim" element={<ClaimConfirm />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/new" element={<NewMessage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/claimed" element={<ClaimedOpportunities />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
