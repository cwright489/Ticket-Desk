import React, { Component , useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
        
    },
    table: {
        minWidth: 400,
        // maxWidth: "725px",
      },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

export default function Container() {
    const classes = useStyles();

   const [tickets, setTickets] = useState({tix:[]})

   useEffect(() =>
    {
        fetch("http://localhost:5000/tickets")
        .then(res => res.json())
        .then(res => setTickets({
            tix: res
        })) 
   
        })

    


  return (
    <TableContainer id = "tableContainer" component={Paper}className = {classes.paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="right">Priority</StyledTableCell>
            <StyledTableCell align="right">Take Ownership</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.tix.map((ticket,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="left">{ticket.userAssigned}</StyledTableCell>
              <StyledTableCell align="left">{ticket.issueDesc}</StyledTableCell>
              <StyledTableCell align="center">{ticket.status}</StyledTableCell>
              <StyledTableCell align="right">{ticket.priority}</StyledTableCell>
              <StyledTableCell align="right"> <Button variant="contained" color="primary">
        Assign Ticket
      </Button></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
