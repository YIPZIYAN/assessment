import React, { useEffect, useState } from 'react';
import { getUrl, postUrl , putUrl, deleteUrl } from '../api/apiAction';

function CreateUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUrl('/public/v2/users/1').then(response => {
      console.log("get", response);
    })

    postUrl('/public/v2/users').then(response => {
      console.log("post", response);
    }).catch((error) => {
      console.warn(error);
    })

    putUrl('/public/v2/users/1').then(response => {
      console.log("put", response);
    }).catch((error) => {
      console.warn(error);
    })

    deleteUrl('/public/v2/users/id').then(response => {
      console.log("delete", response);
    }).catch((error) => {
      console.warn(error);
    })
  }, []);


  return (
    <div>
      test
    </div>
  );
};

export default CreateUser;