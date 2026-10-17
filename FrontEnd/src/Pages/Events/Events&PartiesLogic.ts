export interface EventsPost {
  id: number;
  title: string;
  details: string;
  createdAt: string;
  images: string[];
}

interface EventsImageResponse {
  id: number;
  imageUrl: string;
  imageOrder: number;
}

interface EventsResponse {
  id: number;
  title: string;
  details: string;
  createdAt: string;
  images: EventsImageResponse[];
}

export async function getEvents(): Promise<EventsPost[]> {
  const response = await fetch("http://localhost:8080/api/events");

  if (!response.ok) {
    throw new Error("Failed to load events");
  }

  const data: EventsResponse[] = await response.json();

  return data.map((post) => ({
    id: post.id,
    title: post.title,
    details: post.details,
    createdAt: post.createdAt,

    images: (post.images ?? [])
      .sort((a, b) => a.imageOrder - b.imageOrder)
      .map((image) => image.imageUrl),
  }));
}