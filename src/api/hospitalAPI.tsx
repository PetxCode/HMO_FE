import axios from "axios";

const URL: string = "https://hmo-be-btuo.onrender.com/api";
export const readAllHopitalAPI = async () => {
  try {
    return await axios.get(`${URL}/view-all-hospital`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const readHopitalAPI = async (hospitalID: string) => {
  try {
    return await axios.get(`${URL}/view-hospital/${hospitalID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const createUserHospitalsAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/choose-hospital/${userID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
