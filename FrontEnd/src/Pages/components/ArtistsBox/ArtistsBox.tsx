
import {
  useArtistsBoxLogic,
  formatArtworkDate,
  type Artwork,
} from "./ArtistsBoxLogic";

import "./ArtistsBox.css";

interface ArtistsBoxProps {
  fullName: string;
  profileImage: string;
  specialization: string;
  bio: string;
  artworks: Artwork[];
}

export default function ArtistsBox({
  fullName,
  profileImage,
  specialization,
  bio,
  artworks = [],
}: ArtistsBoxProps) {
  const {
    selectedArt,
    openArtwork,
    closeArtwork,
  } = useArtistsBoxLogic();

  return (
    <article className="Artists-box">

      <div className="Artists-box-header">
        <img
          className="Artists-box-profile"
          src={profileImage}
          alt={fullName}
        />

        <div className="Artists-box-content">
          <h2>{fullName}</h2>

          <span className="Artists-box-specialization">
            {specialization}
          </span>

          <p className="Artists-box-bio">{bio}</p>
        </div>
      </div>

      {artworks.length > 0 && (
        <div className="Artists-box-gallery">
          <h3>Artworks</h3>

          <div className="Artists-box-images">
            {artworks.map((art) => (
              <button
                key={art.id}
                type="button"
                className="Artists-box-image"
                onClick={() => openArtwork(art)}
                aria-label={`View ${art.artName}`}
              >
                <img
                  src={art.artImage}
                  alt={art.artName}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Artwork popup */}
      {selectedArt && (
        <div
          className="Artists-modal-overlay"
          onClick={closeArtwork}
        >
          <div
            className="Artists-modal Artists-modal-animated"
            role="dialog"
            aria-modal="true"
            aria-label={selectedArt.artName}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="Artists-modal-close"
              onClick={closeArtwork}
              aria-label="Close artwork"
            >
              &times;
            </button>

            <div className="Artists-modal-image">
              <img
                src={selectedArt.artImage}
                alt={selectedArt.artName}
              />
            </div>

            <div className="Artists-modal-details">
              <h2>{selectedArt.artName}</h2>

              <span className="Artists-modal-artist">
                By {fullName}
              </span>

              <div className="Artists-modal-section">
                <h4>Date Created</h4>
                <p>
                  {formatArtworkDate(selectedArt.artDate)}
                </p>
              </div>

              <div className="Artists-modal-section">
                <h4>Description</h4>
                <p>{selectedArt.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
