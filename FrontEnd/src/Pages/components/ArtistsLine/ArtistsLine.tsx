import "./ArtistsLine.css";

import artist1Profile from "../../../assets/artist1.jpg";
import artist1Art from "../../../assets/art1.jpg";

import artist2Profile from "../../../assets/artist1.jpg";
import artist2Art from "../../../assets/art1.jpg";

import artist3Profile from "../../../assets/artist1.jpg";
import artist3Art from "../../../assets/art1.jpg";

const artists = [
  {
    name: "Artist One",
    profile: artist1Profile,
    artwork: artist1Art,
  },
  {
    name: "Artist Two",
    profile: artist2Profile,
    artwork: artist2Art,
  },
  {
    name: "Artist Three",
    profile: artist3Profile,
    artwork: artist3Art,
  },
];

function ArtistsLine() {
  return (
    <section className="artists-section">
      <h2>Artists</h2>

      <div className="artists-line">
        {artists.map((artist) => (
          <div className="artist-profile-box" key={artist.name}>

            <img
              className="artist-profile"
              src={artist.profile}
              alt={artist.name}
            />

            <p>{artist.name}</p>

            <div className="art-preview">
              <img
                src={artist.artwork}
                alt={`Artwork by ${artist.name}`}
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtistsLine;