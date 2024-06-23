import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Button from "./components/Button";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Button title="New Member" />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
