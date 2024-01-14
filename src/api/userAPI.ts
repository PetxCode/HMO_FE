import axios from "axios";

// const URL: string = "https://hmo-be-btuo.onrender.com/api";
const URL: string = "http://localhost:2233/api";
export const homeGETAPI = async () => {
  try {
    return await axios.get(`https://hmo-be-btuo.onrender.com/`).then((res) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};

export const registerAPI = async (email: any) => {
  try {
    return await axios.post(`${URL}/register-user`, email).then((res) => {
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

export const getUserNameAPI = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/update-user-name/${userID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const getUserPhoneAPI = async (userID: string, data: any) => {
  try {
    console.log("got it: ", data);
    return await axios
      .patch(`${URL}/update-user-phone/${userID}`, { phoneNumber: data })
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

export const updateUserAvatraAPI = async (userID: string, data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .patch(`${URL}/update-avatar/${userID}`, data, config)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
