import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../store/actions/settingsActions";
import { showToast } from "../utils/toastUtils";

function Header() {

  const { language, content } = useSelector(state => state.theme);
  const headerData = content?.header;
  const toastData = content?.toast;
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleDarkMode = () => {
    const newMode = !darkMode;
    dispatch(setDarkMode(newMode));


    const message = newMode ? toastData?.darkModeOn : toastData?.darkModeOff;
    showToast(message);
  };

  
  const handleLanguage = () => {
    const newLanguage = (language === "tr" ? "en" : "tr");
    dispatch(setLanguage(newLanguage));
    const message = content?.toast?.langChanged;
    showToast(message);
  };

  return (
    <header>
      <div className="flex justify-end items-center gap-4 pt-8 pb-8">
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

        <div className="h-4.5 w-0.5 bg-gray-300 md:block"></div>

        <div
          onClick={handleLanguage}
          className="language-toggle cursor-pointer text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          <span className="text-indigo-700 dark:text-indigo-400">
            {headerData.languageToggle}
          </span>
          {headerData.languageText}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-8 md:gap-0">
        <div className="logo-container group cursor-pointer">
          <div className="w-15.5 h-15.5 rounded-full bg-[#eeebff] text-indigo-700 text-[24px] font-bold flex justify-center items-center transform rotate-40 transition-all duration-500 group-hover:rotate-360 group-hover:bg-indigo-700 group-hover:text-white">
            A
          </div>
        </div>
        <nav>
          <ul className="flex flex-row items-center gap-1 md:gap-4 list-none">
            {
            headerData?.links?.map((link, index) =>(
              <li key={index}>
              <a
                href={link.url}
                className={link.type === "button" ? "header-hire-button" : "header-reg-links"}
              >
                {link.label}
              </a>
            </li>
            ))
          }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
