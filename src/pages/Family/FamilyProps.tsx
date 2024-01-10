import { FC } from "react";
import pic from "../../assets/pix.jpg";
import PersonalInfo from "./PersonalInfo";

export interface iProps {
  props: any;
  user?: any;
}

const FamilyProps: FC<iProps> = ({ props, user }) => {
  return (
    <div
      key={props._id}
      className="border p-4 rounded-md w-[280px] min-h-[350px] relative m-2 mb-16"
    >
      {/* Info */}
      <PersonalInfo props={props} user={user} />

      {/* Appointment */}

      <div className="text-[12px] mt-5 flex justify-between">
        <div className="flex flex-col items-center">
          <p>No. of Appointments</p>
          <p className="text-[15px] font-bold">10</p>
        </div>
        <div className="flex flex-col items-center">
          <p>No. of Appointments</p>
          <p className="text-[15px] font-bold">10</p>
        </div>
      </div>

      {/* list of Family Hospital */}
      <div className="mt-6">
        <div className="flex flex-col text-[12px]">
          <p>Family Hospitals</p>
          <p className="text-[12px] font-bold ml-2">
            <p>
              *{" "}
              <span className="font-medium leading-none capitalize">
                Faleti Hostptal
              </span>
            </p>
          </p>
          <p className="text-[12px] font-bold ml-2">
            <p>
              *{" "}
              <span className="font-medium leading-none capitalize">
                Faleti Hostptal
              </span>
            </p>
          </p>
          <p className="text-[12px] font-bold ml-2">
            <p>
              *{" "}
              <span className="font-medium leading-none capitalize">
                All soul Dynamic Hostptal for Children and Mothers
              </span>
            </p>
          </p>
        </div>
      </div>

      <div className="mt-[50px]" />

      {/* Avatar */}
      <img
        src={pic}
        className="w-28 h-28 rounded-full border object-cover absolute -bottom-14 left-[30%]  mt-10"
      />
    </div>
  );
};

export default FamilyProps;
