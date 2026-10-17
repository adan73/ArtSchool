import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ArtistsBox from "../components/ArtistsBox/ArtistsBox";
import { getArtists, type ArtistsPost } from "../Artists/ArtistsLogic";
import "./Artists.css";

function Artists() {
  const [Artists, setArtists] = useState<ArtistsPost[]>([]);

  useEffect(() => {
    getArtists()
      .then((data) => {
        setArtists(data);
      })
      .catch((error) => {
        console.error("Error loading Artists:", error);
      });
  }, []);

  return (
    <div className="Artists-page">
      <Navbar />

      <main className="Artists-main">
        <section className="Artists-header">
          <h1>Artists</h1>

          <p>some words about artists idk</p>
        </section>

        <section className="Artists-list">
          {Artists.length === 0 ? (
            <p className="Artists-empty">No artists yet.</p>
          ) : (
            Artists.map((artist) => (
              <ArtistsBox
                key={artist.id}
                fullName={artist.fullName}
                profileImage={artist.profileImage}
                specialization={artist.specialization}
                bio={artist.bio}
                artworks={artist.artworks ?? []}
              />
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Artists;
