import React from "react";

function Profile() {
  return (
    <section id="profile" className="pt-8.75">
      <h2>
        Profile
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-25 border-b border-[#bab2e7] pb-8.75">
        <div className="flex-1 min-w-75">
          <h3>
            Profile
          </h3>

          <div className="flex flex-col gap-3">
            <div className="flex gap-5 items-start">
              <span className="profile-span-label">
                Doğum Tarihi
              </span>
              <span className="profile-span-value">24.03.1996</span>
            </div>

            <div className="flex gap-5 items-start">
              <span className="profile-span-label">
                İkamet Şehri
              </span>
              <span className="profile-span-value">Ankara</span>
            </div>

            <div className="flex gap-5 items-start">
              <span className="profile-span-label">
                Eğitim Durumu
              </span>
              <span className="profile-span-value">
                Hacettepe Ünv. Biyoloji, Lisans, 2016
              </span>
            </div>

            <div className="flex gap-5 items-start">
              <span className="profile-span-label">
                Tercih Ettiği Rol
              </span>
              <span className="profile-span-value">Frontend, UI</span>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:flex-[1.5]">
          <h3>
            About Me
          </h3>

          <div className="space-y-6">
            <p className="text-[18px] leading-normal text-gray-500 max-w-[85%] lg:max-w-full pr-12">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="text-[18px] leading-normal text-gray-500 max-w-[85%] lg:max-w-full pr-12">
              Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
