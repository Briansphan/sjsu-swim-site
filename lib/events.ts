export type Event = {
  type: string;
  badgeClass: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    type: "First Practice",
    badgeClass: "bg-blue-100 text-blue-600",
    title: "Practice Day",
    description: "First practice of the semester! We will be meeting at the pool at 6:00PM.",
    location: "SRAC Aquatic Center Competition Pool",
    date: "2025-08-30",
    time: "6:00 PM",
  },
  {
    type: "Swim Clinic",
    badgeClass: "bg-green-100 text-green-600",
    title: "Technique Workshop",
    description: "Special workshop focusing on stroke technique and breathing patterns for all skill levels.",
    location: "SRAC Aquatic Center Competition Pool",
    date: "2025-9-11",
    time: "6:00 PM",
  },
  {
    type: "Social",
    badgeClass: "bg-yellow-100 text-yellow-600",
    title: "Team Pool Party",
    description: "End of season celebration with food, games, and team bonding activities for all members.",
    location: "Campus Quad",
    date: "2025-09-01",
    time: "5:00 PM",
  },
]; 