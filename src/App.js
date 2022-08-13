import UserListing from './pages/UserListing';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserPostListing from './pages/UserPostListing';
import { Button, Link } from '@mui/material';
import CreatePost from './pages/CreatePost';

const routes = [
  {
    path: "/users",
    component: <UserListing />,
    title: 'users,'
  },
  {
    path: "/users/:id/posts",
    component:<UserPostListing />,
    title: 'user-post',
  },
  {
    path: "/create-post",
    component:<CreatePost />,
    title: 'create-post',
  }
];

function App() {
  return (
    <div className="App">
      <Link  href="/users">
        <Button>
          User
        </Button>
        </Link>
        <Routes>
        {
          routes.map((route,routeIndex)=>{
            return (
              <Route key={routeIndex}  path={route.path} element={route.component} />
            )
          })
        }
        </Routes>
    </div>
  );
}

export default App;
