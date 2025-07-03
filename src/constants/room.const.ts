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

export const RoomTypes = {
  PUBLIC: "public",
  PRIVATE: "private",
};
export type RoomType = (typeof RoomTypes)[keyof typeof RoomTypes];
