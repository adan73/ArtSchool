import Navbar from "../components/Navbar/Navbar";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import "./HomeCSS.css";
import { Link } from "react-router-dom";
import classImage from "../../assets/painting.jpg";
import { useState } from "react";
import useHomeLogic from "./HomeLogic";
import ArtistsLine from "../components/ArtistsLine/ArtistsLine";ArtistsLine
import merch1 from "../../assets/shirt.jpg";
import merch2 from "../../assets/hat.jpg";
import merch3 from "../../assets/mug.jpg";
import merch4 from "../../assets/bag.jpg";
import Footer from "../components/Footer/Footer";

function Home() {
  const { imageOpen, openImage, closeImage } = useHomeLogic();
  return (
    <div className="homepage">
      <Navbar />

      <main className="home">
        <HomeSlider />
        <section className="classes-box">
          <div className="classes-preview">
            <h2>Find the right class for you</h2>

            <p className="classes-description">
              We offer creative art classes for children, teenagers, and adults,
              as well as programs for students preparing for college. With
              options in drawing, painting, and more, there's a place for
              everyone to create, learn, and develop their skills.
            </p>

            <div className="classes-buttons">
              <Link to="/classes" className="classes-btn">
                Explore Classes
              </Link>

              <Link to="/signup" className="classes-btn secondary">
                Sign Up
              </Link>
            </div>
          </div>

          <div className="classes-image">
            <img
              src={classImage}
              alt="Students taking an art class"
              onClick={openImage}
            />
            <p className="Artist_of_the_month">
              The painting of the month :name
            </p>
          </div>
          {imageOpen && (
            <div className="image-modal" onClick={closeImage}>
              <button className="image-modal-close" onClick={closeImage}>
                ×
              </button>

              <img
                src={classImage}
                alt="Students taking an art class"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </section>
        <ArtistsLine />
       <section className="events-section">

  <h2 className="events-title">
    Events for everyone
  </h2>

  <div className="events-info">
    <p>
      Join us for films, performances, art making, talks, and more.
    </p>

    <Link to="/events" className="events-calendar-btn">
      View the Calendar
    </Link>
  </div>

</section>
       <section className="store-preview">

  <h2>Visit Our Art Store</h2>

  <div className="store-preview-grid">
    <div className="store-preview-box">
      <img src={merch1} alt="Art school merchandise" />
    </div>

    <div className="store-preview-box">
      <img src={merch2} alt="Art school merchandise" />
    </div>

    <div className="store-preview-box">
      <img src={merch3} alt="Art school merchandise" />
    </div>

    <div className="store-preview-box">
      <img src={merch4} alt="Art school merchandise" />
    </div>
  </div>

  <Link to="/shop" className="store-preview-button">
    Visit Store
  </Link>

</section>
      </main>
        <Footer/>

    </div>
  );
}

export default Home;
