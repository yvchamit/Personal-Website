import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../utils/toastUtils";
import { setDarkMode } from "../../store/actions/settingsActions";

function LightSwitch() {
  const content = useSelector((state) => state.theme.content);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const headerData = content?.header;
  const toastData = content?.toast;
  const dispatch = useDispatch();

  const handleDarkMode = () => {
    const newMode = !darkMode;
    dispatch(setDarkMode(newMode));

    const message = newMode ? toastData?.darkModeOn : toastData?.darkModeOff;
    showToast(message);
  };

  if (!headerData) return null;

  return (
    <div className="flex items-center gap-3 group">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={Boolean(darkMode)}
          onChange={handleDarkMode}
        />

        <div className="w-13.75 h-6.25 rounded-full transition-all bg-indigo-700 peer-checked:bg-gray-500 after:content-[''] after:absolute after:top-0.75 after:left-0.75 after:bg-[#FFE86E] after:rounded-full after:h-4.75 after:w-4.75 after:transition-all peer-checked:after:translate-x-7.25"></div>
      </label>
      <span className="text-gray-500 dark:text-gray-400 font-bold text-sm tracking-widest group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
        {darkMode ? headerData.lightMode : headerData.darkMode}
      </span>
    </div>
  );
}

export default LightSwitch;
