import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NewsBox from "../components/NewsBox/NewsBox";
import { getNews, type NewsPost } from "../News/NewsLogic";
import "./News.css";

function News() {
  const [news, setNews] = useState<NewsPost[]>([]);

  const [currentPage, setCurrentPage] = useState(0);

  const NEWS_PER_PAGE = 6;

  const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

  const visibleNews = news.slice(
    currentPage * NEWS_PER_PAGE,
    (currentPage + 1) * NEWS_PER_PAGE,
  );

  const nextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages - 1));
  };

  const previousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
  };

  useEffect(() => {
    getNews()
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Error loading news:", error);
      });
  }, []);

  const scrollToNews = (id: number) => {
    document.getElementById(`news-${id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="news-page">
      <Navbar />

      <main className="news-main">
        <section className="news-header">
          <h1>Art News</h1>
          <p>
            Latest news about the art world. Stay tuned for the latest updates,
            events, and announcements.
          </p>
        </section>

        {/* News quick navigation */}
        {news.length > 0 && (
          <nav className="news-navigation" aria-label="News quick navigation">
            <div className="news-navigation-header">
              <div>
                <h2>Explore News</h2>
                <p>Choose an article to jump to it.</p>
              </div>

              <span className="news-navigation-page-count">
                {currentPage + 1} / {totalPages}
              </span>
            </div>

            <div key={currentPage} className="news-navigation-list">
              {visibleNews.map((post, index) => (
                <button
                  key={post.id}
                  type="button"
                  className="news-navigation-item"
                  onClick={() => scrollToNews(post.id)}
                >
                  <span className="news-navigation-number">
                    {String(currentPage * NEWS_PER_PAGE + index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="news-navigation-title">{post.title}</span>

                  <span className="news-navigation-arrow" aria-hidden="true">
                    ↘
                  </span>
                </button>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="news-navigation-controls">
                <button
                  type="button"
                  onClick={previousPage}
                  disabled={currentPage === 0}
                  className="news-navigation-control"
                >
                  ← Previous
                </button>

                <div className="news-navigation-dots">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`news-navigation-dot ${
                        currentPage === index ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(index)}
                      aria-label={`Go to page ${index + 1}`}
                      aria-current={currentPage === index ? "page" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="news-navigation-control"
                >
                  Next →
                </button>
              </div>
            )}
          </nav>
        )}

        {/* News articles */}
        <section className="news-list">
          {news.length === 0 ? (
            <p className="news-empty">No news yet.</p>
          ) : (
            news.map((post) => (
              <div
                key={post.id}
                id={`news-${post.id}`}
                className="news-article-anchor"
              >
                <NewsBox
                  title={post.title}
                  details={post.details}
                  date={post.createdAt}
                  images={post.images}
                />
              </div>
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default News;
