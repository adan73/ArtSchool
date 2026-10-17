
import { useEffect, useState } from "react";

export interface Artwork {
  id: number;
  artName: string;
  artImage: string;
  artDate: string;
  description: string;
}

export function useArtistsBoxLogic() {
  const [selectedArt, setSelectedArt] =
    useState<Artwork | null>(null);

  const openArtwork = (art: Artwork) => {
    setSelectedArt(art);
  };

  const closeArtwork = () => {
    setSelectedArt(null);
  };

  useEffect(() => {
    if (!selectedArt) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeArtwork();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedArt]);

  return {
    selectedArt,
    openArtwork,
    closeArtwork,
  };
}

export function formatArtworkDate(date: string) {
  if (!date) return "Unknown date";

  const parsed = new Date(date + "T00:00:00");

  return Number.isNaN(parsed.getTime())
    ? date
    : parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
}
