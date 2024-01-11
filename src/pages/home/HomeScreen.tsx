import { MdPeople, MdPlaylistAddCheck } from "react-icons/md";
import { useUser, useUserID } from "../../hooks/useUserID";
import Personal from "./Personal";
import Button from "../../components/reUse/Button";
import LittleHeader from "../../components/layout/LittleHeader";

const HomeScreen = () => {
  document.title = "Family Record and Stats";

  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

  return (
    <div className="text-blue-950">
      <LittleHeader name={"Home"} />
      <div className="flex flex-wrap justify-center">
        <div className="w-[300px] m-4 rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">Personal Info</div>
          <Personal props={userID} />
        </div>

        {/* Family Hospital Details */}

        <div className="w-[300px] m-4 rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">
            Family Hospital Details
          </div>

          <div>
            {data?.familyHospital?.length > 0 ? (
              <div>
                {data?.familyHospital?.map((el: any) => {
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
                  No Hospital Record yet
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Appointment */}

        <div className="w-[300px] m-4 rounded-md border p-4">
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

        {/* Appointment */}

        <div className="w-[300px] m-4 rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">Family Number Count</div>

          <div>
            {data?.members?.length > 0 ? (
              <div className="flex justify-center gap-3 w-full items-center ">
                <MdPeople size={25} />
                <p className="font-medium text-[30px]">
                  {data?.members?.length}
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

          <div className="flex w-full justify-center">
            <Button
              name="Handle Subscription"
              className="text-white bg-blue-950 hover:bg-blue-900 hover:scale-[1.02] transition-all duration-300 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
