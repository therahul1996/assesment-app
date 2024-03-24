import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading";
const Article = () => {
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "2c9219f3e5574c148ef9d6d7d154b221";
  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const params = {};

      if (keyword) params.q = keyword;
      if (startDate) params.from = startDate;
      if (endDate) params.to = endDate;
      if (category) params.category = category;
      if (source) params.sources = source;

      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          ...params,
          apiKey: API_KEY,
        },
      });
      setIsLoading(false);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchArticles();
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className="container mx-auto py-5">
        <h1 className="text-[32px] font-semibold mb-3">Articles</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1s md:grid-cols-3 lg:grid-cols-6 gap-2 bg-[#ccc] p-2 rounded-md"
        >
          <input
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-input w-full p-2 placeholder-primary-gray border border-[#ccc] rounded-md resize-none border-c text-left"
          />
          <input
            type="date"
            placeholder="Start date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-input w-full p-2 placeholder-primary-gray border border-[#ccc] rounded-md resize-none border-c text-left"
          />
          <input
            type="date"
            placeholder="End date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-input w-full p-2 placeholder-primary-gray border border-[#ccc] rounded-md resize-none border-c text-left"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input w-full p-2 placeholder-primary-gray border border-[#ccc] rounded-md resize-none border-c text-left"
          >
            <option value="">Select category</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="politics">Politics</option>
          </select>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="form-input w-full p-2 placeholder-primary-gray border border-[#ccc] rounded-md resize-none border-c text-left"
          >
            <option value="">Select source</option>
            <option value="bbc-news">BBC News</option>
            <option value="cnn">CNN</option>
            <option value="the-new-york-times">The New York Times</option>
          </select>
          <button
            type="submit"
            className="border border-white rounded-md text-white text-xl bg-[#757575]"
          >
            Search
          </button>
        </form>

        <ul>
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <li
                key={index}
                className="bg-white mt-5 shadow-md mb-2 rounded p-3 border-b border-dashed border-[#ccc]"
              >
                <h3 className="text-4xl">{article.title}</h3>
                <p className="my-3 text-[16px]">Date: {article.publishedAt}</p>
                <p className="text-[#7a7373] text-[18px]">
                  Description: {article.description}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5656ee] underline"
                  >
                    Read more
                  </a>
                </p>
              </li>
            ))
          ) : (
            <p className="text-center p-4">No data found</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Article;
