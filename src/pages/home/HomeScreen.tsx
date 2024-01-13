import { MdPeople, MdPlaylistAddCheck } from "react-icons/md";
import { useUser, useUserID } from "../../hooks/useUserID";
import Personal from "./Personal";
import LittleHeader from "../../components/layout/LittleHeader";
import { FaBuildingUser, FaCheckDouble } from "react-icons/fa6";
import HospitalDetails from "../settings/HospitalDetails";
import pix from "../../assets/pix.jpg";
import Button from "../../components/reUse/Button";
import { useUserPayment } from "../../hooks/usePayment";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { makePaymentAPI } from "../../api/paymentAPI";
import Clipboard from "react-spinners/ClipLoader";

const HomeScreen = () => {
  document.title = "Family Record and Stats";

  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

  const [state, setState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { data: payment } = useUserPayment(userID);
  const viewMembership = Array.from({ length: 3 });

  const config = {
    reference: new Date().getTime().toString(),
    email: data?.email,
    amount: 2000 * (data?.members?.length + 1) * 12 * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const initializePayment: any = usePaystackPayment(config);
  // makePaymentAPI(userID);

  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    makePaymentAPI(userID).then(() => {
      setLoading(false);
    });
    console.log("reference");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <div className="text-blue-950 flex flex-col h-full">
      <LittleHeader name={"Home"} />

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="min-w-[300px] h-full flex flex-col rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">Personal Info</div>
          <Personal props={userID} />

          <div className="flex-1" />
          <div className="text-[13px] font-medium mt-4">
            <div className="flex items-center gap-4">
              <div className="border-r pr-4 ">
                {state ? (
                  <label className="relative w-20 h-20 flex flex-col items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={state}
                      onChange={() => {
                        setState("");
                      }}
                      className="sr-only peer"
                    />

                    <div className="absolute -bottom-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-900 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950" />
                    <span className="absolute text-[12px] leading-tight mt-2 font-medium text-gray-900 dark:text-gray-300">
                      View Subs Status
                    </span>
                  </label>
                ) : (
                  <label className="relative w-20 flex flex-col h-20 items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value={state}
                      onChange={() => {
                        setState("dd");
                      }}
                    />

                    <div className=" absolute -bottom-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950" />

                    <span className="absolute text-[12px] leading-tight mt-2 font-medium text-gray-900 dark:text-gray-300">
                      View Subs Status
                    </span>
                  </label>
                )}
              </div>
              <div className="w-[60%] text-blue-950">
                {state ? (
                  <div>
                    Your subscription starts:{" "}
                    <span>{payment?.payments[0]?.startDate}</span>
                  </div>
                ) : (
                  <div>
                    Your subscription expires:{" "}
                    <span>{payment?.payments[0]?.endDate}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[300px] h-full flex flex-col rounded-md border p-4">
          <div className="mb-4 text-[14px] font-normal capitalize">
            Family Number Count, including you
          </div>

          <div>
            {data?.members?.length > 0 ? (
              <div className="flex justify-center gap-3 w-full items-center ">
                <div className="leading-tight">
                  <div className="flex items-center">
                    <MdPeople size={25} />
                    <p className="font-medium text-[30px] ml-1">
                      {data?.members?.length + 1}
                    </p>
                  </div>
                  <p className="leading-tight">
                    cost:{" "}
                    <strong className="text-blue-950 font-bold">
                      ₦{2000 * (data?.members?.length + 1).toLocaleString()}
                    </strong>
                  </p>
                </div>

                {/* from Paysatck */}
                <div className="border-l ">
                  <Button
                    name={
                      loading ? "Processing Payment" : "Handle Subscription"
                    }
                    icon={loading && <Clipboard color="white" size={20} />}
                    className="text-white bg-blue-950 hover:bg-blue-900 hover:scale-[1.02] transition-all duration-300 ml-3"
                    onClick={() => {
                      setLoading(true);
                      initializePayment(onSuccess, onClose);
                      // makePaymentAPI(userID).then(() => {
                      //   setLoading(false);
                      // });
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full items-center">
                <MdPlaylistAddCheck size={30} />
                <p className="font-medium text-[13px]">
                  No Appointment Record yet:{" "}
                </p>
              </div>
            )}
          </div>

          <div className="flex-1" />
          <div className="border-b my-5" />

          <div className="flex flex-col items-center w-full justify-center">
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
