import useSWR from "swr";
import { viewUserPaymentAPI } from "../api/paymentAPI";

export const useUserPayment = (userID: string) => {
  const { data } = useSWR(
    `/view-user-paymnt/${userID}`,
    () => {
      return viewUserPaymentAPI(userID).then((res) => {
        return res.data;
      });
    },
    { refreshInterval: 5000 }
  );

  return { data };
};
