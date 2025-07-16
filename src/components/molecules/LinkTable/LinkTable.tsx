import React from "react";
import type { Link } from "../../../types/room.types.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link as LinkReactRouter } from "react-router";
import SecondaryText from "../../atoms/SecondaryText/SecondaryText.tsx";

interface LinkTableProps {
  links: Link[];
}

const LinkTable: React.FC<LinkTableProps> = ({ links }) => {
  const theme = useTheme();
  if (!links || links.length === 0)
    return <SecondaryText>No links</SecondaryText>;
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Path</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link) => (
            <TableRow key={link._id.toString()}>
              <TableCell component="th" scope="row">
                {link._id.toString()}
              </TableCell>
              <TableCell align={"right"}>{link.name}</TableCell>
              <TableCell align="right">{link.link}</TableCell>
              <TableCell align="right">
                <LinkReactRouter
                  to={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <OpenInNewIcon
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "16px",
                      marginTop: theme.spacing(0.8),
                    }}
                  />
                </LinkReactRouter>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LinkTable;
