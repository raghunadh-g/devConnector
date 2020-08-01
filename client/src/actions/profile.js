// eslint-disable-next-line react-hooks/exhaustive-deps

import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";

//Get current users profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    //console.log(axios.defaults.headers.common["x-auth-token"]);
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
