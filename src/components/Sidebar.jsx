import logo from "../assests/images/logo.jpg";

const Sidebar = () => (
  <div className="w-5/24 bg-sidebar-bg text-white p-4">
    <div className="h-16 border-b border-gray-100 flex justify-center py-1">
      <img src={logo} alt="Logo" className="rounded-lg h-full" />
    </div>
  </div>
);

export default Sidebar;
