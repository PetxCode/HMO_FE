import { FaOutdent } from "react-icons/fa6";
import { logoutAPI } from "../../api/userAPI";
import {
  changeToggle,
  changeToggleMenuToFalse,
  logoutState,
} from "../../global/reduxState";
import { useDispatch } from "react-redux";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Button from "../reUse/Button";

interface iData {
  title?: string;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
}
interface iProps {
  name?: iData[];

  log?: boolean;
  but?: boolean;
}

const SmallPiece: FC<iProps> = ({ log, name, but }) => {
  const dispatch = useDispatch();

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(changeToggleMenuToFalse());
    } else {
      document.startViewTransition(() => {
        dispatch(changeToggleMenuToFalse());
      });
    }
  };

  return (
    <div className="border w-[150px] bg-purple-50 shadow-sm min-h-10 rounded-md p-1 ">
      <div className="flex flex-col items-between w-full">
        {name?.map(({ title, icon, to }, i: number) => (
          <NavLink
            key={i}
            to={`${to}`}
            className="w-full
          "
            onClick={handleToggleMenuFalse}
          >
            <div className="text-[12px] w-full font-medium  duration-300 transition-all hover:bg-purple-500 p-2 rounded-md my-1 hover:text-white cursor-pointer flex items-center justify-between">
              <div>{title}</div>
              <div className="text-[17px]">{icon}</div>
            </div>
          </NavLink>
        ))}
      </div>

      {but && (
        <div className="w-full flex justify-center mt-3">
          <NavLink to="/upgrade" onClick={handleToggleMenuFalse}>
            <Button
              name="upgrade"
              className="text-[12px] uppercase font-bold bg-purple-500 text-white rounded-[3px]"
            />
          </NavLink>
        </div>
      )}

      {log && (
        <div
          className="text-[12px] font-medium  duration-300 transition-all hover:bg-purple-500 p-2 rounded-md my-1 hover:text-white cursor-pointer flex items-center justify-between"
          onClick={() => {
            dispatch(logoutState());
            logoutAPI();

            dispatch(changeToggle());
          }}
        >
          <div>Log-out</div>
          <div>
            <MdLogout size={17} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallPiece;
