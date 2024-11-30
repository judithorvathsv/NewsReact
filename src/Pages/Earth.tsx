import "../App.css";
import { useContext, useEffect } from "react";
import { NewsContext } from "../context/NewsContextProvider";
import {
  updateClampClassMobileShort,
  updateClampClassTabletLong,
} from "../utilities/articleModifier";

import TopicNewsList from "../TopicNewsList";

function Earth() {
  const { allNews } = useContext(NewsContext);

  const filteredNews = allNews?.filter(
    (fetchedNew) =>
      fetchedNew.topic === "Earth" &&
      fetchedNew.title !== "[Removed]" &&
      fetchedNew.content !== null &&
      fetchedNew.content.length > 5
  );

  useEffect(() => {
    const handleResize = () => {
      updateClampClassMobileShort();
      updateClampClassTabletLong();
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TopicNewsList filteredNews={filteredNews} selectedTopic={"Earth"}></TopicNewsList>
  );
}
export default Earth
