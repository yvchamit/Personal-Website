import { useSelector } from "react-redux";

function Footer() {
  const { content } = useSelector((state) => state.theme);
  const footerData = content.footer;

  return (
    <footer className="bg-[#F9FAFB] dark:bg-slate-900 pt-18.75 pb-22.5 -mx-6 md:-mx-20 lg:-mx-37.5 px-6 md:px-20 lg:px-37.5">
      <h2 className="whitespace-pre-line text-[42px] leading-tight font-semibold mb-15 text-gray-800 dark:text-gray-600 text-center md:text-left">
        {footerData.title}
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="footer-email w-full md:w-auto flex justify-center md:justify-start">
          <a
            href={`mailto:${footerData.email}`}
            className="group flex items-center gap-2 underline-offset-8 decoration-transparent"
          >
            <img
              src={footerData.icon}
              alt={footerData.email}
              className="w-6.5 h-5 object-contain"
            />
            <span className="text-xl inline-block text-[#af0c48] font-semibold underline">
              {footerData.email}
            </span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-6.25 text-lg font-semibold">
          {footerData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={
                link.color === "#00AB6B"
                  ? "footer-link-green"
                  : link.color === "#0077B5"
                    ? "footer-link-blue"
                    : "footer-link-regular"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
