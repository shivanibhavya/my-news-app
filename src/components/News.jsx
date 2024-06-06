import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = 'YOUR_API_KEY';
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cc24f8ee892f4987b06028b0dfb95f84`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default News;
