import { useSelector } from "react-redux";

function ProjectCard() {
  const { content } = useSelector((state) => state.theme);
  const cardData = content?.projects.list;

  return (
    <>
      {cardData.map((item, cardIndex) => (
        <article
          key={cardIndex}
          className="flex-1 min-w-75 basis-full md:basis-[calc(50%-40px)] lg:basis-[calc(33.333%-67px)]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full mb-6.25 shadow-sm aspect-video object-cover"
          />
          <h3>{item.title}</h3>
          <p className="paragraph-14">{item.description}</p>
          <div className="flex flex-wrap gap-2.5 my-5">
            {item.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tools">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-5 text-[16px] font-semibold">
            <a href="#" className="project-links">
              {item.github}
            </a>
            <a href="#" className="project-links">
              {item.viewSite}
            </a>
          </div>
        </article>
      ))}
    </>
  );
}

export default ProjectCard;
