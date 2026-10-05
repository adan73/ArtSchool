export type ClassSchedule = {
  id: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
};

export type ArtClass = {
  id: number;
  name: string;
  category: string;
  ageGroup: string;
  description: string;
  teacher: string;
  schedules: ClassSchedule[];
};

export async function getClasses(): Promise<ArtClass[]> {
  const response = await fetch("http://localhost:8080/api/classes");

  if (!response.ok) {
    throw new Error("Failed to load classes");
  }

  return response.json();
}