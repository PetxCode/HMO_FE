import { FC } from "react";
import { useOtherUser, useUser } from "../../hooks/useUserID";

export interface iProps {
  props: any;
}

const Personal: FC<iProps> = ({ props }) => {
  const { user: otherUser }: any = useUser(props);

  const myObject: any = {
    key1: otherUser?.email,
    key2: otherUser?.lastName,
    key3: otherUser?.firstName,
    key4: otherUser?.avatar,
    key5: otherUser?.phoneNumber,
  };

  let counter = 0;

  for (const key in myObject) {
    if (myObject[key]) {
      counter++;
    }
  }

  return (
    <div>
      {/* data bar */}
      <p className="mb-8">
        <span className="font-bold text-[12px] ">
          Profile: {Math.ceil(((7.1 * counter) / 100) * 280)}% completed
        </span>
        <div className="w-full h-[5px] relative">
          <div className="w-full h-full bg-neutral-200 rounded-md absolute top-0" />
          <div
            className={`h-full bg-green-500 rounded-md  absolute top-0`}
            style={{
              width: `${Math.ceil(((7.1 * counter) / 100) * 280)}%`,
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
