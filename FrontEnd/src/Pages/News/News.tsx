import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NewsBox from "../components/NewsBox/NewsBox";
import { getNews, type NewsPost } from "../News/NewsLogic";
import "./News.css";

function News() {
  const [news, setNews] = useState<NewsPost[]>([]);

  useEffect(() => {
    getNews()
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Error loading news:", error);
      });
  }, []);

  return (
    <div className="news-page">
      <Navbar />

      <main className="news-main">
        <section className="news-header">

          <h1>Art News</h1>

          <p>
            Latest news about the art world. Stay tuned for the latest updates, events, and announcements.
          </p>
        </section>

        <section className="news-list">
          {news.length === 0 ? (
            <p className="news-empty">No news yet.</p>
          ) : (
            news.map((post) => (
              <NewsBox
                key={post.id}
                title={post.title}
                details={post.details}
                date={post.createdAt}
                images={post.images}
              />
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default News;
