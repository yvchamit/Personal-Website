import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../utils/toastUtils";
import { setLanguage } from "../../store/actions/settingsActions";

function LanguageSwitch() {
  const { language, content } = useSelector((state) => state.theme);
  const headerData = content?.header;
  const dispatch = useDispatch();

  const handleLanguage = () => {
    const newLanguage = language === "tr" ? "en" : "tr";
    dispatch(setLanguage(newLanguage));
    const message = content?.toast?.langChanged;
    showToast(message);
  };

  if (!headerData) return null;

  return (
    <div
      onClick={handleLanguage}
      className="language-toggle cursor-pointer text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
    >
      <span className="text-indigo-700 dark:text-indigo-400">
        {headerData.languageToggle}
      </span>
      {headerData.languageText}
    </div>
  );
}

export default LanguageSwitch;
