import { useState } from "react";
import LittleHeader from "../../components/layout/LittleHeader";
import moment from "moment";
import { useUser, useUserID } from "../../hooks/useUserID";
import HospitalNames from "../settings/HospitalNames";
import HospitalDetails from "../settings/HospitalDetails";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const Appoinments = () => {
  document.title = "Appoinments Screen";

  const { user: userID }: any = useUserID();
  const { user } = useUser(userID);

  const [state1, setState1] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const [startDateTime, setStartDateTime] = useState<any>();

  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>

      {/* ?start */}

      <div className="w-full gap-2 grid grid-cols-5 ">
        <div className="border rounded-md p-4 col-span-2 pb-12 h-[500px]">
          <p className="pb-5 text-[13px] font-medium  border-b">
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
          </div>
        </div>

        <div className="border rounded-md p-4 col-span-3">
          <p className="pb-5 text-[13px] font-medium border-b">
            Display Appointment
          </p>

          <div>
            {state1 ? (
              <HospitalDetails state={state1} choice="Hospital choosen" />
            ) : (
              <div>No Data Yet</div>
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
              <div>No Data Yet</div>
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
            <div>No Data Yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appoinments;
