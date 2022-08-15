import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import TableListing from '../components/TableListing';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

function PostListing() {
  const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  const [tableLoading, setTableLoading] = useState(false);
  const navigate = useNavigate();

  const columns = useMemo(() => ([
    {
      field: 'id',
      headerName: `Post ID`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'user_id',
      headerName: `User ID`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'title',
      headerName: `Title`,
      flex: 3,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'body',
      headerName: `Body`,
      flex: 4,
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
          label="ViewComment"
          onClick={() => navigateToEdit(params.id)}
        />
      ]
    },
    // eslint-disable-next-line
  ]), []);

  const navigateToEdit = useCallback(id => {
    navigate(`${id}/comments`);
  }, [navigate]);


  useEffect(() => {
    setTableLoading(true);
    getUrl('/public/v2/posts').then(response => {
      setTableLoading(false);
      console.log("get Post", response)
      setUsers(response);
    }).catch((error) => {
      setTableLoading(false);
      addToast(JSON.stringify(error), { appearance: 'error' })
    })

  }, []);


  return (
    <>
      <Typography style={{ fontWeight:"bold", fontSize:"20px", textAlign:"center" }}>Posts Listing</Typography>
      <TableListing data={users} isLoading={tableLoading} columns={columns} />
    </>
  );
};

export default PostListing;