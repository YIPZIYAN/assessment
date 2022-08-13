import React, { useState } from 'react';
import { postUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import { Typography, Button, TextField,Grid, Link } from '@mui/material';
import _ from 'lodash';

function CreatePost() {
    const [state, setState] = useState({
        user:'',
        user_id:1,
        title:'',
        body:'',
    });
    const [inputErrors, setInputErrors]=useState([]);
    const { addToast } = useToasts();

    const submitData = () => {
        postUrl(`/public/v2/users/${state.user_id}/posts`,state).then(response => {
            console.log("post", response);
            let result=response;
            if(Array.isArray(result)){
                setInputErrors(response);
            }else{
                addToast("Create success", {appearance:'success'})
            }
        })
    }
    return (
        <>
        {console.log("state",state)}
        {console.log("error",inputErrors)}
            <Typography>Create Post</Typography>
            <Grid container>
                <Grid item>
                    <TextField
                        fullWidth
                        label="user"
                        value={state.user || ""}
                        onChange={(event)=>setState({...state, user:event.target.value})}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="user id"
                        value={state.user_id || ""}
                        onChange={(event)=>setState({...state, user_id:event.target.value})}
                    
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="title"
                        value={state.title || ""}
                        onChange={(event)=>setState({...state, title:event.target.value})}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="body"
                        value={state.body || ""}
                        onChange={(event)=>setState({...state, body:event.target.value})}
                    />
                </Grid>
            </Grid>
            {
                _.size(inputErrors) > 0 && _.map(inputErrors, (error, errorIndex)=>{
                    return (
                        <Typography style={{color:'red'}} key={errorIndex} >{error.field}: {error.message}</Typography>
                    )
                })
            }
            <Button onClick={submitData}>Submit</Button>
        </>
    );
};

export default CreatePost;