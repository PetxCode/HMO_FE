import { FaArrowDown, FaBarsProgress } from "react-icons/fa6";
import pic from "../../assets/pix.jpg";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle, changeToggleMenu } from "../../global/reduxState";
import SmallPiece from "./SmallPiece";
import {
  MdAccountCircle,
  MdClose,
  MdMenu,
  MdPeople,
  MdQueryStats,
  MdReport,
} from "react-icons/md";
import { useUser, useUserID } from "../../hooks/useUserID";

const Header = () => {
  const { user: userID } = useUserID();
  const { user } = useUser(userID);

  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const toggleMenu = useSelector((state: any) => state.toggleMenu);

  const handleToggleMenu = () => {
    if (!document.startViewTransition) {
      dispatch(changeToggleMenu());
    } else {
      document.startViewTransition(() => {
        dispatch(changeToggleMenu());
      });
    }
  };

  return (
    <div
      className="h-[50px] bg-blue-50 border-b w-full flex justify-center items-center  z-10 fixed top-0 left-0"
      onClick={() => {}}
    >
      <div className="flex items-center  justify-end w-[90%]">
        <div
          className="flex items-center px-2 py-1 border rounded-full gap-3 duration-300 transition-all cursor-pointer z-10 bg-white shadow-sm"
          onClick={() => {
            dispatch(changeToggle());
          }}
        >
          <img
            className="w-8 h-8 rounded-full border object-cover"
            src={user?.avatar ? user?.avatar : pic}
          />

          {toggle ? (
            <FaArrowDown className="rotate-180 duration-300 transition-all" />
          ) : (
            <FaArrowDown className="rotate-0 duration-300 transition-all" />
          )}
        </div>

        <div className=" md:hidden text-[30px] cursor-pointer ml-3  duration-300 transition-all">
          {toggleMenu ? (
            <MdClose
              className="duration-500 transition-all"
              onClick={handleToggleMenu}
            />
          ) : (
            <MdMenu
              className="duration-500 transition-all"
              onClick={handleToggleMenu}
            />
          )}
        </div>
      </div>

      <div
        className={`absolute duration-300 transition-all ${
          toggle ? "right-6 top-14  " : "right-6 -top-36  "
        }`}
      >
        <SmallPiece
          name={[
            { title: "Account", icon: <MdAccountCircle />, to: "settings" },
          ]}
          log
        />
      </div>

      {toggleMenu && (
        <div
          className={`absolute duration-300 transition-all ${
            toggleMenu ? "right-6 top-14  " : "right-6 -top-24  "
          }`}
        >
          <SmallPiece
            name={[
              {
                title: "Stats",
                icon: <MdQueryStats />,
                to: "/",
              },
              {
                title: "Teams",
                icon: <MdPeople />,
                to: "teams",
              },
              {
                title: "Projects",
                icon: <FaBarsProgress />,
                to: "projects",
              },
              {
                title: "Report",
                icon: <MdReport />,
                to: "report",
              },
            ]}
            but
          />
        </div>
      )}
    </div>
  );
};

export default Header;
