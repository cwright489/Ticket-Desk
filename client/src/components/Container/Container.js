import React, { Component , useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));




export default function Container() {
    const classes = useStyles();

   const [tickets, setTickets] = useState("")

   useEffect(() =>
    {
        fetch("http://localhost:5000/tickets")
        .then(res => res.json())
        .then(res => setTickets({
            tix: res
        })) 
   
        })

        const getTix = () => {
            return tickets.tix.map(ticket => {
            return <div>
                <h1>{ticket.userAssigned}</h1>
                <h2>{ticket.issueDesc}</h2>
                <h2>{ticket.status}</h2>
                <h2>{ticket.priority}</h2>
                </div>
            })
        }

    function FormRow() {
        return (
            <React.Fragment>
              
        
            
            </React.Fragment>
        );
    } 
    
    return (
    <>
    <h1>HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLo</h1>
     <div style={{textAlign: "center"}}>
                {tickets.tix
                 ? 
                <h1>{getTix()}</h1>
                    // <Grid item xs={4}>
                    //     <Paper className={classes.paper}>STATUS</Paper>
                    // </Grid>
                    // <Grid item xs={4}>
                    //     <Paper className={classes.paper}>DEPARTMENT</Paper>
                    // </Grid>
                    : <h1>Nope </h1>
            }
                </div>
    </>
        // <div className={classes.root}>
        //     <Grid container spacing={1}>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //         <Grid container item xs={12} spacing={3}>
        //             <FormRow />
        //         </Grid>
        //     </Grid>
        // </div >
    );
    
}
