import { useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { useDispatch } from "react-redux";
import { changeMemberState, changeToggleText } from "../../global/reduxState";

const AddMember = () => {
  const dispatch = useDispatch();
  const [memberName, setMemberName] = useState<string>("");
  const [relate, setRelate] = useState<string>("");

  const onHandleClick = () => {
    if (!document.startViewTransition) {
      dispatch(changeMemberState());
    } else {
      document.startViewTransition(() => {
        dispatch(changeMemberState());
      });
    }
  };

  const onHandleSubmission = (e: any) => {
    // e.perventDefault();

    if (memberName !== "") {
      if (
        relate.toLowerCase() === "wife" ||
        relate.toLowerCase() === "husband" ||
        relate.toLowerCase() === "child"
      ) {
        console.log(relate, memberName);

        if (!document.startViewTransition) {
          dispatch(changeToggleText(true));
        } else {
          document.startViewTransition(() => {
            dispatch(changeToggleText(true));
          });
        }

        onHandleClick();
      }
    }
  };
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4">
        <Input
          placeholder="Family Member Name"
          className="w-[97%]"
          type="text"
          required
          value={memberName}
          onChange={(e: any) => {
            setMemberName(e.target.value);
          }}
        />
        <Input
          placeholder="Related by? eg. Child or Wife or Husband"
          className="w-[97%]"
          //   show
          //   errorText="Password has to be passed"
          errorText={relate && "Member has to be either Child, Husband or Wife"}
          required
          value={relate}
          onChange={(e: any) => {
            setRelate(e.target.value);
          }}
        />

        <div>
          <Button
            name="Add Member"
            className="w-[97%] mt-12 bg-blue-500 text-white h-14 hover:bg-blue-600 transition-all duration-300"
            type="submit"
            onClick={onHandleSubmission}
          />
        </div>
        <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
          You are about to add a Member to your Family Cost
        </div>
      </div>
    </div>
  );
};

export default AddMember;
