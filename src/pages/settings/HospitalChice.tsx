import { MdSave } from "react-icons/md";
import Button from "../../components/reUse/Button";
import { useUser, useUserID } from "../../hooks/useUserID";
import { useState } from "react";

const HospitalChice = () => {
  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

  const [state, setState] = useState<string>("");
  const [state1, setState1] = useState<string>("");
  const [state12, setState2] = useState<string>("");

  console.log(state);
  return (
    <div className=" grid col-span-3 pr-0 h-[100px] text-blue-950 ">
      {/* forms */}
      <div>
        <div className="flex w-[100%] justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Hospital's First Choice</div>
          </div>
        </div>

        <div
          className="absolute left:0 sm:left-0 top-40 h-[200px] w-[100%] sm:w-[50%]  bg-blue-500 py-4 z-10   "
          style={{
            background: "rgba(252, 254, 255, 0.25)",
            backdropFilter: " blur( 4px )",
          }}
        >
          <div className="z-20">
            <div className="flex w-full">
              {/* <Input className="flex-1 ml-1" /> */}
              <select
                className="flex-1 px-2 h-[50px]  border rounded-md m-2  relative transition-all outline-none duration-300 mb-6"
                value={state}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setState(e.target.value);
                }}
              >
                <option value="Peter">Peter</option>
                <option value="Bukky">Bukky</option>
                <option value="Kemi">Kemi</option>
              </select>
            </div>
            {state}
            <div>
              <Button
                name={`${state}`}
                icon={<MdSave />}
                className="bg-blue-950 text-white uppercase font-medium text-[12px],"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalChice;
