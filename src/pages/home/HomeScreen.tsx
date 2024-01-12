import { MdPeople, MdPlaylistAddCheck } from "react-icons/md";
import { useUser, useUserID } from "../../hooks/useUserID";
import Personal from "./Personal";
import LittleHeader from "../../components/layout/LittleHeader";
import { FaBuildingUser, FaCheckDouble } from "react-icons/fa6";
import HospitalDetails from "../settings/HospitalDetails";
import pix from "../../assets/pix.jpg";

const HomeScreen = () => {
  document.title = "Family Record and Stats";

  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

  const viewMembership = Array.from({ length: 3 });

  return (
    <div className="text-blue-950 flex flex-col h-full">
      <LittleHeader name={"Home"} />

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="min-w-[300px]  rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">Personal Info</div>
          <Personal props={userID} />
        </div>

        <div className="min-w-[300px] rounded-md border p-4">
          <div className="mb-4 text-[14px] font-normal capitalize">
            Family Number Count, including you
          </div>

          <div>
            {data?.members?.length > 0 ? (
              <div className="flex justify-center gap-3 w-full items-center ">
                <MdPeople size={25} />
                <p className="font-medium text-[30px]">
                  {data?.members?.length + 1}
                </p>
              </div>
            ) : (
              <div className="flex flex-col w-full items-center">
                <MdPlaylistAddCheck size={30} />
                <p className="font-medium text-[13px]">
                  No Appointment Record yet
                </p>
              </div>
            )}
          </div>

          <div className="border-b my-5" />

          <div className="flex flex-col items-center w-full justify-center">
            {/* <Button
              name="Handle Subscription"
              className="text-white bg-blue-950 hover:bg-blue-900 hover:scale-[1.02] transition-all duration-300 "
            /> */}

            <p className="mb-3 text-[14px] font-medium">View Family Member</p>

            <div className="grid grid-cols-12  ">
              {viewMembership?.map((props: any, i: number) => (
                <div
                  key={props + i}
                  className="flex flex-col items-center group transition-all duration-300  cursor-pointer"
                >
                  <img
                    src={pix}
                    className="object-cover rounded-full min-w-14 h-14 border-2 border-white"
                  />
                  <p className="text-[12px] opacity-0 font-medium group-hover:opacity-100 transition-all duration-300">
                    name
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  ">
          {/* Appointment */}

          <div className=" rounded-md w-full  p-4">
            <div className="mb-4 text-medium capitalize">
              Personal Appointment Details
            </div>

            <div>
              {data?.appointment?.length > 0 ? (
                <div>
                  {data?.appointment?.map((el: any) => {
                    <div key={el?._id}>
                      <div>
                        <span>{el}</span>
                      </div>
                    </div>;
                  })}
                </div>
              ) : (
                <div className="flex flex-col w-full items-center">
                  <MdPlaylistAddCheck size={30} />
                  <p className="font-medium text-[13px]">
                    No Appointment Record yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <div className=" border bg-slate-50 mt-10 p-2 ">
        {data?.familyHospital?.length > 0 ? (
          <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <div className="border rounded-md flex gap-2 w-full p-2 overflow-hidden">
              <FaBuildingUser size={25} />
              <HospitalDetails
                state={data?.familyHospital[0]}
                choice="First Choice"
              />
            </div>

            <div className="border rounded-md flex gap-2 w-full p-2">
              <FaBuildingUser size={25} />
              <HospitalDetails
                state={data?.familyHospital[1]}
                choice="Second Choice"
              />
            </div>

            <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  xl:col-span-1  ">
              <FaBuildingUser size={25} />
              <HospitalDetails
                state={data?.familyHospital[2]}
                choice="Third Choice"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <FaCheckDouble />
            <p className="mt-3 text-[12px] font-medium">
              No hospital Enter yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
