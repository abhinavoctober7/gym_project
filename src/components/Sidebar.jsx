import logo from "../assests/images/logo.jpg";
import homeIcon from "../assests/icons/home.svg";

const Sidebar = () => {
  const tabList = [
    "Members List",
    "Class Scheduling",
    "Trainer Management",
    "Payment Processing",
    "Equipment Management",
    "Workout and Diet Plans",
    "Feedback and Support",
    "Reports and Analytics",
    "Notifications and Alerts",
    "Content Management",
  ];

  return (
    <div className="w-[20%] bg-sidebar text-white p-4 h-full fixed top-0 left-0">
      <div className="h-16 border-b border-gray-100 flex justify-center py-1">
        <img src={logo} alt="Logo" className="rounded-lg" />
      </div>
      <div className="p-2 pt-8">
        {tabList.map((tabName) => (
          <div
            key={tabName}
            className="bg-sidebar-tab hover:bg-hover-sidebar-tab p-3 rounded-lg flex items-center gap-4 mb-3 cursor-pointer"
          >
            <img src={homeIcon} alt="" />
            <div className="text-sm text-white font-semibold">{tabName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
