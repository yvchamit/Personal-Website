import { useSelector } from "react-redux";

function Skills() {
  const { content } = useSelector((state) => state.theme);
  const skillsData = content?.skills;

  return (
    <section id="skills" className="pt-35">
      <h2>{skillsData.title}</h2>
      <div className="flex flex-wrap justify-between gap-x-5 md:gap-x-11.25 lg:gap-x-37.5 gap-y-4 md:gap-y-6 pb-10 border-b border-[#bab2e7]">
        {skillsData.list.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-62.5 basis-full md:basis-[20%]"
          >
            <h3>{item.name}</h3>
            <p className="paragraph-12">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;