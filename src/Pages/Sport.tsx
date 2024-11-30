import "../App.css";
import { useContext, useEffect } from "react";
import { NewsContext } from "../context/NewsContextProvider";
import { updateClampClassMobileShort, updateClampClassTabletLong } from "../utilities/articleModifier";
import FirstNew from "../FirstNew";
import LiveNew from "../LiveNew";
import New from "../New";

function Sport() {
    const {allNews} = useContext(NewsContext);

    const filteredNews = allNews?.filter(
        (fetchedNew) => fetchedNew.topic === "Sport" && 
                       fetchedNew.title !== "[Removed]" && 
                       fetchedNew.content !== null && 
                       fetchedNew.content.length > 5
    );

  useEffect(() => {
    const handleResize = () => {
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <main className="main flex flex-wrap px-4 pt-20 md:pt-30 lg:pt-44">
     {filteredNews && filteredNews.length > 0 ? (
        <>
          {filteredNews.length > 0 && (
            <FirstNew
              urlToImage={filteredNews[0].urlToImage}
              title={filteredNews[0].title}
              content={filteredNews[0].content}
              publishedAt={filteredNews[0].publishedAt}
              topic={"Sport"}
              key={filteredNews[0].urlToImage}
            />
          )}

          {filteredNews.length > 1 && (
            <LiveNew
              urlToImage={filteredNews[1].urlToImage}
              title={filteredNews[1].title}
              content={filteredNews[1].content}
              publishedAt={filteredNews[1].publishedAt}
              topic={"Sport"}
              key={filteredNews[1].urlToImage}
            />
          )}

          {filteredNews.length > 3 && (
            <section className="main__older-articles main__older-articles-first-group flex flex-wrap">
              {filteredNews.slice(3, 7).map((fetchedNew) => (
                <New
                  urlToImage={fetchedNew.urlToImage}
                  title={fetchedNew.title}
                  content={fetchedNew.content}
                  publishedAt={fetchedNew.publishedAt}
                  topic={"Sport"}
                  key={fetchedNew.urlToImage}
                />
              ))}
            </section>
          )}

          <section className="main__older-articles main__older-articles-second-group flex flex-1 min-w-1/2 flex-wrap">
            {filteredNews.length > 1 &&
              filteredNews
                .slice(8)
                .map((fetchedNew) => (
                  <New
                    urlToImage={fetchedNew.urlToImage}
                    title={fetchedNew.title}
                    content={fetchedNew.content}
                    publishedAt={fetchedNew.publishedAt}
                    topic={"Sport"}
                    key={fetchedNew.urlToImage}
                  />
                ))}
          </section>
        </>
      ) : (
        <p className="main__no-sport-data">No sports news available.</p>
    )}
</main>
  );
}


export default Sport
