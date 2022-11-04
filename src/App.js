import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeContainer from "./components/EmployeeContainer";
import ManagerContainer from "./components/ManagerContainer";
import Dashboard from "./components/Manager/Dashboard";
import Launcher from "./components/Launcher";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Launcher />} />
          <Route path="manager" element={<ManagerContainer />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="employee" element={<EmployeeContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
