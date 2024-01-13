import { FC } from "react";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { useUser, useUserID } from "../../hooks/useUserID";
import LittleHeader from "../../components/layout/LittleHeader";

const SettingScreen: FC = () => {
  document.title = "Profile settings";
  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

  const pathData = [
    {
      icon: <RiPagesLine size={45} />,
      title: "Personal Info",
      detail: " Provide personal details and how we can reach you.",
      url: "/my-personal-info/info",
      size: 35,
    },
    {
      icon: <RiPagesLine size={45} />,

      title: "Professional Info",
      detail: " Provide personal details and how we can reach you.",
      url: "/my-personal-info/my-main-info",
      size: 35,
    },
    {
      icon: <HiMiniBuildingOffice2 size={45} />,
      title: "Hospital Info",
      detail: " Provide studio details and how we can reach you.",
      url: "/my-personal-info/choose-hospital",
      size: 35,
    },
  ];

  return (
    <div className=" min-h-[82vh] text-blue-950">
      <LittleHeader name={document.title} />
      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile Account Detail */}
        <div>
          <div className="font-bold text-[30px] text-blue-950 ">
            Main Settings Page
          </div>
          <div className="text-[13px]">
            `` &middot;
            <strong className="font-[600] mr-1">
              {data?.firstName} {data?.lastName} &middot;
            </strong>
            {data?.email} &middot;{" "}
            <Link
              to="/"
              className="underline text-black font-[400] hover:text-black "
            >
              <span>go back home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* profile Account Detail Card */}

      <div
        className="my-6 text-blue-950 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 transition-all duration-300 lg:[&>*:nth-child(3)]:col-span-2 xl:[&>*:nth-child(3)]:col-span-1
      "
      >
        {pathData.map((props: any, i: number) => (
          <Link to={`${props.url}`} key={i} className="text-black">
            <div className="min-w-[300px] border rounded-md p-3 min-h-[200px] text-blue-950 shadow-md flex flex-col hover:shadow-lg">
              <div className="flex-1  text-blue-950">{props.icon}</div>

              <div className="font-[500] mb-2 text-[20px]">{props.title}</div>
              <div className="text-[15px] leading-4 font-[300]">
                {props.detail}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex-1 " />
    </div>
  );
};

export default SettingScreen;
