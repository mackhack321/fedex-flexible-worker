import { Router } from "@reach/router";
import EmployeeContainer from "./components/EmployeeContainer";
import ManagerContainer from "./components/ManagerContainer";

function App() {
  return (
    <div>
      <Router>
        <ManagerContainer path="/manager" />
        <EmployeeContainer path="/employee" />
      </Router>
    </div>
  );
}

export default App;
