import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <Navbar />
  </div>
);

export default AppLayout;
