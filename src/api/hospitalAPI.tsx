import axios from "axios";

const URL: string = "http://localhost:2233/api";
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
