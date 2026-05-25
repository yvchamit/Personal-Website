import { useSelector } from "react-redux";

function Navbar() {
  const { content } = useSelector((state) => state.theme);
  const headerData = content?.header;

  if (!headerData) return null;
  return (
    <>
      <nav>
        <ul className="flex flex-row items-center gap-1 md:gap-4 list-none">
          {headerData?.links?.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className={
                  link.type === "button"
                    ? "header-hire-button"
                    : "header-reg-links"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
