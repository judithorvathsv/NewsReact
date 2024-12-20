import "./App.css";
import {  useContext, useEffect, useState, useCallback, useMemo   } from "react";

import {
  updateClampClassMobileShort,
  updateClampClassTabletLong,
} from "./utilities/articleModifier";
import { fetchArticles } from "./utilities/articleFetch";

import New from "./New";
import FirstNew from "./FirstNew";
import LiveNew from "./LiveNew";
import { NewsContext } from "./context/NewsContextProvider";
// import { INewProps } from './News';

export interface INewProps {
  urlToImage: string;
  title: string;
  content: string;
  publishedAt: string;
  topic: string;
}

export interface INewsProps {
  new: INewProps;
}

function News() {
  const [news, setNews] = useState<INewProps[]>();
  const { setAllNews, selectedText } = useContext(NewsContext); 

  const topics = useMemo(() => [
    "Home", "News", "Sport", "Business", "Innovation",
    "Culture", "Arts", "Travel", "Earth",
  ], []); 

  const getRandomTopic = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
  }, [topics]);


  useEffect(() => {
    async function getAllNews() {
      const fetchedNews = await fetchArticles();       

      const articlesWithRandomTopics = fetchedNews.articles.map((article: INewProps) => ({
        ...article,
        topic: getRandomTopic(),
      }));

      setNews(articlesWithRandomTopics);
      setAllNews(articlesWithRandomTopics);
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    }

    getAllNews().then((fetchedNew) => fetchedNew);

    const handleResize = () => {
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setNews, setAllNews, getRandomTopic, selectedText]);

  // const filteredNews = news?.filter(
  //   (fetchedNew) =>
  //     fetchedNew.title !== "[Removed]" && fetchedNew.content !==null && fetchedNew.content.length > 5
  // );

  const filteredNews = useMemo(() => {
    return news?.filter(
      (fetchedNew) =>
        fetchedNew.title !== "[Removed]" &&
        fetchedNew.content !== null &&
        fetchedNew.content.length > 5 &&
        (selectedText === "" || fetchedNew.title.toLowerCase().includes(selectedText.toLowerCase()))
    );
  }, [news, selectedText]);



  return (
    <main className="main flex flex-wrap px-4 pt-20 md:pt-30 lg:pt-44">
      {filteredNews !== undefined && filteredNews.length > 0 && (
        <>
          {filteredNews.length > 0 && (
            <FirstNew
              urlToImage={filteredNews[0].urlToImage}
              title={filteredNews[0].title}
              content={filteredNews[0].content}
              publishedAt={filteredNews[0].publishedAt}
              topic={getRandomTopic()}
              key={filteredNews[0].urlToImage}
            />
          )}

          {filteredNews.length > 1 && (
            <LiveNew
              urlToImage={filteredNews[1].urlToImage}
              title={filteredNews[1].title}
              content={filteredNews[1].content}
              publishedAt={filteredNews[1].publishedAt}
              topic={getRandomTopic()}
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
                  topic={getRandomTopic()}
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
                    topic={getRandomTopic()}
                    key={fetchedNew.urlToImage}
                  />
                ))}
          </section>
        </>
      )}
    </main>
  );
}

export default News;
