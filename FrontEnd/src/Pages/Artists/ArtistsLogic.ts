
export interface Artwork {
  id: number;
  artName: string;
  artImage: string;
  artDate: string;
  description: string;
}

export interface ArtistsPost {
  id: number;
  fullName: string;
  profileImage: string;
  specialization: string;
  bio: string;
  createdAt: string;
  artworks: Artwork[];
}

export async function getArtists(): Promise<ArtistsPost[]> {
  const response = await fetch(
    "http://localhost:8080/api/Artists"
  );

  if (!response.ok) {
    throw new Error("Failed to load artists");
  }

  const data: ArtistsPost[] = await response.json();

  return data.map((artist) => ({
    id: artist.id,
    fullName: artist.fullName,
    profileImage: artist.profileImage,
    specialization: artist.specialization,
    bio: artist.bio,
    createdAt: artist.createdAt,
    artworks: artist.artworks ?? [],
  }));
}
