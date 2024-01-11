import { MdOfflineShare, MdSave } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import Button from "../../components/reUse/Button";
import { useUser, useUserID } from "../../hooks/useUserID";
import { useState } from "react";
import { useAllHospital } from "../../hooks/useHospital";
import HospitalDetails from "./HospitalDetails";

const HospitalChice = () => {
  const { data: hospital } = useAllHospital();
  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

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
              value={state === "" ? state : "yet to be updated"}
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
              value={state1 === "" ? state1 : "yet to be updated"}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setState1(e.target.value);
              }}
            >
              {hospital?.map((props: any, i: number) => (
                <option key={i} value={`${props.hospitalName}`}>
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

        {state1}

        <div>
          <Button
            name="save"
            icon={<MdSave />}
            className="bg-blue-950 text-white uppercase font-medium text-[12px],"
          />
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10 gap-3">
          {state && (
            <div className="border rounded-md flex gap-2 w-full p-2 overflow-hidden">
              <FaBuildingUser size={25} />
              <HospitalDetails state={state} choice="First Choice" />
            </div>
          )}

          {state1 && (
            <div className="border rounded-md flex gap-2 w-full p-2">
              <FaBuildingUser size={25} />
              <HospitalDetails state={state} />
            </div>
          )}

          {state2 && (
            <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3 ">
              <FaBuildingUser size={25} />
              <HospitalDetails state={state} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalChice;
