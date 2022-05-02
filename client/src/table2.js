import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data1 }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
              Order Id
            </TableCell>
            <TableCell
              align="right"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              Order date
            </TableCell>
            <TableCell
              align="right"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              Order Time
            </TableCell>
            <TableCell
              align="right"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              Customer Id
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data1.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.order_id}
              </TableCell>
              <TableCell align="right">{row.order_date}</TableCell>
              <TableCell align="right">{row.order_time}</TableCell>
              <TableCell align="right">{row.customer_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
