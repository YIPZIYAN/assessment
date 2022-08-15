import React, { useState } from 'react';
import { postUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import { Typography, Button, TextField, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

function CreatePost() {

    let { id } = useParams();
    
    const [state, setState] = useState({
        id: '',
        user_id: id,
        title: '',
        body: '',
    });
    const [inputErrors, setInputErrors] = useState([]);
    const { addToast } = useToasts();

    const submitData = () => {
        postUrl(`/public/v2/users/${state.user_id}/posts`, state)
            .then(response => {
                console.log("post", response);
                let result = response;
                if (Array.isArray(result)) {
                    setInputErrors(response);
                } else {
                    addToast("Create success", { appearance: 'success' })
                }
            })
    }

    return (
        <>
            {console.log("state", state)}
            {console.log("error", inputErrors)}
            <Typography style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>Create Post</Typography>
            <Grid container>
                <Grid item>
                    <TextField
                        fullWidth
                        label="User ID"
                        value={state.user_id || ""}
                        inputProps={
                            { readOnly: true, onFocus:false}
                        }
                        onChange={(event) => setState({ ...state, user_id: event.target.value })}

                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Title"
                        value={state.title || ""}
                        onChange={(event) => setState({ ...state, title: event.target.value })}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Body"
                        value={state.body || ""}
                        onChange={(event) => setState({ ...state, body: event.target.value })}
                    />
                </Grid>
            </Grid>
            {
                _.size(inputErrors) > 0 && _.map(inputErrors, (error, errorIndex) => {
                    return (
                        <Typography style={{ color: 'red' }} key={errorIndex} >{error.field}: {error.message}</Typography>
                    )
                })
            }
            <Button onClick={submitData}>Submit</Button>
        </>
    );
};

export default CreatePost;