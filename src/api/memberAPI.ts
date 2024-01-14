import axios from "axios";

// const URL: string = "https://hmo-be-btuo.onrender.com/api";
const URL: string = "http://localhost:2233/api";

export const addMember = async (data: {}, userID: string) => {
  return await axios.post(`${URL}/add-member/${userID}`, data);
};

export const viewMember = async (userID: string) => {
  return await axios.get(`${URL}/view-member/${userID}`).then((res: any) => {
    return res.data;
  });
};

export const viewMemberDetail = async (userID: string) => {
  return await axios
    .get(`${URL}/view-member-detail/${userID}`)
    .then((res: any) => {
      return res.data;
    });
};
