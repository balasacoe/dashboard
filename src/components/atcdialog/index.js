import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import { addCard } from "../../actions";
import { makeStyles } from '@material-ui/core/styles';
import ATCButton from "../atcbutton";


const ATCDialog = React.memo(({ listId, dispatch }) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [errorText, setErrorText] = useState("");


    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length > 0) {
            setTitle(e.target.value);
            setErrorText("");
        }
        else {
            setErrorText("Please enter title");
        }
    };

    const handleSave = () => {
        if (title.length > 0) {
            dispatch(addCard(listId, title));
            setOpen(false);
        }
        else {
            setErrorText("Please enter title");
        }
    };
    return (
        <div>

            <ATCButton onClick={handleClickOpen} className={classes.margin}>CREATE NEW TASK</ATCButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">CREATE TASK</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        error={!!errorText}
                        margin="dense"
                        id="title"
                        label="Title"
                        onChange={handleChange}
                        helperText={errorText}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        SAVE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default connect()(ATCDialog)