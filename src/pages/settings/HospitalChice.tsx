import { MdSave } from "react-icons/md";
import { FaBuildingUser, FaCheckDouble } from "react-icons/fa6";
import Button from "../../components/reUse/Button";
import { useUserID } from "../../hooks/useUserID";
import { useState } from "react";
import { useAllHospital } from "../../hooks/useHospital";
import HospitalDetails from "./HospitalDetails";
import { createUserHospitalsAPI } from "../../api/hospitalAPI";

const HospitalChice = () => {
  const { data: hospital } = useAllHospital();
  const { user: userID }: any = useUserID();

  const [state, setState] = useState<string>("");
  const [state1, setState1] = useState<string>("");
  const [state2, setState2] = useState<string>("");

  console.log(hospital);
  return (
    <div className=" grid col-span-3 pr-0 h-[100px] text-blue-950 ">
      {/* forms */}
      <div>
        <div>
          <div className="flex w-[100%] justify-between  font-medium ">
            Hospital's First Choice
          </div>

          <div className="flex w-full">
            <select
              className="flex-1 px-2 h-[50px]  border rounded-md m-2  relative transition-all outline-none duration-300 mb-6"
              value={state}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setState(e.target.value);
              }}
            >
              {hospital?.map((props: any, i: number) => (
                <option key={i} value={`${props._id}`}>
                  {props.hospitalName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="flex w-[100%] justify-between font-medium  ">
            Hospital's Second Choice
          </div>

          <div className="flex w-full">
            <select
              className="flex-1 px-2 h-[50px]  border rounded-md m-2  relative transition-all outline-none duration-300 mb-6"
              value={state1}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setState1(e.target.value);
              }}
            >
              {hospital?.map((props: any, i: number) => (
                <option key={i} value={`${props._id}`}>
                  {props.hospitalName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="flex w-[100%] justify-between font-medium  ">
            Hospital's Third Choice
          </div>

          <div className="flex w-full">
            <select
              className="flex-1 px-2 h-[50px]  border rounded-md m-2  relative transition-all outline-none duration-300 mb-6"
              value={state2}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setState2(e.target.value);
              }}
            >
              {hospital?.map((props: any, i: number) => (
                <option key={i} value={`${props._id}`}>
                  {props.hospitalName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Button
            name="save"
            icon={<MdSave />}
            className="bg-blue-950 text-white uppercase font-medium text-[12px],
            "
            onClick={() => {
              createUserHospitalsAPI(userID, {
                choice1: state,
                choice2: state1,
                choice3: state2,
              }).then(() => {
                console.log("done");
              });
            }}
          />
        </div>

        <div className=" border bg-slate-50 mt-10 p-2 ">
          {state || state1 || state2 ? (
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
              {state && (
                <div className="border rounded-md flex gap-2 w-full p-2 overflow-hidden">
                  <FaBuildingUser size={25} />
                  <HospitalDetails state={state} choice="First Choice" />
                </div>
              )}

              {state1 && (
                <div className="border rounded-md flex gap-2 w-full p-2">
                  <FaBuildingUser size={25} />
                  <HospitalDetails state={state1} choice="Second Choice" />
                </div>
              )}

              {state2 && (
                <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3 ">
                  <FaBuildingUser size={25} />
                  <HospitalDetails state={state2} choice="Third Choice" />
                </div>
              )}
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

export default HospitalChice;
