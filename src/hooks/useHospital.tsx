import useSWR from "swr";
import { readAllHopitalAPI, readHopitalAPI } from "../api/hospitalAPI";

export const useAllHospital = () => {
  const { data } = useSWR(`/view-all-hospital/`, () => {
    return readAllHopitalAPI().then((res) => {
      return res.data;
    });
  });

  return { data };
};

export const useHospital = (hospitalID: string) => {
  const { data } = useSWR(`/view-all-hospital/${hospitalID}`, () => {
    return readHopitalAPI(hospitalID).then((res) => {
      return res.data;
    });
  });

  return { data };
};
