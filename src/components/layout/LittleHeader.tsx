import React, { FC } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";

interface iProps {
  name?: string;
}

const LittleHeader: FC<iProps> = ({ name }) => {
  return (
    <div>
      {" "}
      <div className="flex items-center text-blue-950">
        Account <LiaGreaterThanSolid size={13} className="mx-4 " />{" "}
        <div className="capitalize">{name}</div>
      </div>
      <div className="text-blue-800 mt-5 font-[500] text-[30px] mb-10 capitalize">
        {name}
      </div>
    </div>
  );
};

export default LittleHeader;
