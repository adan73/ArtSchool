export interface NewsPost {
  id: number;
  title: string;
  details: string;
  createdAt: string;
  images: string[];
}

interface NewsImageResponse {
  id: number;
  imageUrl: string;
  imageOrder: number;
}

interface NewsResponse {
  id: number;
  title: string;
  details: string;
  createdAt: string;
  images: NewsImageResponse[];
}

export async function getNews(): Promise<NewsPost[]> {
  const response = await fetch("http://localhost:8080/api/news");

  if (!response.ok) {
    throw new Error("Failed to load news");
  }

  const data: NewsResponse[] = await response.json();

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