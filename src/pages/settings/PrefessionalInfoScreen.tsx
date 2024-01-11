import { useState } from "react";
import { useUser, useUserID } from "../../hooks/useUserID";
import Button from "../../components/reUse/Button";
import { MdSave } from "react-icons/md";
import Input from "../../components/reUse/Input";

const ProfressionInfoScreen = () => {
  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);

  const onToggle = () => {
    if (!document.startViewTransition) {
      setToggle(!toggle);
      setToggle1(false);
      setToggle2(false);
      setToggle3(false);
    } else {
      document.startViewTransition(() => {
        setToggle(!toggle);
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
      });
    }
  };

  const onToggle1 = () => {
    if (!document.startViewTransition) {
      setToggle1(!toggle1);
      setToggle(false);
      setToggle2(false);
      setToggle3(false);
    } else {
      document.startViewTransition(() => {
        setToggle1(!toggle1);
        setToggle(false);
        setToggle2(false);
        setToggle3(false);
      });
    }
  };

  const onToggle2 = () => {
    if (!document.startViewTransition) {
      setToggle2(!toggle2);
      setToggle(false);
      setToggle1(false);
      setToggle3(false);
    } else {
      document.startViewTransition(() => {
        setToggle2(!toggle2);
        setToggle(false);
        setToggle1(false);
        setToggle3(false);
      });
    }
  };

  const onToggle3 = () => {
    if (!document.startViewTransition) {
      setToggle3(!toggle3);
      setToggle2(false);
      setToggle1(false);
      setToggle(false);
    } else {
      document.startViewTransition(() => {
        setToggle3(!toggle3);
        setToggle2(false);
        setToggle1(false);
        setToggle(false);
      });
    }
  };

  return (
    <div className=" grid col-span-3 pr-0 h-[100px] ">
      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Phone Number</div>
            <div className="font-[400]">
              {data?.profession ? data.profession : "no Phone Number added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle2}
          >
            Change
          </div>
        </div>
        {toggle2 && (
          <div
            className="absolute left:0 sm:left-0 top-[11.2rem] h-[220px] w-[100%] sm:w-[50%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <Input
                  className="flex-1 ml-1"
                  placeholder="Enter contact address "
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <Button
                  name="Save"
                  icon={<MdSave />}
                  onClick={onToggle2}
                  className="bg-blue-950 text-white uppercase font-medium ,"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Home Address</div>
            <div className="font-[400]">
              {data?.address ? data.address : "no home address yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle}
          >
            Change
          </div>
        </div>
        {toggle && (
          <div
            className="absolute left:0 sm:left-0 top-[17.4rem] h-[220px] w-[100%] sm:w-[50%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <Input
                  className="flex-1 ml-1"
                  placeholder="Enter contact address "
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <Button
                  name="Save"
                  icon={<MdSave />}
                  onClick={onToggle}
                  className="bg-blue-950 text-white uppercase font-medium ,"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Frequently spoken language</div>
            <div className="font-[400]">
              {data?.language ? data.language : "no language added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle1}
          >
            Change
          </div>
        </div>
        {toggle1 && (
          <div
            className="absolute left:0 sm:left-0 top-[23.9rem] h-[200px] w-[100%] sm:w-[50%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <Input
                  className="flex-1 ml-1"
                  placeholder="eg: Pidgin, English, Yoruba"
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <Button
                  name="Save"
                  icon={<MdSave />}
                  onClick={onToggle1}
                  className="bg-blue-950 text-white uppercase font-medium ,"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Biography</div>
            <div className="font-[400]">
              {data?.bio ? data.bio : "no biography added yet"}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle3}
          >
            Change
          </div>
        </div>
        {toggle3 && (
          <div
            className="absolute left:0 sm:left-0 top-[30.5rem] h-[200px] w-[90%] sm:w-[50%]  bg-fuchsia-500 py-4 z-10 "
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <Input
                  className="h-[200px] rounded-md w-full pt-6 "
                  placeholder="Enter your biography"
                />
              </div>
              <div className="w-[200px] mt-3 ">
                <Button
                  name="Save"
                  icon={<MdSave />}
                  onClick={onToggle3}
                  className="bg-blue-950 text-white uppercase font-medium ,"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div>{/* <GlobalTextArea className="h-[200px] rounded-md" /> */}</div>
    </div>
  );
};

export default ProfressionInfoScreen;
