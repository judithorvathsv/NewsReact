import { INewProps } from "./News";
import { countTimeAgo } from "./utilities/countTimeAgo";
import { toggleFullscreen } from './utilities/articleModifier';

const New = ({ urlToImage, title, content, publishedAt, topic }: INewProps) => {
  const formattedTimeAgo = countTimeAgo(publishedAt);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const articleElement = event.currentTarget as HTMLElement;
    toggleFullscreen(articleElement);
  };


  return (
    <article onClick={handleClick} className="main__article  sm:flex sm:flex-row flex   w-full sm:w-1/2 md:w-1/2 lg:w-full xl:w-full border-b border-gray-300 md:border-b-0 lg:border-b md:pr-4">
      <img
        className="main__article-image w-1/2 h-full  md:hidden"
        src={urlToImage}
        alt="article image"
      />
      <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/2 lg:w-full lg:h-1/2 xl:w-full">
        <h2 className="main__article-title">{title}</h2>
        <p className="main__article-text main__article-text-tablet-long">
          {content}{content}{content}{content}{content}{content}{content}{content}{content}
        </p>
        <div className="main__time-and-topic-container hidden md:flex">
          <p>{formattedTimeAgo} ago</p> |<p>{topic}</p>
        </div>
      </section>
    </article>
  );
};

export default New;
