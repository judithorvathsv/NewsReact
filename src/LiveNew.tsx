import { INewProps } from "./News";
import { toggleFullscreen } from './utilities/articleModifier';

const LiveNew = ({ urlToImage, title, content }: INewProps) => {

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const articleElement = event.currentTarget as HTMLElement;
    toggleFullscreen(articleElement);
  };


  return (
    <article onClick={handleClick} className="main__article w-full md:w-2/3 lg:w-2/4 xl:w-2/4 flex flex-row md:flex-col border-b border-gray-300 border-b md:border-0">
      <img
        className="main__article-image w-1/2 md:w-full h-full md:h-2/3"
        src={urlToImage}
        alt="article image"
      />
      <section className="main__article-text-container w-1/2 md:w-full h-full md:h-1/3">
        <div className="main__live-text-with-article-text">
          <p className="main__live-text">LIVE</p>
          <h2 className="main__article-title">{title}</h2>
        </div>
        <p className="main__article-text clamp-2">{content}{content}{content}{content}{content}{content}{content}{content}{content}</p>
      </section>
    </article>
  );
};

export default LiveNew;
