import { FC } from "react";
import { useHospital } from "../../hooks/useHospital";

interface iProps {
  state?: string;
}

const HospitalNames: FC<iProps> = ({ state }) => {
  const { data } = useHospital(state!);

  return <div className="break-words text-[12px]">{data?.hospitalName}</div>;
};

export default HospitalNames;
