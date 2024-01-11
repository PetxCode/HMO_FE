import axios from "axios";

const URL: string = "http://localhost:2233/api";

export const registerAPI = async (email: any) => {
  try {
    return await axios
      .post(`${URL}/register-user`, { email })
      // .post(`http://localhost:2233/api/register-user`, { email })
      .then((res) => {
        return res;
      });
  } catch (error) {
    return error;
  }
};

export const loginAPI = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/sign-in-user`, data, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const verifyAPI = async (userID: string) => {
  try {
    return await axios.get(`${URL}/verify-user/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const logoutAPI = async () => {
  try {
    return await axios
      .delete(`${URL}/logout`, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const userCookieAPI = async () => {
  try {
    return await axios
      .get(`${URL}/reading-user-cookie`, { withCredentials: true })
      .then((res) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getUserAPI = async (userID: string) => {
  try {
    return await axios
      .get(`${URL}/read-user/${userID}`, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const hospitalChoiceAPI = async (data: any, userID: string) => {
  try {
    return await axios
      .patch(`${URL}/choose-hospital/${userID}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
