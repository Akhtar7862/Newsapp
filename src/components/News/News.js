import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./News.css";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const checkTitle = (string) => {
    if (string.length === 48) {
      return string;
    } else if (string.length > 48) {
      return `${string.substr(0, 44)}...`;
    } else {
      return string;
    }
  };

  const checkDescription = (string) => {
    if (string === null) {
      let space = " ";
      return `${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.${space}.`;
    } else if (string.length === 79) {
      return string;
    } else if (string.length > 79) {
      return `${string.substr(0, 76)}...`;
    } else {
      return string;
    }
  };

  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=22e038bbd5ee4d19a90b5a7389b8b38a&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=22e038bbd5ee4d19a90b5a7389b8b38a&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [location.pathname]);

  return (
    <div className="news">
      <h1>Newsapp- Top headlines on {capitalizeFirstLetter(props.category)}</h1>
      {/* {loading && <Loader/>} */}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults - 2}
        loader={<Loader />}
      >
        <div className="newsContainer">
          {articles.map((article) => {
            return (
              <div className="newsItem" key={article.url}>
                <div className="newsInner">
                  <img src={article.urlToImage} alt={article.title} />

                  <h5>{checkTitle(article.title)}</h5>
                  <p>{checkDescription(article.description)}</p>
                  <a href={article.url}>Read Full</a>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default News;
