import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getUrl } from '../api/apiAction';
import { useToasts } from 'react-toast-notifications';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableListing from '../components/TableListing';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function UserListing() {
  const [users, setUsers] = useState([]);
  const { addToast } = useToasts();
  const [tableLoading, setTableLoading] = useState(false);
  const navigate = useNavigate();

  const columns = useMemo(() => ([
    {
      field: 'id',
      headerName: `User Id`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: `Name`,
      flex: 3,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'gender',
      headerName: `Gender`,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: `Email`,
      flex: 3,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: `Status`,
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
    navigate(`${id}/posts`);
  }, [navigate]);


  useEffect(() => {
    setTableLoading(true);
    getUrl('/public/v2/users').then(response => {
      setTableLoading(false);
      console.log("get User", response)
      setUsers(response);
    }).catch((error) => {
      setTableLoading(false);
      addToast(JSON.stringify(error), { appearance: 'error' })
    })

  }, []);


  return (
    <>
      <Typography style={{ fontWeight:"bold", fontSize:"20px", textAlign:"center" }}>Users Listing</Typography>
      <TableListing data={users} isLoading={tableLoading} columns={columns} />
    </>
  );
};

export default UserListing;