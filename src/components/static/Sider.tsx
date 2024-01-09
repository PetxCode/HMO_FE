import {
  MdLogout,
  MdPeople,
  MdQueryStats,
  MdReport,
  MdSettings,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../reUse/Button";
import { FaBarsProgress, FaTeamspeak } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { changeMemberState } from "../../global/reduxState";

const Sider = () => {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    if (!document.startViewTransition) {
      dispatch(changeMemberState());
    } else {
      document.startViewTransition(() => {
        dispatch(changeMemberState());
      });
    }
  };

  return (
    <div className="w-full border-r bg-white text-blue-900 flex flex-col ">
      <div className="w-full flex justify-center">
        <div className="mt-10 w-28 h-28 object-cover flex border rounded-full items-center justify-center ">
          HMO
        </div>
      </div>

      <div className="mt-16 px-2 text-center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-4 text-[20px] font-medium">
          You are currently on a Family plan
        </div>
        <div className="flex w-full justify-center">
          {/* <NavLink to="upgrade"> */}
          <Button
            name="Add Member"
            className="bg-black text-white border-none"
            onClick={() => {
              onHandleClick();
            }}
          />
          {/* </NavLink> */}
        </div>
      </div>

      <div className="mt-16 px-2 flex flex-col h-[90%]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          Stats
          <MdQueryStats />
        </NavLink>
        <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Families
          <MdPeople />
        </NavLink>
        <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-purple-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-purple-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          Book Appointment
          <FaBarsProgress />
        </NavLink>
        <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-purple-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-purple-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Medical History
          <MdReport />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-purple-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-purple-100 hover:text-black cursor-pointer font-medium my-2"
          }
        >
          Settings
          <MdSettings />
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;
