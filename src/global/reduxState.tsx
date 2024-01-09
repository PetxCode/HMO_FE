import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
  toggleMenu: false,
  memberToggle: false,
  toggleText: false,
};

const reduxState = createSlice({
  name: "weCareHMO",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },
    logoutState: (state) => {
      state.user = null;
    },
    changeToggle: (state) => {
      state.toggle = !state.toggle;
    },
    changeToggleToFalse: (state) => {
      state.toggle = false;
    },
    changeToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
    changeToggleMenuToFalse: (state) => {
      state.toggleMenu = false;
    },
    changeMemberState: (state) => {
      state.memberToggle = !state.memberToggle;
    },
    changeToggleText: (state, { payload }) => {
      state.toggleText = payload;
    },
  },
});

export const {
  loginState,
  logoutState,
  changeToggle,
  changeToggleToFalse,
  changeToggleMenuToFalse,
  changeToggleMenu,
  changeMemberState,
  changeToggleText,
} = reduxState.actions;

export default reduxState.reducer;
