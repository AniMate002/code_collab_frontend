export const RoomTopics = {
  ALL: "",
  Design: "Design",
  Technology: "Technology",
  Gaming: "Gaming",
  Education: "Education",
  IT: "IT",
  General: "General",
  Business: "Business",
} as const;

export type RoomTopic = (typeof RoomTopics)[keyof typeof RoomTopics];
