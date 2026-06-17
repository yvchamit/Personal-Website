import {
  SET_DARK_MODE,
  SET_LANGUAGE,
  SET_DATA,
} from "../actions/settingsActions";

const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true",
  language: localStorage.getItem("language") || "tr",
  allData: null,
  content: null,
  loading: true,
};

export function themeReducer(state = initialState, action) {
  const setMode = !state.darkMode;
  const setLanguage = action.payload;
  switch (action.type) {

    case SET_DARK_MODE:
      localStorage.setItem("darkMode", setMode);
      return {
        ...state,
        darkMode: setMode,
      };

    case SET_DATA:
      return {
        ...state,
        allData: action.payload,
        content: action.payload[state.language],
        loading: false,
      };

    case SET_LANGUAGE:
      localStorage.setItem("language", setLanguage);
      return {
        ...state,
        language: setLanguage,
        content: state.allData ? state.allData[setLanguage] : null,
      };

    default:
      return state;
  }
}
