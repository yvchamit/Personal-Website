export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_DATA = "SET_DATA";
import axios from 'axios';

export const setDarkMode = () => {
  return { type: SET_DARK_MODE };
};


export const setLanguage = (language) => {
  return { type: SET_LANGUAGE, payload: language };
};

export const setData = () => (dispatch) => {
  axios.get("./data.json")
    .then((res) => {
      dispatch({ type: SET_DATA, payload: res.data });
    })
    .catch((err) => {
      console.error("Veri yüklenirken hata oluştu:", err);
    });
};