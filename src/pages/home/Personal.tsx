import { FC } from "react";
import { useOtherUser, useUser } from "../../hooks/useUserID";

export interface iProps {
  props: any;
}

const Personal: FC<iProps> = ({ props }) => {
  const { user: otherUser }: any = useUser(props);

  let count: number = 0;

  if (otherUser?.firstName) {
    count++;
  } else if (otherUser?.lastName) {
    count++;
  } else if (otherUser?.avatar) {
    count++;
  } else if (otherUser?.phoneNumber) {
    count++;
  } else if (otherUser?.email) {
    count++;
  }

  return (
    <div>
      {/* data bar */}
      <p className="mb-8">
        <span className="font-bold text-[12px] ">
          Profile: {((7.1 * count) / 100) * 280}% completed
        </span>
        <div className="w-full h-[5px] relative">
          <div className="w-full h-full bg-neutral-200 rounded-md absolute top-0" />
          <div
            className={`h-full bg-green-500 rounded-md  absolute top-0`}
            style={{
              width: `${53.0 * count}px`,
            }}
          />
        </div>
      </p>

      <div className="text-[13px]">
        <p className="font-normal mb-1">
          First Name:{" "}
          <span className="font-medium ">
            {otherUser?.firstName ? (
              otherUser?.firstName
            ) : (
              <span className="text-[gray] capitalize text-[12px]">
                yet to fill
              </span>
            )}
          </span>
        </p>

        <p className="font-normal mb-1">
          Family Name:{" "}
          <span className="font-medium ">
            {otherUser?.lastName ? (
              otherUser?.lastName
            ) : (
              <span className="text-[gray] capitalize text-[12px]">
                yet to fill
              </span>
            )}
          </span>
        </p>

        <p className="font-normal mb-1">
          Phone Number:{" "}
          <span className="font-medium ">
            {otherUser?.phoneNumber ? (
              otherUser?.phoneNumber
            ) : (
              <span className="text-[gray] capitalize text-[12px]">
                yet to fill
              </span>
            )}
          </span>
        </p>

        <p className="font-normal mb-1">
          Contact Email:{" "}
          <span className="font-medium ">
            {otherUser?.email ? (
              otherUser?.email
            ) : (
              <span className="text-[gray] capitalize text-[12px]">
                yet to fill
              </span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Personal;
