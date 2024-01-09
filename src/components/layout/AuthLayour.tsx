import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />

      <div className="flex flex-col w-full items-center text-[13px]">
        <div className=" w-[60%] md:w-[400px] border-b mb-3 transition-all duration-300" />
        <div>This Project is built with Care</div>
        <div className="font-medium">Having you in Mind!</div>
      </div>
    </div>
  );
};

export default AuthLayout;
