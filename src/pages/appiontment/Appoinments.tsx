import { useState } from "react";
import LittleHeader from "../../components/layout/LittleHeader";
import moment from "moment";
import { useUser, useUserID } from "../../hooks/useUserID";
import HospitalNames from "../settings/HospitalNames";
import HospitalDetails from "../settings/HospitalDetails";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Button from "../../components/reUse/Button";
import ClipLoader from "react-spinners/ClipLoader";
import { MdBook } from "react-icons/md";
import { createAppointmentByAPI } from "../../api/hospitalAPI";
import { useNavigate } from "react-router-dom";
import { FaBuildingUser, FaCheckDouble } from "react-icons/fa6";

const Appoinments = () => {
  const navigate = useNavigate();
  document.title = "Appoinments Screen";

  const { user: userID }: any = useUserID();
  const { user } = useUser(userID);

  const { user: data }: any = useUser(userID);

  const [state1, setState1] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const [stateName, setStateName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [startDateTime, setStartDateTime] = useState<any>();

  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>
      {/* ?start */}

      <div className="flex flex-col  min-h-[calc(85vh-72px)]">
        <div className="w-full gap-2 grid grid-cols-1 md:grid-cols-5  ">
          <div className="border rounded-md p-4 col-span-2 pb-12 h-[500px]">
            <p className="pb-5 text-[15px] font-medium border-b">
              Schedule Appointment
            </p>

            <div className="mt-5 text-[12px]">
              <p>Choose an Hospital</p>
              <div className="flex w-[98%]">
                <select
                  className="flex-1 px-2 h-[50px]  border rounded-md m-2 w-[93%] relative transition-all outline-none duration-300 mb-6"
                  value={state1}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setState1(e.target.value);
                  }}
                >
                  {user?.familyHospital?.map((props: any, i: number) => (
                    <option key={i} value={`${props}`}>
                      <HospitalNames state={props} />
                    </option>
                  ))}
                </select>
              </div>
              <p>Choose a convinent date</p>
              <div className=" mt-2 w-[94%] ml-2 border rounded-md outline-none h-12 flex items-center px-2">
                <DatePicker
                  placeholderText="add time here"
                  selected={startDateTime!}
                  onChange={(date: any) => {
                    setStartDateTime(date);
                  }}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="outline-none w-[120%] text-[14px] font-normal capitalize "
                />
              </div>
              <p className="mt-5 mb-2">Reason for Appointment</p>
              <div className=" mt-1 w-[100%] outline-none h-12 flex items-center pb-5">
                <textarea
                  className="border rounded-md w-[94%] min-h-[120px] ml-2 mt-[90px] resize-none p-2"
                  value={reason}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setReason(e.target.value);
                  }}
                />
              </div>

              <div className="mt-[85px] w-[97%]">
                {state1 && reason && startDateTime && (
                  <Button
                    name="Add Appointment"
                    className="w-[97%] mt-12 bg-blue-950 text-white h-14 hover:bg-blue-900 transition-all duration-300"
                    type="submit"
                    onClick={() => {
                      setLoading(true);
                      createAppointmentByAPI(userID, {
                        hospitalName: stateName,
                        reason,
                        appointmentDate: moment(startDateTime).format("LLLL"),
                      })
                        .then(() => {
                          setLoading(false);
                        })
                        .then(() => {
                          navigate("/history");
                        });
                    }}
                    icon={
                      loading ? (
                        <ClipLoader color="white" size={18} />
                      ) : (
                        <MdBook size={23} />
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <div className="border rounded-md p-4 col-span-3">
            <p className="pb-5 text-[15px] font-medium border-b">
              Display Appointment
            </p>

            <div className="">
              {state1 ? (
                <HospitalDetails
                  setStateName={setStateName}
                  stateName={stateName}
                  state={state1}
                  choice="Hospital choosen"
                />
              ) : (
                <div>No Choosen Hospital Data Yet</div>
              )}

              <div className="my-8" />
              {startDateTime ? (
                <div className="flex gap-8">
                  <p>
                    <span className="text-[13px] font-medium ">
                      Scheduled Date:
                    </span>{" "}
                    <div className="text-[13px] font-normal ">
                      {moment(startDateTime).format("LLLL").split(",")[0]}
                      {moment(startDateTime).format("LLLL").split(",")[1]}
                      <span className="ml-1">
                        {
                          moment(startDateTime)
                            .format("LLLL")
                            .split(",")[2]
                            .split(" ")[1]
                        }
                      </span>
                    </div>
                  </p>
                  <p>
                    <span className="text-[13px] font-medium ">
                      Scheduled Time:
                    </span>{" "}
                    <div className="text-[13px] font-normal ">
                      <span className="">
                        {
                          moment(startDateTime)
                            .format("LLLL")
                            .split(",")[2]
                            .split(" ")[2]
                        }
                      </span>
                      <span className="ml-1 mt-5">
                        {
                          moment(startDateTime)
                            .format("LLLL")
                            .split(",")[2]
                            .split(" ")[3]
                        }
                      </span>
                    </div>
                  </p>
                </div>
              ) : (
                <div>No Choosen Scheduled Data Yet</div>
              )}
            </div>
            <div className="my-8" />
            {startDateTime ? (
              <div className="flex gap-8">
                <p>
                  <span className="text-[13px] font-medium ">
                    Reason for Appointment:
                  </span>{" "}
                  <div className="text-[13px] font-normal ">{reason}</div>
                </p>
              </div>
            ) : (
              <div>No Reasonable Data Yet</div>
            )}
          </div>
        </div>

        <div className="flex-1" />

        <div className=" border bg-slate-50 mt-5 p-2 rounded-md ">
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
    </div>
  );
};

export default Appoinments;
