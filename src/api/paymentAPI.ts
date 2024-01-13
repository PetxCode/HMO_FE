// http://localhost:2233/api/view-user-payment/659d9bc698453f6c6922fb89

import axios from "axios";

const URL: string = "http://localhost:2233/api";
// const URL: string = "https://hmo-be-btuo.onrender.com/api";

export const viewUserPaymentAPI = async (userID: string) => {
  try {
    return await axios.get(`${URL}/view-user-payment/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const makePaymentAPI = async (userID: string) => {
  try {
    return await axios
      .post(`${URL}/create-user-payment/${userID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
