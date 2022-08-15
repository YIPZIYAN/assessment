import UserListing from './pages/UserListing';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserPostListing from './pages/UserPostListing';
import { ButtonGroup, Button, Link, Typography } from '@mui/material';
import CreatePost from './pages/CreatePost';
import PostListing from './pages/PostListing';
import PostCommentListing from './pages/PostCommentListing';

const routes = [
  {
    path: "/users",
    component: <UserListing />,
    title: 'users'
  },
  {
    path: "/users/:id/posts",
    component: <UserPostListing />,
    title: 'user-post',
  },
  {
    path: "/create-post/:id",
    component: <CreatePost />,
    title: 'create-post',
  },
  {
    path: "/posts",
    component: <PostListing />,
    title: 'posts',
  },  
  {
    path: "/posts/:id/comments",
    component: <PostCommentListing />,
    title: 'post-comments',
  },
];

function App() {
  return (

    <div className="App">
      <Link underline="none">
        <ButtonGroup color='primary' variant="contained">
          <Button href="/">Home</Button>
          <Button href="/users">User</Button>
          <Button href="/posts">Post</Button>
        </ButtonGroup>
      </Link>
      <Typography style={{ fontWeight:"bold", fontSize:"20px", textAlign:"center" }}>Welcome To Post Model!</Typography>
      <Routes>
        {
          routes.map((route, routeIndex) => {
            return (
              <Route key={routeIndex} path={route.path} element={route.component} />
            )
          })
        }
      </Routes>
    </div>

  );
}

export default App;
