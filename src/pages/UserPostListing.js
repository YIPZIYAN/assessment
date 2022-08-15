import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import CommentIcon from '@mui/icons-material/Comment';
import TableListing from '../components/TableListing';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Button, Link } from '@mui/material';
import Box from '@mui/material/Box';

function UserPostListing() {
  const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  const [tableLoading, setTableLoading] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  const columns = useMemo(() => ([
    {
      field: 'id',
      headerName: `Post Id`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'title',
      headerName: `Title`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'body',
      headerName: `Body`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: `Action`,
      width: 70,
      align: 'center',
      headerAlign: 'center',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CommentIcon size={25} />}
          label="Comment"
          onClick={() => navigateToEdit(params.id)}
        />
      ]
    },
    // eslint-disable-next-line
  ]), []);

  const navigateToEdit = useCallback(id => {
    navigate(`/posts/${id}/comments`);
  }, [navigate]);

  const passid = useCallback(id => {
    navigate(`/create-post/${id}`);
  }, [navigate]);


  useEffect(() => {
    setTableLoading(true);
    getUrl(`/public/v2/users/${id}/posts`).then(response => {
      
      console.log("get user Post", response)
      setUsers(response);
      setTableLoading(false);
    }).catch((error) => {
      setTableLoading(false);
      addToast(JSON.stringify(error), { appearance: 'error' })
    })

  }, []);


  return (
    <>
      <Typography style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>Post</Typography>
      <Typography style={{ textAlign: "left" }} m={2}>User ID:{id}</Typography>
      <Box
        m={2}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Link 
        underline="none" 
        href={`/create-post/${id}`}
        >
          <Button color='primary' variant="outlined">Create Post</Button>
        </Link>
      </Box>


      <TableListing data={users} isLoading={tableLoading} columns={columns} />
    </>
  );
};

export default UserPostListing;