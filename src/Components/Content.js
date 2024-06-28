import React, { useState, useEffect } from "react";
import Spinner from "./loading";

const Content = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=a4b086bc3fab4d4ab05dac505f24606f&pageSize=20&page=${page}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const parsedData = await response.json();
        console.log("API Response:", parsedData);
        setArticles(parsedData.articles || []);
        setTotalResults(parsedData.totalResults || 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, props.category]);

  const prevState = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextState = () => {
    if (page + 1 <= Math.ceil(totalResults / 20)) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-4">
      <div className="h1">
        <h1>Prime News - Top headlines</h1>
      </div>
      {loading && <Spinner />}
      <div className="article-list">
        {!loading && articles.length > 0
          ? articles.map((element) => (
              <div
                className="card my-4"
                style={{ width: "18rem" }}
                key={element.url}
              >
                <img
                  src={
                    element.urlToImage ||
                    "https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg"
                  }
                  className="card-img-top"
                  alt="article"
                />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ zIndex: "1" }}
                >
                  {element.source.name}
                  <span className="visually-hidden">unread messages</span>
                </span>
                <div className="card-body">
                  <h5 className="card-title">
                    {element.title ? element.title.slice(0, 106) : ""}...
                  </h5>
                  <p className="card-text">
                    {element.description
                      ? element.description.slice(0, 105)
                      : "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"}
                    ...
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      By {element.author || "Unknown"} on{" "}
                      {new Date(element.publishedAt).toGMTString()}
                    </small>
                  </p>
                  <a href={element.url || "#"} className="btn btn-dark btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            ))
          : !loading && <p>No articles found</p>}
      </div>
      <div className="d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={prevState}
        >
          &larr; Prev
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 20)}
          type="button"
          className="btn btn-dark"
          onClick={nextState}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Content;
