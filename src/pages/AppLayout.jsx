import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";

const AppLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <MainSection>
      <Outlet />
    </MainSection>
  </div>
);

export default AppLayout;
