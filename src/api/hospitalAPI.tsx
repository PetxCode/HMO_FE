import axios from "axios";

const URL: string = "http://localhost:2233";
export const readAllHopitalAPI = async () => {
  try {
    return await axios.get(`${URL}/view-all-hospital`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
