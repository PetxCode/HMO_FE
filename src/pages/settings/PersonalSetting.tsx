import { FC } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const PersonalSetting: FC = () => {
  document.title = "Personal Settings";
  let name: any = location.pathname;

  const pathData = [
    {
      icon: <MdHealthAndSafety size={55} />,
      title: "Why isn’t my info shown here?",
      detail: "We’re hiding some account details to protect your identity.",
      url: "/",
      size: 55,
    },
    {
      icon: <FaUnlockKeyhole size={55} />,
      title: "Which details can be edited?",
      detail:
        "Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.",
      url: "/",
      size: 35,
    },
  ];

  return (
    <div>
      <div className="flex items-center text-blue-950">
        Account <LiaGreaterThanSolid size={13} className="mx-4 " />{" "}
        <Link to="/settings" className="underline">
          Settings
        </Link>{" "}
        <LiaGreaterThanSolid size={13} className="mx-4 " />{" "}
        <div className="capitalize">
          {name.split("/")[1].replaceAll("-", " ")}
        </div>
      </div>
      <div className="text-blue-800 mt-5 font-[500] text-[30px] mb-10 capitalize">
        {name.split("/")[2].replaceAll("-", " ")}
      </div>

      <div className="w-full sm:grid sm:grid-cols-6 min-h-[65vh]  text-blue-950">
        <Outlet />

        <div
          className="border ml-2 rounded-md hidden sm:block text-blue-950 "
          style={{
            gridColumn: "5/7",
          }}
        >
          {pathData.map((props: any, i: number) => (
            <div className="m-2 " key={i}>
              <div className="relative mb-8">
                <div className="mt-4 absolute top-[-10px] left-1  text-blue-500 z-[2px] opacity-20 ">
                  {props.icon}
                </div>
                <div className="mt-4 ">{props.icon}</div>
              </div>
              <div className="my-4 text-blue-950 text-[20px] font-[400] ">
                {props.title}
              </div>
              <div className="mb-6  text-[17px]  leading-6 text-blue-900">
                {props.detail}
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalSetting;

{
  /* absolute left-16 top-60  */
}
{
  /* <p
className="w-[80%] h-screen absolute z-10 bg-fuchsia-400 blur-sm "
style={{
  background: "rgba( 255, 255, 255, 0.25 )",
  backdropFilter: " blur( 4px )",
  // border: "1px solid rgba( 255, 255, 255, 0.18 )",
}}
>
{" "}
</p> */
}
