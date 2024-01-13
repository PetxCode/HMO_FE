import useSWR from "swr";
import {
  readAllHopitalAPI,
  readHopitalAPI,
  viewAppointmentByAPI,
} from "../api/hospitalAPI";

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

export const useUserHospitalAppointment = (userID: string) => {
  const { data } = useSWR(
    `/view-all-hospital/${userID}`,
    () => {
      return viewAppointmentByAPI(userID).then((res) => {
        return res.data;
      });
    },
    { refreshInterval: 5000 }
  );

  return { data };
};
