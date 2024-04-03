import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen bg-layout-bg text-white pt-[64px] px-[24px] overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
