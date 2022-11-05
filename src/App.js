import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeContainer from "./components/EmployeeContainer";
import ManagerContainer from "./components/ManagerContainer";
import Dashboard from "./components/Manager/Dashboard";
import Launcher from "./components/Launcher";
import Create from "./components/Manager/Create";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Launcher />} />
          <Route path="manager" element={<ManagerContainer />}>
            <Route index element={<Dashboard />} />
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="employee" element={<EmployeeContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
