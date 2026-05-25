import LightSwitch from "./LightSwitch";
import LanguageSwitch from "./LanguageSwitch";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function Header() {
  const name = useSelector((state) => state.theme.content?.hero?.name);
  const logo = name.charAt(0).toUpperCase();

  return (
    <header>
      <div className="flex justify-end items-center gap-4 pt-8 pb-8">
        <LightSwitch />
        <div className="h-4.5 w-0.5 bg-gray-300 md:block"></div>
        <LanguageSwitch />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-8 md:gap-0">
        <div className="logo-container group cursor-pointer">
          <div className="header-logo">{logo}</div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
