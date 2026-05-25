import { useSelector } from "react-redux";
import ContactInfo from "./ContactInfo";
ContactInfo;

function Profile() {
  const { content } = useSelector((state) => state.theme);
  const profileData = content.profile;

  return (
    <section id="profile" className="pt-10">
      <h2>{profileData.title}</h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-25 border-b border-[#bab2e7] pb-10">
        <div className="flex-1 min-w-75">
          <h3>{profileData?.basicInfo.title}</h3>
          <ContactInfo />
        </div>

        <div className="flex-1 lg:flex-[1.5]">
          <h3>{profileData.about.title}</h3>

          <div className="space-y-6">
            {profileData.about.paragraphs.map((p, paraIndex) => (
              <p key={paraIndex} className="text-[18px] leading-normal text-gray-500 max-w-[85%] lg:max-w-full pr-12">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
