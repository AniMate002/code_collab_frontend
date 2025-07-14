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

export const TaskStatuses = {
  NOT_STARTED: "not started",
  IN_PROGRESS: "in progress",
  FINISHED: "finished",
} as const;

export type TaskStatus = (typeof TaskStatuses)[keyof typeof TaskStatuses];
