import Navbar from "./Navbar";

const MainSection = ({ children }) => {
  return (
    <div className="w-[80%] fixed left-[20%]">
      <Navbar />
      <div
        className="overflow-y-auto p-8"
        style={{ height: "calc(100vh - 80px)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainSection;
