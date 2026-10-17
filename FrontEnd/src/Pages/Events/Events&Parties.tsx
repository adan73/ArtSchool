import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NewsBox from "../components/NewsBox/NewsBox";
import { getEvents, type EventsPost } from "../Events/Events&PartiesLogic";
import "./Events&Parties.css";

function Events() {
  const [events, setEvents] = useState<EventsPost[]>([]);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  }, []);

  return (
    <div className="events-page">
      <Navbar />

      <main className="events-main">
        <section className="events-header">
          <h1>Parties & Events</h1>

          <p>
            See what's coming up — from creative parties and exhibitions to
            special events and unforgettable studio moments.{" "}
          </p>
        </section>

        <section className="events-list">
          {events.length === 0 ? (
            <p className="events-empty">No events yet.</p>
          ) : (
            events.map((post) => (
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

export default Events;
