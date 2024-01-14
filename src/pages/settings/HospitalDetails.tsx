import { FC, useEffect } from "react";
import { useHospital } from "../../hooks/useHospital";

interface iProps {
  state?: string;
  choice?: string;
  setStateName?: any;
  stateName?: string;
}

const HospitalDetails: FC<iProps> = ({
  setStateName,
  stateName,
  state,
  choice,
}) => {
  const { data } = useHospital(state!);
  stateName = data?.hospitalName;

  useEffect(() => {
    if (setStateName) {
      setStateName(data?.hospitalName);
    }
  }, [stateName]);

  return (
    <div className="break-words text-[12px]">
      <p className="flex items-center font-medium mb-2">
        <p className="mr-2">{choice}: </p>
        {data?.hospitalName}
      </p>
      <div className="border-b w-[100px]" />
      <p className="break-words mt-2">Reachout Email: {data?.email}</p>
      <p className="mb-2">contact location: {data?.location}</p>
    </div>
  );
};

export default HospitalDetails;
