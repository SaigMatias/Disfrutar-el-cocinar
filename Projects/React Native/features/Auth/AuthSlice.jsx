import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  idToken: "",
  localId: "",
  imageCam: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => (state = actions.payload),
    clearUser: (state) => (state = { email: "", idToken: "" }),
    setImageCam: (state, actions) => {
      state.value = {...state.value, imageCam: actions.payload}
    }
  },
});

export const { setUser, clearUser, setImageCam } = authSlice.actions;

export default authSlice.reducer;
