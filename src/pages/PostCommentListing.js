import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import TableListing from '../components/TableListing';
import {  useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

function PostCommentListing() {
  const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  const [tableLoading, setTableLoading] = useState(false);
  let { id } = useParams();

  const columns = useMemo(() => ([
    {
      field: 'id',
      headerName: `Comment Id`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
        field: 'name',
        headerName: `Name`,
        flex: 2,
        align: 'center',
        headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: `Email`,
      flex: 2,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'body',
      headerName: `Body`,
      flex: 3,
      align: 'center',
      headerAlign: 'center',
    },
    // eslint-disable-next-line
  ]), []);



  useEffect(() => {
    setTableLoading(true);
    getUrl(`/public/v2/posts/${id}/comments`).then(response => {
      
      console.log("get Post Comment", response)
      setUsers(response);
      setTableLoading(false);
    }).catch((error) => {
      setTableLoading(false);
      addToast(JSON.stringify(error), { appearance: 'error' })
    })

  }, []);


  return (
    <>
      <Typography style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>Comment Listing</Typography>
      <Typography style={{ textAlign: "left" }} m={2}>Post ID:{id}</Typography>
      <TableListing data={users} isLoading={tableLoading} columns={columns} />
    </>
  );
};

export default PostCommentListing;