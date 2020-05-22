import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import ListItemText from '@material-ui/core/ListItemText';
//import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { response } from 'express';

const useStyles = makeStyles((theme) => ({
    contained:
    {
        padding: "2%"
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    background: {
        backgroundColor: "white"
    },
     root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: 700,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
    marginTop: theme.spacing(2),
    },
  }
    
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SubmitForm() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [priority, setPriority] = React.useState();
    const [userAssigned, AssignUser] = React.useState();
    //const [issueDesc, setIssueDesc] = React.useState();

    const data = 
    {
        userID: "",
        dateCreated: Date.now,
        priority: ,
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () =>
    {
        
    }
    const addTicket = () =>
    {
        fetch("http://localhost:5000/tickets/add",
        {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
            
        }).then(response => response.json())
        .then(data => 
            {

            })
    }


    return (
        <div>
            <Button className={classes.background} variant="outlined" color="primary" onClick={handleClickOpen}>
                Submit New Ticket
      </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Description
            </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Submit
            </Button>
                    </Toolbar>
                </AppBar>
                <List className = {classes.contained}>
                    {<TextField required id="standard-required" label="Required" defaultValue="Type subject here" />
                    /* {<ListItem button>
                        <ListItemText primary="Subject" secondary="TYPE YOUR TEXT HERE" />
                    </ListItem> */}
                    <Divider />
                    {<TextField
                        id="standard-multiline-flexible"
                        label="Required"
                        multiline
                        rowsMax={4}
                        defaultValue = "Enter ticket description here"
                        //value={value}
                        //onChange={handleChange}
                    />/* <ListItem button>
                        <ListItemText primary="Description " secondary="TYPE YOUR TEXT HERE" />
                    </ListItem> } */}
                    <Divider />
                    {
                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priority}
                    onChange={setPriority}
                    >
                    <MenuItem value={"Low"}>Low</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"High"}>High</MenuItem>
                    <MenuItem value={"Critical"}>Critical</MenuItem>
                    </Select>
                    </FormControl>}

                    <Divider />

                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Assign User</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userAssigned}
                    onChange={AssignUser}
                    >
                    <MenuItem value={"Page"}>Page</MenuItem>
                    <MenuItem value={"Tamara"}>Tomato</MenuItem>
                    <MenuItem value={"Ryan"}>Ryan</MenuItem>
                    <MenuItem value={"Chance"}>Chance</MenuItem>
                    </Select>
                    </FormControl>}
                </List>
            </Dialog>
        </div>
    );
}
