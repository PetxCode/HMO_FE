import useSWR from "swr";
import { readAllHopitalAPI } from "../api/hospitalAPI";

export const useAllHospital = (readID: string) => {
  const { data } = useSWR(`/read-user/${readID}`, () => {
    return readAllHopitalAPI().then((res) => {
      return res.data;
    });
  });

  return { data };
};
