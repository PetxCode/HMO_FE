import axios from "axios";

const URL: string = "http://localhost:2233/api";
// const URL: string = "https://hmo-be-btuo.onrender.com/api";
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
      .post(`${URL}/choose-hospital/${userID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const createAppointmentByAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .post(`${URL}/create-appointment-user/${userID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewAppointmentByAPI = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/view-user-appointment/${userID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
