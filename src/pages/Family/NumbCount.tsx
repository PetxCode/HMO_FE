import { FC } from "react";
import { iProps } from "./familyProps";
import { useOtherUser } from "../../hooks/useUserID";

import pic from "../../assets/pix.jpg";

interface iNewProps extends iProps {
  count?: boolean;
  image?: boolean;
}

const NumbCount: FC<iNewProps> = ({ props, count, image }) => {
  const { otherUser }: any = useOtherUser(props?._id);
  return (
    <div>
      {count && <div>{otherUser?.appointments.length}</div>}
      {image && (
        <img
          src={otherUser?.avatar ? otherUser?.avatra : pic}
          className="w-28 h-28 rounded-full border object-cover absolute -bottom-14 left-[30%]  mt-10"
        />
      )}
    </div>
  );
};

export default NumbCount;
