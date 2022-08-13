import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableListing from '../components/TableListing';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Button, Link } from '@mui/material';

function UserPostListing() {
  const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  const [tableLoading, setTableLoading] = useState(false);
  const navigate = useNavigate();
  let {id} =useParams();

  const columns = useMemo(() => ([
    {
      field: 'name',
      headerName: `name`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'gender',
      headerName: `gender`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: `email`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: `status`,
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
          icon={<VisibilityIcon size={25} />}
          label="View"
          onClick={() => navigateToEdit(params.id)}
        />
      ]
    },
    // eslint-disable-next-line
  ]), []);

  const navigateToEdit = useCallback(id => {
    navigate(`/users/${id}/posts`);
  }, [navigate]);


  useEffect(() => {
    setTableLoading(true);
    getUrl(`/public/v2/users/${id}/posts`).then(response => {
      setTableLoading(false);
      console.log("get user Post", response)
      setUsers(response);
    }).catch((error) => {
      setTableLoading(false);
      addToast(JSON.stringify(error), { appearance: 'error' })
    })

  }, []);


  return (
      <>
          <Typography>Posts</Typography>
          <Link href="/create-post">
              <Button>Create</Button>
          </Link>
          <TableListing data={users} isLoading={tableLoading} columns={columns} />
      </>
  );
};

export default UserPostListing;