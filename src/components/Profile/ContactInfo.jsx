import { useSelector } from "react-redux";

function ContactInfo() {
  const { content } = useSelector((state) => state.theme);
  const contactData = content.profile.basicInfo;

  return (
    <>
      <div className="flex-1 min-w-75">
        <div className="flex flex-col gap-3">
          {contactData?.items?.map((item, index) => (
            <div key={index} className="flex gap-5 items-start text-lg">
              <span className="profile-span-label">{item.label}</span>
              <span className="profile-span-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
