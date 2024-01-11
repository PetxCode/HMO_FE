import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Sider from "../static/Sider";
import { useDispatch, useSelector } from "react-redux";
import { changeToggleToFalse } from "../../global/reduxState";
import AddMember from "../../pages/family/AddMember";

const Layout = () => {
  const memberState = useSelector((state: any) => state.memberToggle);
  console.log(memberState);
  const dispatch = useDispatch();
  return (
    <div className="flex w-[100%]">
      <div className="md:flex w-[250px] h-[100vh] fixed hidden  transition-all duration-300 z-50">
        <Sider />
      </div>

      <div className="flex w-[calc(100%)] justify-end">
        <div className="flex flex-col w-[100%] transition-all duration-300 md:w-[calc(100%-250px)] justify-end">
          <Header />
          <div
            className={`min-h-[calc(100vh-72px)] p-2 m-2 border rounded-md mt-16`}
            onClick={() => {
              dispatch(changeToggleToFalse());
            }}
          >
            <Outlet />

            {memberState && (
              <div className="relative w-[100%] h-[99.2%] ">
                <div
                  className="-top-6 w-full h-full left-0 absolute rounded-md "
                  style={{
                    background: "rgba(73, 154, 255, 0.2)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(73, 154, 255, 0.3)",
                  }}
                >
                  <AddMember />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
