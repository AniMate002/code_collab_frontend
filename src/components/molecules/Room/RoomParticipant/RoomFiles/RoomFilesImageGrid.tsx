import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import type { File } from "../../../../../types/room.types";

interface RoomFilesImageGridProps {
  files: File[];
}

const RoomFilesImageGrid: React.FC<RoomFilesImageGridProps> = ({ files }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {files.map((file) => (
        <ImageListItem key={file.link}>
          <img
            src={`${file.link}?w=248&fit=crop&auto=format`}
            alt={file.sender.name}
            loading="lazy"
          />
          <ImageListItemBar position="bottom" title={file.sender.name} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default RoomFilesImageGrid;
